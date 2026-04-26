/* === BUZZWORD GAME — APP LOGIC === */

const TEAM_COLORS = ['#6366f1', '#f43f5e', '#22c55e', '#f59e0b', '#06b6d4'];
const ROUND_TIME = 45;
const MAX_PASSES = 3;

// === SOUND EFFECTS (Web Audio API) ===

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function ensureAudio() {
  if (!audioCtx) audioCtx = new AudioCtx();
}

function playDing() {
  try {
    ensureAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    osc.frequency.setValueAtTime(1320, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  } catch(e) {}
}

function playBuzz() {
  try {
    ensureAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch(e) {}
}

function playTick() {
  try {
    ensureAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } catch(e) {}
}

function playSteal() {
  try {
    ensureAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.setValueAtTime(660, audioCtx.currentTime + 0.1);
    osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch(e) {}
}

function playGameOver() {
  try {
    ensureAudio();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.15);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.15 + 0.4);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + i * 0.15);
      osc.stop(audioCtx.currentTime + i * 0.15 + 0.4);
    });
  } catch(e) {}
}

const state = {
  difficulty: 'medium',
  categories: [...CATEGORIES],
  timerEnabled: true,
  passesEnabled: true,
  showAnswers: true,
  teams: [
    { name: 'Team 1', score: 0 },
    { name: 'Team 2', score: 0 }
  ],
  roundTime: 45,
  winScore: 50,
  currentTeamIndex: 0,
  currentCard: null,
  currentClueIndex: 0,
  roundScore: 0,
  passesUsed: 0,
  roundResults: [],
  usedCards: new Set(),
  timerInterval: null,
  timeRemaining: 45,
  timerStarted: false,
  roundHistory: [],
  stealActive: false,
  stealClueIndex: -1,
  stealTeamIndex: -1
};

// === SCREEN MANAGEMENT ===

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// === SETUP ===

function startSetup() {
  state.difficulty = 'medium';
  state.categories = [...CATEGORIES];
  state.timerEnabled = true;
  state.passesEnabled = true;
  state.showAnswers = true;
  state.roundTime = 45;
  state.winScore = 50;
  state.teams = [
    { name: 'Team 1', score: 0 },
    { name: 'Team 2', score: 0 }
  ];
  state.usedCards = new Set();
  state.roundHistory = [];

  renderDifficultyButtons();
  renderCategories();
  renderCardCount();
  renderOptionToggles();
  renderTimeSelector();
  renderScoreSelector();
  renderTeams();
  showScreen('screen-setup');
}

function renderDifficultyButtons() {
  document.querySelectorAll('.btn-difficulty').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.difficulty === state.difficulty);
  });
}

function selectDifficulty(d) {
  state.difficulty = d;
  renderDifficultyButtons();
  renderCategories();
  renderCardCount();
}

function toggleOption(option) {
  if (option === 'timer') state.timerEnabled = !state.timerEnabled;
  if (option === 'passes') state.passesEnabled = !state.passesEnabled;
  if (option === 'answers') state.showAnswers = !state.showAnswers;
  renderOptionToggles();
}

function renderOptionToggles() {
  const timerEl = document.getElementById('toggle-timer');
  const passesEl = document.getElementById('toggle-passes');
  const answersEl = document.getElementById('toggle-answers');
  timerEl.classList.toggle('active', state.timerEnabled);
  passesEl.classList.toggle('active', state.passesEnabled);
  if (answersEl) answersEl.classList.toggle('active', state.showAnswers);

  const timeSelector = document.getElementById('time-selector');
  if (timeSelector) {
    timeSelector.classList.toggle('disabled', !state.timerEnabled);
  }

  const timerDesc = document.getElementById('timer-desc');
  if (timerDesc) {
    timerDesc.textContent = state.timerEnabled ? `${state.roundTime} seconds per round` : 'No time limit';
  }
}

function selectTime(seconds) {
  state.roundTime = seconds;
  renderTimeSelector();
  renderOptionToggles();
}

function renderTimeSelector() {
  document.querySelectorAll('.btn-time').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.time) === state.roundTime);
  });
}

function selectWinScore(score) {
  state.winScore = score;
  renderScoreSelector();
}

function renderScoreSelector() {
  document.querySelectorAll('.btn-score').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.score) === state.winScore);
  });
}

function getFilteredCards(difficulty, categories) {
  return CARDS.filter(c => categories.includes(c.category));
}

function renderCardCount() {
  const count = getFilteredCards(state.difficulty, state.categories).length;
  const el = document.getElementById('card-count');
  if (!el) return;
  el.textContent = `${count} card${count !== 1 ? 's' : ''} available`;
  el.classList.toggle('low', count < 5);
}

function renderCategories() {
  const container = document.getElementById('category-toggles');
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const count = CARDS.filter(c => c.category === cat).length;
    const active = state.categories.includes(cat);
    const div = document.createElement('div');
    div.className = `category-toggle${active ? ' active' : ''}`;
    div.innerHTML = `
      <div class="toggle-check">${active ? '✓' : ''}</div>
      <span class="toggle-label">${cat}</span>
      <span class="toggle-count">${count} cards</span>
    `;
    div.onclick = () => toggleCategory(cat);
    container.appendChild(div);
  });
}

function toggleCategory(cat) {
  const idx = state.categories.indexOf(cat);
  if (idx >= 0) {
    state.categories.splice(idx, 1);
  } else {
    state.categories.push(cat);
  }
  renderCategories();
  renderCardCount();
}

function toggleAllCategories() {
  if (state.categories.length === CATEGORIES.length) {
    state.categories = [];
  } else {
    state.categories = [...CATEGORIES];
  }
  renderCategories();
  renderCardCount();
}

function renderTeams() {
  const list = document.getElementById('team-list');
  list.innerHTML = '';

  state.teams.forEach((team, i) => {
    const div = document.createElement('div');
    div.className = 'team-entry';
    div.dataset.teamId = i;
    div.innerHTML = `
      <span class="team-color" style="background:${TEAM_COLORS[i % TEAM_COLORS.length]}"></span>
      <input type="text" class="team-name-input" value="${team.name}" maxlength="20" placeholder="Team name"
        oninput="state.teams[${i}].name = this.value">
      ${state.teams.length > 2 ? `<button class="team-remove" onclick="removeTeam(${i})">×</button>` : ''}
    `;
    list.appendChild(div);
  });
}

function addTeam() {
  if (state.teams.length >= 5) return;
  state.teams.push({ name: `Team ${state.teams.length + 1}`, score: 0 });
  renderTeams();
}

function removeTeam(index) {
  if (state.teams.length <= 2) return;
  state.teams.splice(index, 1);
  renderTeams();
}

// === GAME START ===

function startGame() {
  // Ensure team names aren't empty
  state.teams.forEach((t, i) => {
    if (!t.name.trim()) t.name = `Team ${i + 1}`;
  });
  state.teams.forEach(t => t.score = 0);
  state.currentTeamIndex = 0;
  state.usedCards = new Set();
  startRound();
}

// === ROUND FLOW ===

function startRound() {
  const card = getNextCard();
  if (!card) {
    endGame();
    return;
  }

  state.currentCard = card;
  state.currentClueIndex = 0;
  state.roundScore = 0;
  state.passesUsed = 0;
  state.roundResults = [];
  state.timeRemaining = state.roundTime;
  state.timerStarted = false;

  renderPlayScreen();
  showScreen('screen-play');

  // Shuffle the card's phrases for variety
  state.currentCard.phrases = shuffleArray([...card.phrases]);
}

function getNextCard() {
  const available = getFilteredCards(state.difficulty, state.categories)
    .filter(c => !state.usedCards.has(c.buzzword));

  if (available.length === 0) {
    // Reset used cards if we've gone through them all
    state.usedCards = new Set();
    const retry = getFilteredCards(state.difficulty, state.categories);
    if (retry.length === 0) return null;
    return retry[Math.floor(Math.random() * retry.length)];
  }

  const card = available[Math.floor(Math.random() * available.length)];
  state.usedCards.add(card.buzzword);
  return card;
}

// === PLAY SCREEN RENDERING ===

function renderPlayScreen() {
  const team = state.teams[state.currentTeamIndex];
  const color = TEAM_COLORS[state.currentTeamIndex % TEAM_COLORS.length];

  document.getElementById('play-team-name').textContent = team.name;
  document.getElementById('play-team-dot').style.background = color;
  document.getElementById('round-score-badge').textContent = `${state.roundScore} pts`;

  // Timer visibility
  const timerBar = document.querySelector('.timer-bar-container');
  const timerDisplay = document.querySelector('.timer-display');
  if (state.timerEnabled) {
    timerBar.style.display = '';
    timerDisplay.style.display = '';
    document.getElementById('timer-seconds').textContent = state.timeRemaining;
    document.getElementById('timer-bar').style.width = '100%';
    document.getElementById('timer-bar').classList.remove('warning');
    timerDisplay.classList.remove('warning');
  } else {
    timerBar.style.display = 'none';
    timerDisplay.style.display = 'none';
  }

  renderBuzzword();
  renderClues();
  renderPlayFooter();
}

function renderBuzzword() {
  document.getElementById('buzzword-word').textContent = state.currentCard.buzzword;
}

function renderClues() {
  const area = document.getElementById('clues-area');
  area.innerHTML = '';

  state.currentCard.phrases.forEach((phrase, i) => {
    const result = state.roundResults[i];
    let statusClass = '';
    if (result === 'correct') statusClass = 'correct';
    else if (result === 'passed') statusClass = 'passed';
    else if (result === 'stolen') statusClass = 'stolen';
    else if (i > state.currentClueIndex) statusClass = 'upcoming';
    else if (i === state.currentClueIndex) statusClass = 'current';

    const div = document.createElement('div');
    div.className = `clue-card ${statusClass}`;

    const clueText = phrase[state.difficulty] || phrase.easy;
    const clueHtml = clueText.replace(
      new RegExp(phrase.answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
      '<span class="blank">____</span>'
    );

    let resultHtml = '';
    if (result === 'correct') {
      resultHtml = '<span class="clue-result correct-result">✓</span>';
    } else if (result === 'passed') {
      resultHtml = '<span class="clue-result passed-result">Pass</span>';
    } else if (result === 'stolen') {
      resultHtml = '<span class="clue-result stolen-result">Stolen!</span>';
    }

    let answerHtml = '';
    if (state.showAnswers) {
      const answered = result === 'correct' || result === 'stolen';
      answerHtml = `<div class="clue-answer${answered ? ' revealed' : ''}">${phrase.answer}</div>`;
    }

    div.innerHTML = `
      <div class="clue-number">${i + 1}</div>
      <div class="clue-text">${clueHtml}</div>
      ${answerHtml}
      ${resultHtml}
    `;
    area.appendChild(div);
  });

  // Scroll current clue into view
  const currentEl = area.querySelector('.clue-card.current');
  if (currentEl) {
    currentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function renderPlayFooter() {
  const total = state.currentCard.phrases.length;
  const passesLeft = state.passesEnabled ? MAX_PASSES - state.passesUsed : Infinity;
  document.getElementById('clue-counter').textContent = `${state.currentClueIndex + 1} / ${total}`;

  // Show passes remaining
  let footer = document.querySelector('.play-footer');
  let passInfo = footer.querySelector('.passes-remaining');
  if (!passInfo) {
    passInfo = document.createElement('div');
    passInfo.className = 'passes-remaining';
    footer.insertBefore(passInfo, footer.firstChild);
  }

  if (state.passesEnabled) {
    passInfo.textContent = `${passesLeft} pass${passesLeft !== 1 ? 'es' : ''} left`;
  } else {
    passInfo.textContent = 'Unlimited passes';
  }

  // Disable pass button if passes are limited and none left
  const passBtn = document.querySelector('.btn-pass');
  if (passBtn) {
    const noPassesLeft = state.passesEnabled && passesLeft <= 0;
    passBtn.style.opacity = noPassesLeft ? '0.4' : '1';
    passBtn.style.pointerEvents = noPassesLeft ? 'none' : 'auto';
  }

  // Show End Round button only when timer is off
  const endBtn = document.getElementById('btn-end-round');
  if (endBtn) {
    endBtn.style.display = state.timerEnabled ? 'none' : '';
  }
}

// === STEAL PROMPT ===

function renderStealPrompt() {
  const overlay = document.getElementById('steal-overlay');
  const stealTeam = state.teams[state.stealTeamIndex];
  const phrase = state.currentCard.phrases[state.stealClueIndex];

  document.getElementById('steal-team-name').textContent = stealTeam.name;
  const clueText = phrase[state.difficulty] || phrase.easy;
  document.getElementById('steal-clue-text').textContent = clueText;
  const stealAnswerEl = document.getElementById('steal-answer-text');
  if (state.showAnswers && stealAnswerEl) {
    stealAnswerEl.textContent = phrase.answer;
    stealAnswerEl.style.display = '';
  } else if (stealAnswerEl) {
    stealAnswerEl.style.display = 'none';
  }
  document.getElementById('steal-buzzword').textContent = state.currentCard.buzzword;
  overlay.style.display = 'flex';

  // Hide the normal play actions during steal
  const playActions = document.querySelector('.play-actions');
  if (playActions) playActions.style.display = 'none';
  const endBtn = document.getElementById('btn-end-round');
  if (endBtn) endBtn.style.display = 'none';
}

function hideStealPrompt() {
  document.getElementById('steal-overlay').style.display = 'none';
  const playActions = document.querySelector('.play-actions');
  if (playActions) playActions.style.display = '';
  renderPlayFooter(); // re-render footer to restore end-round button visibility
}

// === TIMER ===

function startTimer() {
  if (state.timerStarted || !state.timerEnabled) return;
  state.timerStarted = true;

  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimer();

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      endRound();
    }
  }, 1000);
}

function updateTimer() {
  const pct = (state.timeRemaining / state.roundTime) * 100;
  const bar = document.getElementById('timer-bar');
  const display = document.getElementById('timer-display');

  bar.style.width = `${pct}%`;
  display.textContent = state.timeRemaining;

  if (state.timeRemaining <= 10) {
    bar.classList.add('warning');
    display.classList.add('warning');
    playTick();
  } else {
    bar.classList.remove('warning');
    display.classList.remove('warning');
  }
}

// === CLUE ACTIONS ===

function correctClue() {
  if (state.stealActive) return; // can't use during steal
  startTimer();
  playDing();
  state.roundResults[state.currentClueIndex] = 'correct';
  state.roundScore++;
  state.currentClueIndex++;

  if (state.currentClueIndex >= state.currentCard.phrases.length) {
    clearInterval(state.timerInterval);
    setTimeout(() => endRound(), 600);
  }

  renderClues();
  document.getElementById('round-score-badge').textContent = `${state.roundScore} pts`;
  renderPlayFooter();
}

function passClue() {
  if (state.stealActive) return;
  if (state.passesEnabled && state.passesUsed >= MAX_PASSES) return;
  startTimer();
  playBuzz();
  state.roundResults[state.currentClueIndex] = 'passed';
  state.passesUsed++;

  // Offer steal to the next team
  const stealTeam = (state.currentTeamIndex + 1) % state.teams.length;
  state.stealActive = true;
  state.stealClueIndex = state.currentClueIndex;
  state.stealTeamIndex = stealTeam;
  renderStealPrompt();
}

function stealCorrect() {
  hideStealPrompt();
  playSteal();
  state.roundResults[state.stealClueIndex] = 'stolen';
  // The stealing team gets the point (applied in endRound)
  state.roundScore++; // still counts toward current round score for simplicity — the point goes to the stealing team
  // Actually, let's track it properly: the stealing team gets +1
  state.teams[state.stealTeamIndex].score += 1;
  state.stealActive = false;
  state.currentClueIndex = state.stealClueIndex + 1;

  if (state.currentClueIndex >= state.currentCard.phrases.length) {
    clearInterval(state.timerInterval);
    setTimeout(() => endRound(), 600);
  }

  renderClues();
  document.getElementById('round-score-badge').textContent = `${state.roundScore} pts`;
  renderPlayFooter();
}

function stealMiss() {
  hideStealPrompt();
  playBuzz();
  state.stealActive = false;
  state.currentClueIndex = state.stealClueIndex + 1;

  if (state.currentClueIndex >= state.currentCard.phrases.length) {
    clearInterval(state.timerInterval);
    setTimeout(() => endRound(), 600);
  }

  renderClues();
  renderPlayFooter();
}

// === ROUND END ===

function endRound() {
  clearInterval(state.timerInterval);

  const team = state.teams[state.currentTeamIndex];
  team.score += state.roundScore;

  // Save round history
  state.roundHistory.push({
    roundNumber: state.roundHistory.length + 1,
    teamIndex: state.currentTeamIndex,
    teamName: team.name,
    buzzword: state.currentCard.buzzword,
    score: state.roundScore,
    results: [...state.roundResults],
    phrases: state.currentCard.phrases.map(p => ({ clue: p[state.difficulty] || p.easy, answer: p.answer }))
  });

  renderRoundSummary();
  showScreen('screen-round');
}

function renderRoundSummary() {
  const team = state.teams[state.currentTeamIndex];
  const color = TEAM_COLORS[state.currentTeamIndex % TEAM_COLORS.length];

  document.getElementById('round-team-name').textContent = team.name;
  document.getElementById('round-points').textContent = `${state.roundScore} pts`;

  // Answers
  const answersEl = document.getElementById('round-answers');
  answersEl.innerHTML = '';
  state.currentCard.phrases.forEach((phrase, i) => {
    const result = state.roundResults[i];
    const div = document.createElement('div');
    const isCorrect = result === 'correct';
    const clueText = phrase[state.difficulty] || phrase.easy;
    div.className = `round-answer ${isCorrect ? 'ra-correct' : 'ra-passed'}`;
    div.innerHTML = `
      <span class="ra-icon">${isCorrect ? '✓' : '—'}</span>
      <span class="ra-text"><strong>${phrase.answer}</strong> ${clueText.replace(new RegExp(phrase.answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '____')}</span>
    `;
    answersEl.appendChild(div);
  });

  // Scoreboard
  const scoreboard = document.getElementById('round-scoreboard');
  scoreboard.innerHTML = `
    <div class="scoreboard-header">Scoreboard</div>
    ${state.teams.map((t, i) => `
      <div class="scoreboard-row${i === state.currentTeamIndex ? ' sb-row-current' : ''}">
        <div class="sb-color" style="background:${TEAM_COLORS[i % TEAM_COLORS.length]}"></div>
        <span class="sb-name">${t.name}</span>
        <span class="sb-score">${t.score}</span>
      </div>
    `).join('')}
  `;

  // Check if game should end (first to 50 or after all teams have had equal turns and someone hits a threshold)
  const maxScore = Math.max(...state.teams.map(t => t.score));
  const nextBtn = document.getElementById('round-next-btn');
  if (maxScore >= state.winScore) {
    nextBtn.textContent = 'See Results';
    nextBtn.onclick = endGame;
  } else {
    nextBtn.textContent = 'Next Round';
    nextBtn.onclick = nextRound;
  }
}

function nextRound() {
  state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;
  startRound();
}

// === GAME OVER ===

function endGame() {
  clearInterval(state.timerInterval);
  playGameOver();

  const sorted = [...state.teams].sort((a, b) => b.score - a.score);
  const winner = sorted[0];
  const isTie = sorted.length > 1 && sorted[0].score === sorted[1].score;

  const winnerEl = document.getElementById('winner-announcement');
  if (isTie) {
    const tiedTeams = sorted.filter(t => t.score === winner.score);
    winnerEl.innerHTML = `
      <div class="winner-label">It's a tie!</div>
      <div class="winner-name">${tiedTeams.map(t => t.name).join(' & ')}</div>
      <div class="winner-score">${winner.score} pts each</div>
    `;
  } else {
    winnerEl.innerHTML = `
      <div class="winner-label">Winner</div>
      <div class="winner-name">${winner.name}</div>
      <div class="winner-score">${winner.score} pts</div>
    `;
  }

  // Final scoreboard
  const sb = document.getElementById('final-scoreboard');
  sb.innerHTML = `
    <div class="scoreboard">
      <div class="scoreboard-header">Final Scores</div>
      ${sorted.map((t, i) => `
        <div class="scoreboard-row${i === 0 ? ' sb-row-current' : ''}">
          <div class="sb-color" style="background:${TEAM_COLORS[state.teams.indexOf(t) % TEAM_COLORS.length]}"></div>
          <span class="sb-name">${t.name}</span>
          <span class="sb-score">${t.score}</span>
        </div>
      `).join('')}
    </div>
  `;

  showScreen('screen-gameover');
}

// === SHUFFLE HELPER ===

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// === ROUND HISTORY ===

function showHistory() {
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  if (state.roundHistory.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:32px 0">No rounds played yet</p>';
  } else {
    [...state.roundHistory].reverse().forEach(round => {
      const color = TEAM_COLORS[round.teamIndex % TEAM_COLORS.length];
      const div = document.createElement('div');
      div.className = 'history-round';

      const dots = round.results.map(result => {
        let cls = 'had-missed';
        let icon = '—';
        if (result === 'correct') { cls = 'had-correct'; icon = '✓'; }
        else if (result === 'passed') { cls = 'had-passed'; icon = 'P'; }
        else if (result === 'stolen') { cls = 'had-stolen'; icon = 'S'; }
        return `<div class="history-answer-dot ${cls}">${icon}</div>`;
      }).join('');

      div.innerHTML = `
        <div class="history-round-header">
          <span class="history-round-team" style="color:${color}">Rd ${round.roundNumber} — ${round.teamName}</span>
          <span class="history-round-score">+${round.score}</span>
        </div>
        <div class="history-round-buzzword">Buzzword: ${round.buzzword}</div>
        <div class="history-round-answers">${dots}</div>
      `;
      list.appendChild(div);
    });
  }

  document.getElementById('history-overlay').style.display = 'flex';
}

function closeHistory() {
  document.getElementById('history-overlay').style.display = 'none';
}

// === INIT ===

document.addEventListener('DOMContentLoaded', () => {
  // Ensure categories are populated on load
  state.categories = [...CATEGORIES];
  showScreen('screen-home');

  // Register service worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});