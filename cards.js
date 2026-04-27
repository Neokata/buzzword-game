const CARDS = [
  // ===== BATCH 1: Cards 1–20 =====

  // --- Card 1: FIRE ---
  {
    buzzword: "FIRE",
    category: "Everyday Idioms",
    phrases: [
      { easy: "Person who runs toward burning buildings", medium: "Runs toward the flames", hard: "Flame chaser", answer: "Firefighter" },
      { easy: "Outdoor gathering spot for warmth and cooking at a campsite", medium: "Campsite warmth circle", hard: "Ember circle", answer: "Fire pit" },
      { easy: "When everyone evacuates a building during an emergency", medium: "Emergency building evacuation", hard: "Evacuation practice", answer: "Fire drill" },
      { easy: "Weapon that shoots a stream of burning fuel", medium: "Blaze-launching weapon", hard: "Blaze launcher", answer: "Fire thrower" },
      { easy: "Orange-red gemstone that seems to glow from within", medium: "Gemstone that glows like embers", hard: "Volcanic gem", answer: "Fire opal" },
      { easy: "Safety device on a wall that alerts everyone in the building", medium: "Wall-mounted emergency siren", hard: "Pull station", answer: "Fire alarm" },
      { easy: "Large emergency vehicle with ladders and hoses", medium: "Emergency response vehicle", hard: "Blaze rig", answer: "Fire truck" },
      { easy: "A circle of stones where you gather around the warmth outdoors", medium: "Stone circle for outdoor warmth", hard: "Ember circle", answer: "Fire ring" },
      { easy: "A kit for igniting a blaze in the wilderness", medium: "Wilderness ignition kit", hard: "Spark kit", answer: "Fire starter" },
      { easy: "Place where you keep logs burning to stay warm in winter", medium: "Indoor burning fixture", hard: "Hearth", answer: "Fireplace" }
    ]
  },

  // --- Card 2: LIGHT ---
  {
    buzzword: "LIGHT",
    category: "Everyday Idioms",
    phrases: [
      { easy: "Small glass device that brightens a room when switched on", medium: "Illumination device in a lamp", hard: "Glass glow", answer: "Light bulb" },
      { easy: "Tall structure near airports that guides planes to the runway", medium: "Runway guidance structure", hard: "Landing beacon", answer: "Light tower" },
      { easy: "Thin layer of morning mist that disappears after sunrise", medium: "Dawn mist that lifts early", hard: "Morning haze", answer: "Light fog" },
      { easy: "Portable battery-powered beam you carry on a camping trip", medium: "Handheld beam for the dark", hard: "Pocket beam", answer: "Flashlight" },
      { easy: "Electric jolt from the sky during a thunderstorm", medium: "Sky bolt during a storm", hard: "Thunder's partner", answer: "Lightning" },
      { easy: "Person who sets up the illumination on a movie set", medium: "Film crew illumination specialist", hard: "Glow director", answer: "Lighting technician" },
      { easy: "Delicate and airy dessert that puffs up in the oven", medium: "Airy baked treat", hard: "Puffy whip", answer: "Light cake" },
      { easy: "Window on a building roof that lets sunshine into an attic", medium: "Roof window for sunshine", hard: "Attic glow", answer: "Skylight" },
      { easy: "Bright sweeping beam from a coastal tower across the water", medium: "Coastal tower sweep beam", hard: "Coastal beacon", answer: "Searchlight" },
      { easy: "A featherweight boxing division for smaller fighters", medium: "Lowest boxing weight class", hard: "Feather division", answer: "Lightweight" }
    ]
  },

  // --- Card 3: BACK ---
  {
    buzzword: "BACK",
    category: "Everyday Idioms",
    phrases: [
      { easy: "Area behind the stage where performers wait before going on", medium: "Waiting area for performers", hard: "Wings", answer: "Backstage" },
      { easy: "Outdoor area behind a house where you might have a barbecue", medium: "Rear yard of a home", hard: "Behind the house", answer: "Backyard" },
      { easy: "A reflective surface inside a car that shows what's behind you", medium: "Interior reflector for rear visibility", hard: "Rear reflector", answer: "Back mirror" },
      { easy: "When an old habit returns after you thought you quit", medium: "Habit that returns", hard: "Relapse", answer: "Backslide" },
      { easy: "The rear entrance to a building, often used by staff", medium: "Rear building entrance", hard: "Service entry", answer: "Back door" },
      { easy: "Pack you carry on your shoulders for hiking or school books", medium: "Shoulder-carried bag", hard: "Rucksack", answer: "Backpack" },
      { easy: "The structure that supports your spine and ribs", medium: "Spinal support frame", hard: "Rib cage anchor", answer: "Backbone" },
      { easy: "Returning something you borrowed from someone", medium: "Returning a borrowed item", hard: "Repayment", answer: "Payback" },
      { easy: "A retired professional who returns to compete again", medium: "Returning competitor", hard: "Return athlete", answer: "Comeback" },
      { easy: "A sudden sharp pain in the lower spine area", medium: "Spinal ache", hard: "Lumbar sting", answer: "Backache" }
    ]
  },

  // --- Card 4: BREAK ---
  {
    buzzword: "BREAK",
    category: "Everyday Idioms",
    phrases: [
      { easy: "Short rest period during the workday to grab a drink", medium: "Mid-shift beverage pause", hard: "Cubicle respite", answer: "Break time" },
      { easy: "When an ocean wave folds over and crashes near the shore", medium: "When ocean water curls over", hard: "Wave curl", answer: "Break point" },
      { easy: "When the sun first appears and morning begins", medium: "First glow of morning", hard: "Dawn's edge", answer: "Daybreak" },
      { easy: "A sudden discovery that completely changes how things work", medium: "Radical discovery event", hard: "Paradigm shift", answer: "Breakthrough" },
      { easy: "A crack or fracture in the skeletal structure after a bad fall", medium: "Fractured limb", hard: "Fracture", answer: "Break a bone" },
      { easy: "When a romantic partnership comes to an end", medium: "End of a romance", hard: "Split", answer: "Breakup" },
      { easy: "The moment a news story first becomes public knowledge", medium: "When news first surfaces", hard: "Story debut", answer: "Newsbreak" },
      { easy: "An escape from a prison or locked facility", medium: "Jail escape", hard: "Prison bust-out", answer: "Breakout" },
      { easy: "A quick pause during a long road trip to stretch your legs", medium: "Road trip pause", hard: "Highway respite", answer: "Break stop" },
      { easy: "When someone gets extremely fortunate and finds unexpected success", medium: "Unexpected opportunity", hard: "Fortune's gift", answer: "Lucky break" }
    ]
  },

  // --- Card 5: DAY ---
  {
    buzzword: "DAY",
    category: "Everyday Idioms",
    phrases: [
      { easy: "First light when the sun comes up in the morning", medium: "When morning brightness begins", hard: "Dawn's edge", answer: "Daybreak" },
      { easy: "Annual celebration of the year you were born", medium: "Personal anniversary celebration", hard: "Birth anniversary", answer: "Birthday" },
      { easy: "A solemn occasion when a nation honors those who served in the military", medium: "Honoring military veterans", hard: "Veteran tribute", answer: "Memorial Day" },
      { easy: "The evening before a major public celebration", medium: "Evening before a big celebration", hard: "Pre-celebration eve", answer: "Holiday night" },
      { easy: "A pivotal twenty-four hours that changes everything forever", medium: "A turning point in history", hard: "Turning moment", answer: "Day of reckoning" },
      { easy: "The hours between sunrise and sunset", medium: "Sunlit hours", hard: "Sun's watch", answer: "Daylight" },
      { easy: "An ordinary routine with nothing special happening", medium: "Unremarkable routine", hard: "Status quo", answer: "Everyday" },
      { easy: "Putting money aside for unexpected future expenses", medium: "Saving for emergencies", hard: "Stormy reserve", answer: "Rainy day" },
      { easy: "A work schedule that happens while most people are asleep", medium: "After-hours work schedule", hard: "Owl schedule", answer: "Day shift" },
      { easy: "A special occasion worth looking forward to", medium: "Anticipated celebration", hard: "Red-letter moment", answer: "Big day" }
    ]
  },

  // --- Card 6: HAND ---
  {
    buzzword: "HAND",
    category: "Body & Health",
    phrases: [
      { easy: "The pointer on a watch face that tells you what time it is", medium: "Time-telling dial pointer", hard: "Dial pointer", answer: "Clock hand" },
      { easy: "Previously owned items for sale at a thrift store", medium: "Previously owned goods", hard: "Pre-loved", answer: "Secondhand" },
      { easy: "Personal penmanship style that is unique to you", medium: "Penmanship", hard: "Script", answer: "Handwriting" },
      { easy: "The set of playing pieces dealt to you in a poker game", medium: "Cards you're dealt", hard: "Poker deal", answer: "Hand" },
      { easy: "When an audience applauds to show appreciation", medium: "Applause gesture", hard: "Palm applause", answer: "Hand clap" },
      { easy: "A person who fixes things around the house using tools and skill", medium: "Skilled craftsperson", hard: "Fixer", answer: "Handyman" },
      { easy: "A purse carried by its short strap in your grip", medium: "Grip-carried bag", hard: "Carry tote", answer: "Handbag" },
      { easy: "A greeting where two people grip each other's fingers firmly", medium: "Formal grip greeting", hard: "Palm press", answer: "Handshake" },
      { easy: "A knitted winter covering that keeps your fingers warm", medium: "Winter finger covering", hard: "Cold-weather mitt", answer: "Hand warmer" },
      { easy: "A tool with a heavy metal head used for driving nails into wood", medium: "Nail-driving tool", hard: "Pound tool", answer: "Hand hammer" }
    ]
  },

  // --- Card 7: RUN ---
  {
    buzzword: "RUN",
    category: "Sports & Games",
    phrases: [
      { easy: "A long-distance race covering 26.2 miles", medium: "Twenty-six mile race", hard: "Endurance race", answer: "Fun run" },
      { easy: "What Gump famously kept doing across the country in a movie", medium: "Famous movie instruction to keep moving", hard: "Gump's directive", answer: "Run Forrest" },
      { easy: "When your nasal passages drip during a cold", medium: "Dripping nasal passage from illness", hard: "Sinus drip", answer: "Runny nose" },
      { easy: "A full practice session before a live theater performance", medium: "Theater practice session", hard: "Dress session", answer: "Run-through" },
      { easy: "A series of consecutive victories in sports or gambling", medium: "Consecutive victories in a row", hard: "Victory streak", answer: "Run of luck" },
      { easy: "A quick errand to the store for a few items", medium: "Brief shopping trip", hard: "Quick errand", answer: "Run out" },
      { easy: "When a baseball player rounds all the bases and scores", medium: "Circling all bases in baseball", hard: "Four-base sprint", answer: "Home run" },
      { easy: "A tear in hosiery that travels downward", medium: "Snagged hosiery tear", hard: "Hosiery snag", answer: "Run in stocking" },
      { easy: "A long narrow mountain trail for gliding downhill on snow", medium: "Mountain slope trail", hard: "Slope trail", answer: "Ski run" },
      { easy: "When someone enters a political election", medium: "Entering a political race", hard: "Campaign launch", answer: "Run for office" }
    ]
  },

  // --- Card 8: BLUE ---
  {
    buzzword: "BLUE",
    category: "Food & Drink",
    phrases: [
      { easy: "A type of shellfish that turns red when you cook it", medium: "Red-shelled seafood", hard: "Clawed crustacean", answer: "Blue crab" },
      { easy: "A feeling of sadness that lasts for a while", medium: "Melancholy feeling", hard: "Down feeling", answer: "Blue mood" },
      { easy: "A polish color that looks like a clear summer sky on your fingers", medium: "Sky-colored manicure", hard: "Azure polish", answer: "Blue nail" },
      { easy: "The largest animal that has ever lived on Earth", medium: "Biggest creature alive", hard: "Ocean giant", answer: "Blue whale" },
      { easy: "A small round fruit that grows on bushes and flavors muffins", medium: "Muffin and pancake berry", hard: "Bush berry", answer: "Blueberry" },
      { easy: "A music genre from the American South about hardship and longing", medium: "Melancholy Southern music genre", hard: "Sorrow tune", answer: "Blues" },
      { easy: "A bird known for its bright azure feathers and pointed crest", medium: "Crested azure bird", hard: "Crested corvid", answer: "Blue jay" },
      { easy: "A pungent dairy product with visible veins of mold throughout", medium: "Mold-veined fromage", hard: "Veined dairy", answer: "Blue cheese" },
      { easy: "Wireless technology for connecting devices over short distances", medium: "Wireless device connection", hard: "Cordless link", answer: "Bluetooth" },
      { easy: "A bell-shaped flower that grows in clusters and is tied to Scotland", medium: "Scottish bloom with drooping petals", hard: "Highland bloom", answer: "Bluebell" }
    ]
  },

  // --- Card 9: FOOT ---
  {
    buzzword: "FOOT",
    category: "Body & Health",
    phrases: [
      { easy: "A physician who specializes in treating ankles and heels", medium: "Podiatry specialist", hard: "Ankle physician", answer: "Foot doctor" },
      { easy: "What protects your soles when you step outside", medium: "Sole protection", hard: "Tread cover", answer: "Footwear" },
      { easy: "A leisurely stroll along the sandy shore near the ocean", medium: "Sandy shoreline stroll", hard: "Coastal stroll", answer: "Foot patrol" },
      { easy: "A small reference at the bottom of a page with extra information", medium: "Bottom-of-page reference", hard: "Page-bottom note", answer: "Footnote" },
      { easy: "A measurement equal to twelve inches", medium: "Twelve-inch unit", hard: "Yard fraction", answer: "Foot" },
      { easy: "An impression left behind in mud or sand after someone walks by", medium: "Walking impression", hard: "Tread mark", answer: "Footprint" },
      { easy: "An athlete who plays the game with the oblong ball on a field", medium: "Gridiron athlete", hard: "Pigskin athlete", answer: "Football player" },
      { easy: "A narrow hiking trail through the woods", medium: "Woodland walking path", hard: "Uphill trail", answer: "Footpath" },
      { easy: "A base or pedestal that supports a statue or column", medium: "Statue support base", hard: "Column base", answer: "Footstone" },
      { easy: "A deep soaking basin for relaxing tired toes and ankles", medium: "Relaxing soak basin", hard: "Soak basin", answer: "Footbath" }
    ]
  },

  // --- Card 10: HOUSE ---
  {
    buzzword: "HOUSE",
    category: "Everyday Idioms",
    phrases: [
      { easy: "An unstable structure built from a deck of playing pieces", medium: "Playing-piece tower", hard: "Card tower", answer: "House of cards" },
      { easy: "An electronic genre born in Chicago with a steady four-on-the-floor beat", medium: "Chicago-born dance genre with steady beat", hard: "Four-four dance genre", answer: "House music" },
      { easy: "A person whose job is to clean and maintain hotel rooms", medium: "Hotel cleaning staff member", hard: "Linen crew member", answer: "Housekeeper" },
      { easy: "A large building where elected officials gather to make laws", medium: "Where legislation is written", hard: "Capitol chamber", answer: "House of Representatives" },
      { easy: "All the people living together under one roof as a unit", medium: "People sharing a home", hard: "Domestic unit", answer: "Household" },
      { easy: "A living green thing that grows indoors in a pot on the windowsill", medium: "Indoor potted greenery", hard: "Windowsill greenery", answer: "Houseplant" },
      { easy: "An organized event where residents sell unwanted belongings from their driveway", medium: "Multi-family driveway event", hard: "Driveway event", answer: "House sale" },
      { easy: "A TV program where a crew transforms a run-down property for profit", medium: "Property flip program", hard: "Flip program", answer: "House renovation" },
      { easy: "A structure with walls and a roof where people live", medium: "Residential building", hard: "Dwelling", answer: "House" },
      { easy: "A guard animal that protects a residential property from intruders", medium: "Residential guard animal", hard: "Property guard", answer: "House dog" }
    ]
  },

  // --- Card 11: GOLD ---
  {
    buzzword: "GOLD",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "The top prize awarded to the winner at the Olympics", medium: "Top Olympic prize", hard: "Podium peak", answer: "Gold medal" },
      { easy: "The period in the 1800s when prospectors went west seeking precious metal in streams", medium: "1849 westward mineral quest", hard: "Forty-niner era", answer: "Gold rush" },
      { easy: "A famous British spy from a 1964 film who likes his martini shaken", medium: "007 villain from a classic film", hard: "Auric villain", answer: "Goldfinger" },
      { easy: "The principle of treating others the way you want to be treated", medium: "Reciprocity principle", hard: "Do-unto principle", answer: "Golden rule" },
      { easy: "A shiny yellow precious metal that is rare and valuable", medium: "Precious yellow metal", hard: "Element 79", answer: "Gold" },
      { easy: "A retirement account that holds physical precious metal bullion", medium: "Precious metal retirement fund", hard: "Bullion retirement fund", answer: "Gold IRA" },
      { easy: "An official document that proves the purity and weight of precious metal", medium: "Purity verification document", hard: "Assay proof", answer: "Gold certificate" },
      { easy: "A classic pattern of black and yellow on a racing vehicle", medium: "Racing band pattern", hard: "Racing livery", answer: "Gold stripe" },
      { easy: "A famous painted span in San Francisco that looks orange at sunset", medium: "San Francisco's painted span", hard: "Bay span", answer: "Golden Gate" },
      { easy: "The celebration after fifty years of marriage", medium: "Fifty-year wedding milestone", hard: "Half-century milestone", answer: "Golden anniversary" }
    ]
  },

  // --- Card 12: STAR ---
  {
    buzzword: "STAR",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "A pink terrazzo plaque on a Hollywood boulevard honoring a celebrity", medium: "Hollywood boulevard plaque", hard: "Boulevard marker", answer: "Star on the Walk" },
      { easy: "Someone who obsessively follows every move of a famous person", medium: "Obsessive celebrity follower", hard: "Devoted follower", answer: "Stargazer" },
      { easy: "A premium rating with the highest level for hotels and restaurants", medium: "Premium rating system", hard: "Elite rating tier", answer: "Five-star" },
      { easy: "A sudden rise to fame and recognition in entertainment", medium: "Overnight celebrity ascent", hard: "Meteor rise", answer: "Stardom" },
      { easy: "A long-running sci-fi franchise with warp speed and pointy-eared Vulcans", medium: "Sci-fi franchise with Vulcans", hard: "Warp-speed saga", answer: "Star Trek" },
      { easy: "An epic sci-fi saga about a galactic empire and a mystical energy field", medium: "Galactic empire saga with a Force", hard: "Jedi saga", answer: "Star Wars" },
      { easy: "A glowing point of illumination in the night sky billions of miles away", medium: "Distant luminous celestial body", hard: "Plasma sphere", answer: "Star" },
      { easy: "A group of famous performers all appearing together in one movie", medium: "Celebrity ensemble feature", hard: "Ensemble lineup", answer: "All-star cast" },
      { easy: "A celebrity who is recognized by everyone around the world", medium: "Globally recognized celebrity", hard: "Universal icon", answer: "Superstar" },
      { easy: "When an actor's name appears above the movie title on a poster", medium: "Top-billed performer", hard: "Marquee name", answer: "Starring role" }
    ]
  },

  // --- Card 13: COLD ---
  {
    buzzword: "COLD",
    category: "Everyday Idioms",
    phrases: [
      { easy: "An iced coffee drink steeped in cool water for hours", medium: "Chilled caffeinated beverage", hard: "Iced steep", answer: "Cold brew" },
      { easy: "An unwanted phone ring from a stranger trying to pitch something", medium: "Unsolicited sales pitch", hard: "Surprise dial", answer: "Cold call" },
      { easy: "A criminal investigation with no new leads and no recent progress", medium: "Stalled criminal investigation", hard: "Frozen investigation", answer: "Cold case" },
      { easy: "Turning away from someone to show disapproval or anger", medium: "Deliberate snub gesture", hard: "Snub turn", answer: "Cold shoulder" },
      { easy: "A sudden brief period of extremely freezing weather", medium: "Brief freezing weather event", hard: "Frost blast", answer: "Cold snap" },
      { easy: "Advice or consolation that feels hollow and unsatisfying", medium: "Unfulfilling consolation", hard: "Hollow consolation", answer: "Cold comfort" },
      { easy: "A beverage stored in the refrigerator before serving", medium: "Chilled beverage from the fridge", hard: "Fridge pour", answer: "Cold drink" },
      { easy: "A nervous feeling before a big event like a wedding or speech", medium: "Pre-event jitters", hard: "Altar jitters", answer: "Cold feet" },
      { easy: "A long period of political tension between rival nations without direct combat", medium: "Tense non-combat era", hard: "Proxy standoff", answer: "Cold war" },
      { easy: "Knocked completely unconscious in a single blow", medium: "Instantly rendered unconscious", hard: "One-punch KO", answer: "Out cold" }
    ]
  },

  // --- Card 14: SWEET ---
  {
    buzzword: "SWEET",
    category: "Food & Drink",
    phrases: [
      { easy: "The ideal temperature range for serving a dessert wine", medium: "Ideal dessert wine temp", hard: "Dessert pour", answer: "Sweet spot" },
      { easy: "A strong craving for sugary treats after dinner", medium: "Post-dinner sugar craving", hard: "Dessert craving", answer: "Sweet tooth" },
      { easy: "A coming-of-age birthday celebration traditionally held at age 16", medium: "Teen milestone celebration", hard: "Milestone party", answer: "Sweet sixteen" },
      { easy: "Using charming words to persuade someone to give you what you want", medium: "Charming persuasion", hard: "Flattery tactic", answer: "Sweet talk" },
      { easy: "Wishes for a peaceful and pleasant night of rest", medium: "Pleasant bedtime wishes", hard: "Slumber wish", answer: "Sweet dreams" },
      { easy: "Whispered romantic phrases between partners at bedtime", medium: "Soft romantic murmurs", hard: "Pillow whispers", answer: "Sweet nothings" },
      { easy: "A tangy Chinese-American sauce that pairs poultry with a fruity glaze", medium: "Tangy poultry glaze", hard: "Tangy-paired glaze", answer: "Sweet and sour" },
      { easy: "An orange root vegetable baked with marshmallows at Thanksgiving", medium: "Marshmallow-topped root vegetable", hard: "Holiday root dish", answer: "Sweet potato" },
      { easy: "A favorable arrangement that seems almost too good to pass up", medium: "Very favorable arrangement", hard: "Bargain offer", answer: "Sweet deal" },
      { easy: "A Neil Diamond anthem often sung at sporting events and karaoke", medium: "Neil Diamond crowd anthem", hard: "Iconic sing-along", answer: "Sweet Caroline" }
    ]
  },

  // --- Card 15: HEART ---
  {
    buzzword: "HEART",
    category: "Body & Health",
    phrases: [
      { easy: "A physician who specializes in cardiovascular health and surgery", medium: "Cardiovascular specialist", hard: "Chest physician", answer: "Heart doctor" },
      { easy: "A medical emergency caused by a blocked artery that starves the muscle of oxygen", medium: "Arterial blockage crisis", hard: "Myocardial event", answer: "Heart attack" },
      { easy: "A deep feeling of sadness and emotional pain after a breakup", medium: "Post-breakup emotional pain", hard: "Romantic grief", answer: "Heartbreak" },
      { easy: "Expressing something with genuine sincerity and deep emotion", medium: "Showing genuine emotion", hard: "Earnest stance", answer: "Heartfelt" },
      { easy: "A symbol of love drawn as two bumps meeting at a point at the bottom", medium: "Love symbol outline", hard: "Valentine icon", answer: "Heart shape" },
      { easy: "The most essential or central point of an issue", medium: "Core of the issue", hard: "Nub", answer: "Heart of the matter" },
      { easy: "Someone who is generous and caring toward other people", medium: "Generous, caring person", hard: "Benevolent soul", answer: "Kindhearted" },
      { easy: "Learning something by memory rather than from written notes", medium: "Memorized perfectly", hard: "From memory", answer: "By heart" },
      { easy: "A sudden terrifying moment that makes your chest feel tight", medium: "Sudden intense fear response", hard: "Fright response", answer: "Heart-stopping" },
      { easy: "The rhythmic thumping sound a physician hears through a stethoscope", medium: "Medical rhythm check", hard: "Lub-dub", answer: "Heartbeat" }
    ]
  },

  // --- Card 16: HEAD ---
  {
    buzzword: "HEAD",
    category: "Body & Health",
    phrases: [
      { easy: "Severe pain in your skull from stress or dehydration", medium: "Skull ache", hard: "Cranial pain", answer: "Headache" },
      { easy: "The person in charge of running a school", medium: "Leader of a school", hard: "Principal", answer: "Headmaster" },
      { easy: "A personal audio accessory that puts sound directly into your ears", medium: "Personal audio gear", hard: "Ear cans", answer: "Headphones" },
      { easy: "Moving forward quickly without looking where you're going", medium: "Rushing without caution", hard: "Reckless charge", answer: "Headlong" },
      { easy: "The very first position in a long queue of people waiting", medium: "Leading position in the queue", hard: "Queue lead", answer: "Head of the line" },
      { easy: "A leader who guides a team or organization with authority", medium: "Team or org leader", hard: "Top executive", answer: "Head honcho" },
      { easy: "To confront a problem or challenge directly without avoiding it", medium: "Face a problem directly", hard: "Direct confrontation", answer: "Head-on" },
      { easy: "The main act scheduled to perform at a concert or festival", medium: "Main act at a concert", hard: "Top bill", answer: "Headliner" },
      { easy: "An advantage given at the beginning of a race or competition", medium: "Beginning advantage in a race", hard: "Early lead", answer: "Head start" },
      { easy: "The vertical panel at the top of a bed where you rest your skull", medium: "Bed-top rest panel", hard: "Bed rest", answer: "Headboard" }
    ]
  },

  // --- Card 17: EYE ---
  {
    buzzword: "EYE",
    category: "Body & Health",
    phrases: [
      { easy: "A physician who examines your vision and prescribes corrective lenses", medium: "Vision specialist", hard: "Optometrist", answer: "Eye doctor" },
      { easy: "Makeup applied to the edges of your lids for definition", medium: "Lid-defining cosmetic", hard: "Pencil cosmetic", answer: "Eyeliner" },
      { easy: "The calm center of a violent tropical cyclone", medium: "Calm center of a hurricane", hard: "Cyclone center", answer: "Eye of the storm" },
      { easy: "The colored ring around your pupil that controls how much light enters", medium: "Colored membrane around the pupil", hard: "Pupil border", answer: "Eyeball" },
      { easy: "A tiny painful red sore on the edge of your lid that stings when you blink", medium: "Painful lid sore", hard: "Lid cyst", answer: "Eyelid bump" },
      { easy: "A pair of lenses worn on the face to improve vision", medium: "Corrective lenses on the face", hard: "Optical wear", answer: "Eyeglasses" },
      { easy: "Watching something closely and noticing every small detail", medium: "Observing carefully", hard: "Keen observation", answer: "Eagle eye" },
      { easy: "A natural opening in the roof that lets sunshine into a room from above", medium: "Roof light opening", hard: "Ceiling opening", answer: "Eyebrow window" },
      { easy: "To watch something very carefully and not miss any changes", medium: "Observe closely", hard: "Monitor closely", answer: "Keep an eye on" },
      { easy: "A glance across a room that shows romantic interest", medium: "Romantic glance across a room", hard: "Flirtatious gaze", answer: "Eye contact" }
    ]
  },

  // --- Card 18: GREEN ---
  {
    buzzword: "GREEN",
    category: "Nature & Weather",
    phrases: [
      { easy: "A leafy vegetable mix served as a side at restaurants", medium: "Leafy side dish", hard: "Garden bowl", answer: "Green salad" },
      { easy: "A natural talent for growing plants and keeping them alive", medium: "Skilled gardener trait", hard: "Botanical talent", answer: "Green thumb" },
      { easy: "The environmental effort focused on protecting the planet", medium: "Planet protection effort", hard: "Eco effort", answer: "Green movement" },
      { easy: "A small reptile that clings to walls and catches insects", medium: "Wall-climbing reptile", hard: "Sticky-toed reptile", answer: "Green lizard" },
      { easy: "Permission to proceed forward when a traffic signal changes color", medium: "Go-ahead signal", hard: "Proceed signal", answer: "Green light" },
      { easy: "A newly arrived person who lacks experience in a new situation", medium: "Inexperienced newcomer", hard: "Novice", answer: "Greenhorn" },
      { easy: "An official document that grants permanent residency in the United States", medium: "US residency permit", hard: "Immigration document", answer: "Green card" },
      { easy: "A long crunchy vegetable often pickled or steamed as a side", medium: "Crunchy pickled vegetable", hard: "Cucumber cousin", answer: "Green bean" },
      { easy: "When jealousy makes you want what somebody else has", medium: "Jealous feeling", hard: "Envious tint", answer: "Green with envy" },
      { easy: "A grassy public area in the center of a small town for gatherings", medium: "Public grassy area", hard: "Town common", answer: "Village green" }
    ]
  },

  // --- Card 19: ROCK ---
  {
    buzzword: "ROCK",
    category: "Nature & Weather",
    phrases: [
      { easy: "A famous performer who plays guitar-based music with intensity and volume", medium: "Electric guitar performer", hard: "Axe wielder", answer: "Rock star" },
      { easy: "A music genre with electric guitars, drums, and powerful vocals that started in the 1950s", medium: "Electric guitar genre born in the fifties", hard: "Amp-driven genre", answer: "Rock and roll" },
      { easy: "A solid mineral piece found on the ground in nature", medium: "Natural mineral chunk", hard: "Geological sample", answer: "Rock" },
      { easy: "A place where athletes practice scaling vertical stone walls with harnesses", medium: "Vertical scaling venue", hard: "Wall facility", answer: "Rock climbing gym" },
      { easy: "A large stone formation sticking out of the ocean near the shore", medium: "Coastal stone formation", hard: "Shore monolith", answer: "Rocky outcrop" },
      { easy: "A traditional Japanese feature with raked sand and arranged stones for meditation", medium: "Japanese meditation feature", hard: "Zen feature", answer: "Rock garden" },
      { easy: "When something is extremely dependable and cannot be changed", medium: "Unmovable and certain", hard: "Immutable", answer: "Rock solid" },
      { easy: "A bottom-dwelling fish with a tough exterior found near shorelines", medium: "Tough shore-dwelling fish", hard: "Bottom fish", answer: "Rockfish" },
      { easy: "A small mineral projectile used in a slingshot", medium: "Slingshot ammunition", hard: "Small mineral", answer: "Rock" },
      { easy: "When boulders and debris tumble down a steep hillside", medium: "Hillside stone tumble", hard: "Slope collapse", answer: "Rockslide" }
    ]
  },

  // --- Card 20: DARK ---
  {
    buzzword: "DARK",
    category: "Everyday Idioms",
    phrases: [
      { easy: "The time just before dawn when everything outside is pitch black", medium: "Pre-dawn blackness", hard: "Deepest nocturnal point", answer: "Dark of night" },
      { easy: "A type of cocoa treat with a bitter, intense flavor and high cacao content", medium: "High-cacao bitter treat", hard: "Less-sweet cocoa", answer: "Dark chocolate" },
      { easy: "A type of comedy that finds laughs in serious or morbid subjects", medium: "Morbid comedy style", hard: "Gallows comedy", answer: "Dark humor" },
      { easy: "When you discover a hidden truth someone has been keeping for a long time", medium: "Revealing a hidden truth", hard: "Shadow unveiling", answer: "Dark secret" },
      { easy: "A room completely sealed from any external illumination, used for developing photographs", medium: "Sealed photo development room", hard: "Development chamber", answer: "Darkroom" },
      { easy: "A medieval fortress with thick stone walls and tall towers", medium: "Medieval stone fortress", hard: "Fortified keep", answer: "Dark castle" },
      { easy: "A deep shade that looks almost like midnight in the sky", medium: "Nearly midnight shade", hard: "Deep midnight hue", answer: "Dark blue" },
      { easy: "A historical period known for lack of progress and learning", medium: "Era of stagnation", hard: "Unenlightened era", answer: "Dark Ages" },
      { easy: "A deep shade found in a dense forest canopy", medium: "Deep forest shade", hard: "Canopy shade", answer: "Dark green" },
      { easy: "When someone is left without any information about what is happening", medium: "Uninformed state", hard: "Ignorance", answer: "In the dark" }
    ]
  },

  // ===== BATCH 2: Cards 21–40 =====

  // --- Card 21: WATER ---
  {
    buzzword: "WATER",
    category: "Nature & Weather",
    phrases: [
      { easy: "A cascade of liquid pouring over a rocky cliff in the forest", medium: "Liquid cascade over a cliff", hard: "Cliff cascade", answer: "Waterfall" },
      { easy: "A large round fruit with green rind and red juicy flesh inside", medium: "Green-rinded summer fruit", hard: "Picnic fruit", answer: "Watermelon" },
      { easy: "A garment that keeps you completely dry in the rain", medium: "Rain-resistant garment", hard: "Rain-proof", answer: "Waterproof jacket" },
      { easy: "A painting technique using pigments mixed with a clear liquid medium", medium: "Painting technique with liquid pigments", hard: "Liquid pigment art", answer: "Watercolor" },
      { easy: "A mattress filled with liquid for a floating sleep experience", medium: "Liquid-filled mattress", hard: "Liquid bed", answer: "Waterbed" },
      { easy: "The area along the edge of a harbor with restaurants and docks", medium: "Harbor-side district", hard: "Dock district", answer: "Waterfront" },
      { easy: "A 1970s political scandal that led to a presidential resignation", medium: "1970s political scandal", hard: "Nixon scandal", answer: "Watergate" },
      { easy: "A faint design embedded in paper that appears when held up to the light", medium: "Faint design embedded in paper", hard: "Paper imprint", answer: "Watermark" },
      { easy: "A team sport played in a pool where players throw a ball into a net", medium: "Pool-based team sport with a ball", hard: "Pool sport", answer: "Water polo" },
      { easy: "A portable container you carry to stay hydrated during exercise", medium: "Portable hydration container", hard: "Hydration flask", answer: "Water bottle" }
    ]
  },

  // --- Card 22: SPACE ---
  {
    buzzword: "SPACE",
    category: "Science & Math",
    phrases: [
      { easy: "A vehicle designed to travel beyond Earth's atmosphere", medium: "Vehicle for traveling beyond the atmosphere", hard: "Atmosphere vehicle", answer: "Spaceship" },
      { easy: "Protective garment worn by astronauts during extravehicular activity", medium: "Astronaut's protective garment", hard: "Astronaut garment", answer: "Spacesuit" },
      { easy: "An orbiting laboratory where astronauts live and work for months", medium: "Orbiting research facility", hard: "Orbiting lab", answer: "Space station" },
      { easy: "The longest key on a computer keyboard that inserts a blank character", medium: "Longest key on a keyboard", hard: "Keyboard long key", answer: "Spacebar" },
      { easy: "The four-dimensional framework combining position and duration in physics", medium: "Physics framework merging position and duration", hard: "4D framework", answer: "Spacetime" },
      { easy: "When an astronaut exits the orbiting craft and floats outside in a suit", medium: "Astronaut floating outside the craft", hard: "EVA", answer: "Spacewalk" },
      { easy: "A reusable craft that carried astronauts to orbit and glided to a runway", medium: "Reusable orbital craft that glides back", hard: "Orbital glider", answer: "Space shuttle" },
      { easy: "The vast region far beyond Earth's orbit where probes venture", medium: "Region far beyond Earth's orbit", hard: "Beyond orbit", answer: "Deep space" },
      { easy: "When you stare blankly and lose track of what's happening around you", medium: "Losing focus and staring blankly", hard: "Zoning away", answer: "Space out" },
      { easy: "The virtual world of the internet and digital communication", medium: "Virtual internet world", hard: "Digital realm", answer: "Cyberspace" }
    ]
  },

  // --- Card 23: MONEY ---
  {
    buzzword: "MONEY",
    category: "Everyday Idioms",
    phrases: [
      { easy: "A baseball strategy that uses statistics to find undervalued players", medium: "Stats-based baseball strategy", hard: "Stats baseball strategy", answer: "Moneyball" },
      { easy: "The illegal process of making illicit funds appear legitimate", medium: "Making illicit funds appear legitimate", hard: "Cleaning dirty funds", answer: "Money laundering" },
      { easy: "Cash paid to someone to keep them from revealing a secret", medium: "Payment to keep someone quiet", hard: "Silence payment", answer: "Hush money" },
      { easy: "A prepaid paper document used to send payment through the mail", medium: "Prepaid paper payment document", hard: "Paper payment", answer: "Money order" },
      { easy: "A small weekly allowance given to children for doing chores", medium: "Kids' weekly allowance", hard: "Kids' allowance", answer: "Pocket money" },
      { easy: "A project that keeps requiring more and more funding with no end in sight", medium: "Endless funding drain", hard: "Funding drain", answer: "Money pit" },
      { easy: "Wealth that has been inherited through generations of a family", medium: "Inherited generational wealth", hard: "Inherited wealth", answer: "Old money" },
      { easy: "Investments made by experienced professionals who know the market well", medium: "Experienced investors' capital", hard: "Pro capital", answer: "Smart money" },
      { easy: "Counterfeit currency or currency that has lost its value", medium: "Counterfeit or worthless currency", hard: "Fake currency", answer: "Funny money" },
      { easy: "A houseplant said to bring good fortune and financial prosperity", medium: "Houseplant symbolizing prosperity", hard: "Fortune plant", answer: "Money tree" }
    ]
  },

  // --- Card 24: GAME ---
  {
    buzzword: "GAME",
    category: "Sports & Games",
    phrases: [
      { easy: "A TV program where contestants compete for prizes by answering questions", medium: "TV contest program for prizes", hard: "TV contest", answer: "Game show" },
      { easy: "A strategy worked out in advance for achieving a goal", medium: "Pre-worked strategy for success", hard: "Pre-worked strategy", answer: "Game plan" },
      { easy: "An innovation that completely transforms how things are done", medium: "Innovation that transforms everything", hard: "Transformative innovation", answer: "Game changer" },
      { easy: "The final phase of a chess match when few pieces remain on the board", medium: "Final phase of a chess match", hard: "Chess finale", answer: "Endgame" },
      { easy: "The message on screen when you fail in a classic arcade title", medium: "Arcade failure message", hard: "Arcade ending", answer: "Game over" },
      { easy: "The gathering and tailgate party before a big sporting event", medium: "Tailgate gathering before a match", hard: "Pre-match gathering", answer: "Pre-game" },
      { easy: "The practice of using subtle tactics to gain an advantage within the rules", medium: "Subtle tactics for advantage within the rules", hard: "Subtle tactics", answer: "Gamesmanship" },
      { easy: "A protected area of land where wild animals can roam freely", medium: "Protected wildlife area", hard: "Wildlife sanctuary", answer: "Game reserve" },
      { easy: "Major championship events like the Super Bowl or World Cup final", medium: "Major championship events", hard: "Championship events", answer: "Big game" },
      { easy: "Psychological tactics used to manipulate or confuse someone", medium: "Psychological manipulation tactics", hard: "Psych tactics", answer: "Mind game" }
    ]
  },

  // --- Card 25: FACE ---
  {
    buzzword: "FACE",
    category: "Body & Health",
    phrases: [
      { easy: "A cosmetic surgical procedure to reduce signs of aging in the cheeks and jaw", medium: "Cosmetic procedure to reduce aging signs", hard: "Youth procedure", answer: "Facelift" },
      { easy: "The social network Mark Zuckerberg founded in his Harvard dorm room", medium: "Zuckerberg's social network", hard: "Meta platform", answer: "Facebook" },
      { easy: "A covering worn over the nose and mouth for protection or skincare", medium: "Nose and mouth covering for protection", hard: "Protective covering", answer: "Face mask" },
      { easy: "An expressionless look that hides your true emotions during a card competition", medium: "Expressionless look hiding emotions", hard: "Blank expression", answer: "Poker face" },
      { easy: "A complete reversal of direction or opinion on an issue", medium: "Complete reversal of direction", hard: "Complete reversal", answer: "About-face" },
      { easy: "The apparent worth of something at first glance without deeper examination", medium: "Apparent first-glance worth", hard: "First-glance worth", answer: "Face value" },
      { easy: "The starting confrontation in hockey when two players compete for the puck", medium: "Hockey starting confrontation", hard: "Hockey confrontation", answer: "Face-off" },
      { easy: "Apple's video calling feature on iPhone and Mac", medium: "Apple's video calling app", hard: "Apple video app", answer: "FaceTime" },
      { easy: "To experience public embarrassment and a damaged reputation", medium: "Damaged reputation from public embarrassment", hard: "Public humiliation", answer: "Lose face" },
      { easy: "Decorative colors applied to cheeks at festivals and sporting events", medium: "Decorative colors for festivals and events", hard: "Festival colors", answer: "Face paint" }
    ]
  },

  // --- Card 26: LINE ---
  {
    buzzword: "LINE",
    category: "Everyday Idioms",
    phrases: [
      { easy: "The final moment by which a task must be completed", medium: "Final moment for task completion", hard: "Due moment", answer: "Deadline" },
      { easy: "The most important takeaway or final financial result", medium: "Most important takeaway", hard: "Key takeaway", answer: "Bottom line" },
      { easy: "A rope or cable thrown to rescue someone in distress", medium: "Rescue rope for someone in distress", hard: "Rescue rope", answer: "Lifeline" },
      { easy: "The funny final part of a joke that makes everyone laugh", medium: "Funny ending of a joke", hard: "Joke ending", answer: "Punchline" },
      { easy: "A row of suspects shown to a witness for identification", medium: "Row of suspects for identification", hard: "Suspect row", answer: "Lineup" },
      { easy: "A brief summary or sketch of the main points of a document", medium: "Brief summary of main points", hard: "Summary sketch", answer: "Outline" },
      { easy: "To push a vehicle's engine to its absolute maximum RPM", medium: "Pushing an engine to maximum RPM", hard: "Max RPM", answer: "Redline" },
      { easy: "An uncompromising position in political negotiations", medium: "Uncompromising political position", hard: "Uncompromising stance", answer: "Hardline" },
      { easy: "Connected to the internet and accessible through a browser", medium: "Connected to the internet", hard: "Internet-connected", answer: "Online" },
      { easy: "A visual chart showing events in chronological order", medium: "Chronological event chart", hard: "Chronology chart", answer: "Timeline" }
    ]
  },

  // --- Card 27: TIME ---
  {
    buzzword: "TIME",
    category: "Everyday Idioms",
    phrases: [
      { easy: "A brief pause called by a coach during a sports match to regroup", medium: "Coach's brief pause during a match", hard: "Coach pause", answer: "Timeout" },
      { easy: "Something that never goes out of style regardless of era", medium: "Never goes out of style", hard: "Eternal style", answer: "Timeless" },
      { easy: "A work schedule with fewer hours than a typical full week", medium: "Reduced-hour work schedule", hard: "Reduced schedule", answer: "Part-time" },
      { easy: "Extra hours worked beyond the standard schedule, usually paid at a higher rate", medium: "Extra paid hours beyond standard schedule", hard: "Extra paid hours", answer: "Overtime" },
      { easy: "The entire span from birth to death of a person", medium: "Entire span from birth to death", hard: "Birth to death span", answer: "Lifetime" },
      { easy: "The evening hours when TV networks air their biggest shows", medium: "Peak TV viewing hours", hard: "Peak TV hours", answer: "Prime time" },
      { easy: "A sealed container buried with items to be opened by future generations", medium: "Sealed container for future discovery", hard: "Future discovery container", answer: "Time capsule" },
      { easy: "Available at whatever hour you need with no restrictions", medium: "Available whenever needed", hard: "Always available", answer: "Anytime" },
      { easy: "A geographic region that shares the same clock setting as its neighbors", medium: "Geographic region sharing a clock setting", hard: "Clock region", answer: "Time zone" },
      { easy: "To occupy yourself with an activity while waiting for something", medium: "Occupying yourself while waiting", hard: "Waiting activity", answer: "Kill time" }
    ]
  },

  // --- Card 28: POWER ---
  {
    buzzword: "POWER",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "A team of color-coded superheroes who morph to fight monsters on TV", medium: "Color-coded superhero team that morphs", hard: "Morphing heroes", answer: "Power Rangers" },
      { easy: "When someone abuses their authority to dominate others", medium: "Abusing authority to dominate", hard: "Authority abuse", answer: "Power trip" },
      { easy: "The mental strength needed to resist temptation and stay disciplined", medium: "Mental strength to resist temptation", hard: "Mental discipline", answer: "Willpower" },
      { easy: "When the electricity fails and all the lights go dark", medium: "Electricity failure leaving everything dark", hard: "Electric failure", answer: "Power outage" },
      { easy: "The collective intellectual ability and mental capacity of a person or group", medium: "Collective intellectual capacity", hard: "Mental capacity", answer: "Brainpower" },
      { easy: "A legal document that authorizes someone to act on your behalf", medium: "Legal document authorizing someone to act for you", hard: "Legal authorization", answer: "Power of attorney" },
      { easy: "A unit measuring the strength of a car's engine", medium: "Engine strength measurement unit", hard: "Engine unit", answer: "Horsepower" },
      { easy: "A strength sport focused on three maximum lifts: squat, bench, and deadlift", medium: "Strength sport with three max lifts", hard: "Max-lift sport", answer: "Powerlifting" },
      { easy: "A two-note guitar technique used in rock songs for a heavy, aggressive sound", medium: "Two-note guitar technique for heavy sound", hard: "Guitar heavy note", answer: "Power chord" },
      { easy: "A brief rest of 15-20 minutes that restores your energy during the workday", medium: "Brief 15-20 minute rest for energy", hard: "Brief energy rest", answer: "Power nap" }
    ]
  },

  // --- Card 29: BLACK ---
  {
    buzzword: "BLACK",
    category: "Everyday Idioms",
    phrases: [
      { easy: "A casino card game where you try to reach 21 without going over", medium: "Casino card game aiming for 21", hard: "21 card game", answer: "Blackjack" },
      { easy: "A region in outer space with gravity so strong nothing can escape it", medium: "Space region with inescapable gravity", hard: "Inescapable gravity", answer: "Black hole" },
      { easy: "A roster of people or organizations banned from participation", medium: "Roster of banned participants", hard: "Ban roster", answer: "Blacklist" },
      { easy: "A period when electricity fails across an entire region", medium: "Regional electricity failure", hard: "Regional power failure", answer: "Blackout" },
      { easy: "A once-popular smartphone brand with a physical keyboard, or a tart fruit", medium: "Smartphone brand with a keyboard, or tart fruit", hard: "Keyboard phone or fruit", answer: "Blackberry" },
      { easy: "A formal dress code requiring a tuxedo and neckwear at elegant events", medium: "Formal dress code for elegant occasions", hard: "Formal dress code", answer: "Black tie" },
      { easy: "An underground economy where illegal goods are bought and sold", medium: "Underground economy for illegal goods", hard: "Illegal economy", answer: "Black market" },
      { easy: "The odd one in a family who doesn't fit the expected mold", medium: "Family oddball who doesn't fit in", hard: "Family oddball", answer: "Black sheep" },
      { easy: "A morning brew served without cream or sugar", medium: "Morning brew without cream or sugar", hard: "Unsweetened brew", answer: "Black coffee" },
      { easy: "Complete darkness with zero visibility at all", medium: "Complete and total darkness", hard: "Total darkness", answer: "Pitch black" }
    ]
  },

  // --- Card 30: BLOOD ---
  {
    buzzword: "BLOOD",
    category: "Body & Health",
    phrases: [
      { easy: "A medical measurement of the force of circulation through your arteries", medium: "Measurement of circulatory force", hard: "Circulatory force", answer: "Blood pressure" },
      { easy: "Your genetic classification (A, B, AB, or O) that determines donation compatibility", medium: "Genetic classification for donation compatibility", hard: "Donation classification", answer: "Blood type" },
      { easy: "A breed of dog famous for its incredible sense of smell used in tracking", medium: "Tracking breed with incredible scent ability", hard: "Scent-tracking breed", answer: "Bloodhound" },
      { easy: "When the whites of your eyes appear red from exhaustion or irritation", medium: "Red eyes from exhaustion or irritation", hard: "Red eye condition", answer: "Bloodshot" },
      { easy: "The flow of plasma and cells moving through your veins and arteries", medium: "Flow of plasma through veins and arteries", hard: "Vein flow", answer: "Bloodstream" },
      { easy: "The glucose level measured in a diabetes test after fasting", medium: "Glucose level measured in a diabetes test", hard: "Glucose reading", answer: "Blood sugar" },
      { easy: "A citrus fruit with deep reddish flesh and a berry-like flavor", medium: "Citrus fruit with reddish flesh and berry flavor", hard: "Red-fleshed citrus", answer: "Blood orange" },
      { easy: "When Earth's shadow turns our nighttime neighbor a coppery red during an eclipse", medium: "Eclipse that turns the nighttime sky red", hard: "Red eclipse", answer: "Blood moon" },
      { easy: "Ancestral lineage tracing back through generations of a family", medium: "Ancestral heritage through generations", hard: "Ancestral heritage", answer: "Bloodline" },
      { easy: "An animal like a reptile that regulates body temperature from the environment", medium: "Reptile that gets warmth from the environment", hard: "Environment-heated animal", answer: "Cold-blooded" }
    ]
  },

  // --- Card 31: WHITE ---
  {
    buzzword: "WHITE",
    category: "Food & Drink",
    phrases: [
      { easy: "A chilled alcoholic beverage made from green grapes served in a tall glass", medium: "Chilled beverage from green grapes", hard: "Chilled grape vintage", answer: "White wine" },
      { easy: "A correction fluid used to cover typing mistakes on paper", medium: "Correction fluid for paper mistakes", hard: "Correction fluid", answer: "Whiteout" },
      { easy: "A costly gift that is more burden than benefit to its owner", medium: "Costly gift that's more burden than benefit", hard: "Costly burden gift", answer: "White elephant" },
      { easy: "A universal symbol of surrender or truce in wartime", medium: "Universal symbol of surrender", hard: "Surrender symbol", answer: "White flag" },
      { easy: "A harmless untruth told to avoid hurting someone's feelings", medium: "Harmless untruth to spare feelings", hard: "Harmless fib", answer: "White lie" },
      { easy: "The clear part of a breakfast staple that turns opaque when cooked", medium: "Clear portion of a breakfast staple that turns opaque when cooked", hard: "Clear breakfast portion", answer: "Egg white" },
      { easy: "Turbulent rapids in a river that thrill-seeking rafters navigate", medium: "Turbulent river rapids for rafters", hard: "River rapids", answer: "Whitewater" },
      { easy: "A glossy wall surface used for writing with dry-erase markers in classrooms", medium: "Glossy surface for dry-erase markers", hard: "Dry-erase surface", answer: "Whiteboard" },
      { easy: "A holiday when snow covers the ground on December 25th", medium: "December 25th with snow on the ground", hard: "Snowy December holiday", answer: "White Christmas" },
      { easy: "A Disney princess who lived with seven miners in a cottage", medium: "Disney princess who lived with seven miners", hard: "Seven-miner princess", answer: "Snow White" }
    ]
  },

  // --- Card 32: AIR ---
  {
    buzzword: "AIR",
    category: "Nature & Weather",
    phrases: [
      { easy: "A motorized vehicle with wings that flies passengers between cities", medium: "Winged passenger vehicle that flies", hard: "Winged transport", answer: "Airplane" },
      { easy: "A large facility with runways where travelers board flights", medium: "Facility with runways for boarding flights", hard: "Runway facility", answer: "Airport" },
      { easy: "An inflatable safety cushion that deploys during a car collision", medium: "Inflatable cushion that deploys in a crash", hard: "Crash cushion", answer: "Airbag" },
      { easy: "A tool that sprays fine paint mist for creating smooth artwork", medium: "Tool that sprays fine paint mist", hard: "Paint spray tool", answer: "Airbrush" },
      { easy: "Pretending to play a musical instrument by strumming imaginary strings", medium: "Pretending to strum an imaginary instrument", hard: "Invisible strumming", answer: "Air guitar" },
      { easy: "A system that cools and dehumidifies indoor spaces during summer", medium: "System that cools indoor spaces in summer", hard: "Indoor cooling system", answer: "Air conditioning" },
      { easy: "The team that directs pilots from the tower to keep flights safe and organized", medium: "Tower team directing pilots for safety", hard: "Tower directors", answer: "Air traffic control" },
      { easy: "The clean outdoor breeze after being stuck inside all day", medium: "Clean outdoor breeze", hard: "Outdoor breeze", answer: "Fresh air" },
      { easy: "The minutes allocated for a broadcast on radio or television", medium: "Broadcast minutes on radio or TV", hard: "Broadcast minutes", answer: "Airtime" },
      { easy: "When a TV or radio station stops broadcasting for the night", medium: "When a station stops broadcasting", hard: "Broadcasting ends", answer: "Off-air" }
    ]
  },

  // --- Card 33: SOUND ---
  {
    buzzword: "SOUND",
    category: "Music (2000+)",
    phrases: [
      { easy: "An online platform where independent musicians upload and share tracks", medium: "Platform for independent musicians to share tracks", hard: "Indie music platform", answer: "SoundCloud" },
      { easy: "The collection of songs and score music from a movie or TV show", medium: "Collection of songs and score from a film", hard: "Film music collection", answer: "Soundtrack" },
      { easy: "Material that blocks noise from entering or leaving a room", medium: "Material that blocks room noise", hard: "Noise-blocking material", answer: "Soundproof" },
      { easy: "A short memorable quote from a politician played repeatedly on the news", medium: "Short memorable quote played on the news", hard: "Short news quote", answer: "Soundbite" },
      { easy: "A multi-speaker audio system that creates an immersive listening experience", medium: "Multi-speaker system for immersive audio", hard: "Immersive speaker system", answer: "Surround sound" },
      { easy: "The threshold an aircraft crosses when it exceeds the velocity of audio waves", medium: "Threshold when exceeding the velocity of audio waves", hard: "Velocity threshold", answer: "Sound barrier" },
      { easy: "A vibration that travels through the atmosphere as pressure changes", medium: "Atmospheric vibration as pressure changes", hard: "Pressure vibration", answer: "Sound wave" },
      { easy: "A pre-show test of microphones and speakers before a concert begins", medium: "Pre-show microphone and speaker test", hard: "Pre-show audio test", answer: "Sound check" },
      { easy: "An artificial audio addition like footsteps or explosions added in post-production", medium: "Artificial audio added in post-production", hard: "Added audio", answer: "Sound effect" },
      { easy: "Equipment including amplifiers, mixers, and speakers for live events", medium: "Amplifier and speaker setup for live events", hard: "Live event audio setup", answer: "Sound system" }
    ]
  },

  // --- Card 34: HOT ---
  {
    buzzword: "HOT",
    category: "Food & Drink",
    phrases: [
      { easy: "A sausage in a bun served at baseball stadiums and backyard cookouts", medium: "Sausage in a bun at cookouts", hard: "Stadium sausage", answer: "Hot dog" },
      { easy: "A spicy condiment made from chili peppers for adding heat to food", medium: "Spicy condiment from chili peppers", hard: "Spicy condiment", answer: "Hot sauce" },
      { easy: "A heated outdoor pool for relaxing sore muscles after a long day", medium: "Heated outdoor pool for muscle relaxation", hard: "Heated relaxation pool", answer: "Hot tub" },
      { easy: "A sudden feeling of intense warmth experienced during menopause", medium: "Sudden warmth during menopause", hard: "Menopause warmth", answer: "Hot flash" },
      { easy: "A dedicated telephone number for emergencies or crisis support", medium: "Dedicated emergency telephone number", hard: "Emergency number", answer: "Hotline" },
      { easy: "A Wi-Fi access point that lets your phone connect to the internet on the go", medium: "Wi-Fi access point for on-the-go connectivity", hard: "Wi-Fi access point", answer: "Hotspot" },
      { easy: "Someone who gets angry very quickly and loses their temper", medium: "Person who gets angry quickly", hard: "Quick-tempered person", answer: "Hothead" },
      { easy: "A portable electric cooking surface used in dorm rooms and small apartments", medium: "Portable electric cooking surface", hard: "Portable cooking surface", answer: "Hot plate" },
      { easy: "Chasing a suspect at high speed with sirens blaring", medium: "High-speed chase with sirens", hard: "High-speed chase", answer: "Hot pursuit" },
      { easy: "A warm cocoa beverage topped with marshmallows on a winter evening", medium: "Warm cocoa with marshmallows in winter", hard: "Warm cocoa beverage", answer: "Hot chocolate" }
    ]
  },

  // --- Card 35: WILD ---
  {
    buzzword: "WILD",
    category: "Nature & Weather",
    phrases: [
      { easy: "An uncontrolled blaze that spreads rapidly through forests and grasslands", medium: "Uncontrolled forest blaze that spreads rapidly", hard: "Forest inferno", answer: "Wildfire" },
      { easy: "A vast remote area of untouched natural landscape with no human development", medium: "Vast remote natural landscape untouched by humans", hard: "Untouched landscape", answer: "Wilderness" },
      { easy: "An unexpected entrant who could upset the predicted outcome of a tournament", medium: "Unexpected tournament entrant", hard: "Tournament surprise", answer: "Wildcard" },
      { easy: "Animals and organisms living freely in their natural habitat", medium: "Animals living freely in natural habitats", hard: "Free-roaming animals", answer: "Wildlife" },
      { easy: "The American frontier era of cowboys, outlaws, and gold prospecting", medium: "American frontier era of cowboys and outlaws", hard: "Frontier era", answer: "Wild west" },
      { easy: "A futile search that leads you on a frustrating and pointless pursuit", medium: "Frustrating and pointless search", hard: "Pointless pursuit", answer: "Wild goose chase" },
      { easy: "A bloom that grows naturally in fields without being planted by anyone", medium: "Bloom growing naturally in unplanted fields", hard: "Natural field bloom", answer: "Wildflower" },
      { easy: "An undomesticated feline that roams forests and mountains", medium: "Undomesticated roaming feline", hard: "Roaming feline", answer: "Wildcat" },
      { easy: "A classic rock anthem by The Troggs with a memorable guitar riff", medium: "The Troggs' rock anthem", hard: "Troggs anthem", answer: "Wild thing" },
      { easy: "Irresponsible behavior in one's younger years before settling down", medium: "Irresponsible youth behavior before maturity", hard: "Youthful indiscretion", answer: "Wild oats" }
    ]
  },

  // --- Card 36: DEAD ---
  {
    buzzword: "DEAD",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "A street that goes nowhere and forces you to turn around", medium: "Street that goes nowhere", hard: "Nowhere street", answer: "Dead end" },
      { easy: "The exact middle point of a target or area", medium: "Exact middle of a target or area", hard: "Exact midpoint", answer: "Dead center" },
      { easy: "A tie in a race where two competitors finish at exactly the same moment", medium: "Exact tie in a race finish", hard: "Race tie", answer: "Dead heat" },
      { easy: "An area with zero cell reception or an ocean region with no oxygen", medium: "Area with no cell reception or oxygen", hard: "No-signal area", answer: "Dead zone" },
      { easy: "A strength exercise where you pull a weighted barbell off the floor", medium: "Exercise pulling a barbell off the floor", hard: "Floor pull exercise", answer: "Deadlift" },
      { easy: "An obvious clue that reveals the truth instantly", medium: "Obvious clue that reveals the truth", hard: "Obvious clue", answer: "Dead giveaway" },
      { easy: "Caught in the act with unmistakable evidence of guilt", medium: "Caught in the act with clear evidence", hard: "Caught red-handed", answer: "Dead to rights" },
      { easy: "An awkward silence on a live radio or TV broadcast when no one speaks", medium: "Awkward broadcast silence when no one speaks", hard: "Broadcast silence", answer: "Dead air" },
      { easy: "When your car won't start because the electrical power source is fully drained", medium: "Car won't start from a drained power source", hard: "Drained power source", answer: "Dead battery" },
      { easy: "The AMC zombie drama that ran for 11 seasons starting in 2010", medium: "AMC zombie drama running 11 seasons", hard: "Zombie drama", answer: "The Walking Dead" }
    ]
  },

  // --- Card 37: BOOK ---
  {
    buzzword: "BOOK",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "A group that meets monthly to discuss a novel everyone has read", medium: "Monthly group discussing a novel", hard: "Novel discussion group", answer: "Book club" },
      { easy: "A piece of furniture with horizontal surfaces for storing reading materials", medium: "Furniture with surfaces for storing reading materials", hard: "Reading material storage", answer: "Bookshelf" },
      { easy: "A strip of paper or leather that saves your spot in a novel", medium: "Strip that saves your spot in a novel", hard: "Spot saver", answer: "Bookmark" },
      { easy: "A person who loves reading and spends every free moment with a novel", medium: "Person who spends all free moments reading", hard: "Reading enthusiast", answer: "Bookworm" },
      { easy: "A collection of recipes and instructions for preparing meals", medium: "Collection of recipes for preparing meals", hard: "Recipe collection", answer: "Cookbook" },
      { easy: "The protective outer wrapper of a novel that displays the title and art", medium: "Protective outer wrapper of a novel", hard: "Novel wrapper", answer: "Book cover" },
      { easy: "A required manual for a class that students carry in their backpacks", medium: "Required manual for a class", hard: "Class manual", answer: "Textbook" },
      { easy: "The practice of recording financial transactions for a business", medium: "Recording financial transactions for a business", hard: "Financial recording", answer: "Bookkeeping" },
      { easy: "A small reference manual containing rules and procedures for an organization", medium: "Small reference manual with organizational rules", hard: "Reference manual", answer: "Handbook" },
      { easy: "A children's publication with more illustrations than text on every page", medium: "Children's publication with many illustrations", hard: "Illustrated children's publication", answer: "Picture book" }
    ]
  },

  // --- Card 38: STREET ---
  {
    buzzword: "STREET",
    category: "Geography",
    phrases: [
      { easy: "Affordable meals sold from carts and stalls in bustling markets around the world", medium: "Affordable meals from carts in bustling markets", hard: "Cart meals", answer: "Street food" },
      { easy: "Murals and graffiti painted on urban walls by creators like Banksy", medium: "Urban murals by creators like Banksy", hard: "Urban murals", answer: "Street art" },
      { easy: "An illuminated pole on a sidewalk that guides your way after sunset", medium: "Illuminated pole on a sidewalk after sunset", hard: "Sidewalk illumination", answer: "Streetlight" },
      { easy: "Urban casual fashion rooted in skate and hip-hop culture", medium: "Urban fashion from skate and hip-hop culture", hard: "Urban skate fashion", answer: "Streetwear" },
      { easy: "Having practical knowledge of how to handle yourself in urban situations", medium: "Practical urban survival knowledge", hard: "Urban savvy", answer: "Street smart" },
      { easy: "The financial district in New York where stock markets and banks operate", medium: "New York's financial district with stock markets", hard: "NYC financial district", answer: "Wall Street" },
      { easy: "The title on a road sign like 'Elm Avenue' or 'Maple Boulevard'", medium: "Title on a road sign like 'Elm Avenue'", hard: "Road sign title", answer: "Street name" },
      { easy: "An entertainer who plays music or does tricks for tips on a busy sidewalk", medium: "Entertainer performing for tips on a sidewalk", hard: "Sidewalk entertainer", answer: "Street performer" },
      { easy: "The feature on Google Maps that shows panoramic photos of any location", medium: "Google Maps feature with panoramic location photos", hard: "Google panorama feature", answer: "Street view" },
      { easy: "The primary commercial road running through the center of a small American town", medium: "Primary commercial road in a small town center", hard: "Town center road", answer: "Main street" }
    ]
  },

  // --- Card 39: IRON ---
  {
    buzzword: "IRON",
    category: "Science & Math",
    phrases: [
      { easy: "The Marvel superhero in a high-tech armored suit played by Robert Downey Jr.", medium: "Marvel superhero in armored suit played by Downey Jr.", hard: "Armored Marvel hero", answer: "Iron Man" },
      { easy: "A padded surface that unfolds for pressing wrinkles out of clothing", medium: "Padded surface for pressing wrinkles from clothing", hard: "Wrinkle-pressing surface", answer: "Ironing board" },
      { easy: "A competitive cooking show where contestants battle to impress judges", medium: "Competitive cooking show with battling contestants", hard: "Cooking battle show", answer: "Iron Chef" },
      { easy: "The political and ideological barrier dividing Europe during the Cold War", medium: "Political barrier dividing Cold War Europe", hard: "Cold War barrier", answer: "Iron curtain" },
      { easy: "Ruling with brutal and uncompromising control over everyone", medium: "Brutal and uncompromising control", hard: "Brutal control", answer: "Iron fist" },
      { easy: "A heavy durable metal alloy used for making skillets and architectural elements", medium: "Heavy durable metal for skillets", hard: "Heavy skillet metal", answer: "Cast iron" },
      { easy: "A mechanical ventilator from the 1950s that helped polio patients breathe", medium: "1950s mechanical ventilator for polio patients", hard: "Polio ventilator", answer: "Iron lung" },
      { easy: "A medieval torture device, or a legendary heavy metal band from England", medium: "Medieval torture device or English metal band", hard: "Torture device or band", answer: "Iron Maiden" },
      { easy: "A malleable metal worked by blacksmiths into decorative gates and fences", medium: "Malleable metal shaped by blacksmiths into gates", hard: "Blacksmith metal", answer: "Wrought iron" },
      { easy: "The archaeological period when humans first learned to smelt metal from ore", medium: "Archaeological period of smelting metal from ore", hard: "Smelting period", answer: "Iron Age" }
    ]
  },

  // --- Card 40: NET ---
  {
    buzzword: "NET",
    category: "Tech & Internet",
    phrases: [
      { easy: "The streaming platform that popularized binge-watching TV series", medium: "Streaming platform that popularized binge-watching", hard: "Binge-watching platform", answer: "Netflix" },
      { easy: "A group of connected computers that share data and resources", medium: "Connected computers sharing data", hard: "Connected computer group", answer: "Network" },
      { easy: "The total value of all your assets minus everything you owe", medium: "Total assets minus all debts", hard: "Assets minus debts", answer: "Net worth" },
      { easy: "A mesh pouch on a stick used by entomologists to catch insects in the field", medium: "Mesh pouch on a stick for catching insects", hard: "Insect-catching mesh", answer: "Butterfly net" },
      { easy: "A financial backup or physical structure that catches you if you fall", medium: "Backup that catches you if you fall", hard: "Fall-backup", answer: "Safety net" },
      { easy: "The principle that ISPs should treat all online traffic equally without favoritism", medium: "Principle that ISPs treat all online traffic equally", hard: "Equal traffic principle", answer: "Net neutrality" },
      { easy: "The earnings remaining after all business expenses have been deducted", medium: "Earnings after all expenses deducted", hard: "Earnings after expenses", answer: "Net profit" },
      { easy: "A woven mesh dragged through the ocean to harvest seafood", medium: "Woven mesh dragged through the ocean for seafood", hard: "Ocean mesh harvest", answer: "Fishing net" },
      { easy: "The positive difference when your returns exceed your investment", medium: "Positive difference when returns exceed investment", hard: "Returns minus investment", answer: "Net gain" },
      { easy: "The mesh divider stretched across a court for a beach or indoor serving sport", medium: "Mesh divider for a beach court sport", hard: "Court mesh divider", answer: "Volleyball net" }
    ]
  },

  // ===== BATCH 3: Cards 41–55 =====

  // --- Card 41: BONE ---
  {
    buzzword: "BONE",
    category: "Body & Health",
    phrases: [
      { easy: "The soft spongy tissue inside a skeleton that manufactures blood cells", medium: "Blood-cell-producing tissue inside skeletons", hard: "Cell factory inside skeleton", answer: "Bone marrow" },
      { easy: "A person whose hobby is gathering and identifying skeletal fragments", medium: "Gatherer of skeletal fragments", hard: "Fragment gatherer", answer: "Bone collector" },
      { easy: "Fine porcelain dinnerware originally made with ash from animal remains", medium: "Porcelain dinnerware made with ash from remains", hard: "Ash-based porcelain", answer: "Bone china" },
      { easy: "Extremely lazy and unwilling to exert any effort whatsoever", medium: "Extremely lazy and effort-averse", hard: "Completely indolent", answer: "Bone-idle" },
      { easy: "An issue or topic that causes ongoing arguments between people", medium: "Topic causing ongoing arguments", hard: "Disputed topic", answer: "Bone of contention" },
      { easy: "The measurement of how compact and solid the skeletal tissue is", medium: "Compactness measurement of skeletal tissue", hard: "Skeletal compactness", answer: "Bone density" },
      { easy: "A sharp fragment that breaks off when a skeletal piece fractures", medium: "Sharp fragment from a fractured skeletal piece", hard: "Fracture fragment", answer: "Bone shard" },
      { easy: "A dull aching soreness deep within the skeletal system", medium: "Dull aching soreness within the skeleton", hard: "Deep skeletal soreness", answer: "Bone ache" },
      { easy: "The strong fibrous cord connecting a skeletal segment to a muscle", medium: "Fibrous cord connecting skeleton to muscle", hard: "Muscle-skeleton connector", answer: "Bone tendon" },
      { easy: "A canine snack shaped like a femur or rib for gnawing", medium: "Canine snack shaped like a femur or rib", hard: "Femur-shaped gnaw", answer: "Bone chew" }
    ]
  },

  // --- Card 42: CROSS ---
  {
    buzzword: "CROSS",
    category: "Everyday Idioms",
    phrases: [
      { easy: "An intersection of two roads where you must decide which direction to go", medium: "Intersection where you choose a direction", hard: "Decision intersection", answer: "Crossroads" },
      { easy: "A decorative pattern of intersecting parallel lines drawn on a surface", medium: "Intersecting parallel line pattern", hard: "Intersecting line pattern", answer: "Cross-hatch" },
      { easy: "A fitness regimen that blends weightlifting cardio and gymnastics movements", medium: "Fitness blend of weightlifting and gymnastics", hard: "Mixed-fitness regimen", answer: "Cross-training" },
      { easy: "When an attorney questions the opposing side's witness in a trial", medium: "Attorney questioning the opposing witness", hard: "Opposing witness questioning", answer: "Cross-examination" },
      { easy: "Running or traveling over open terrain instead of following paved routes", medium: "Traveling over open terrain off-road", hard: "Off-road travel", answer: "Cross-country" },
      { easy: "A marked passage on a street where pedestrians can safely walk over", medium: "Marked pedestrian street passage", hard: "Pedestrian passage", answer: "Crosswalk" },
      { easy: "A red emblem on a white background indicating medical aid is available", medium: "Red-on-white medical aid emblem", hard: "Medical aid emblem", answer: "Cross symbol" },
      { easy: "A needlework technique creating X-shaped stitches on fabric", medium: "X-shaped needlework on fabric", hard: "X-pattern craft", answer: "Cross-stitch" },
      { easy: "To betray someone who trusted you by switching sides", medium: "Betray someone's trust by switching sides", hard: "Betray trust", answer: "Cross over" },
      { easy: "Irritable and easily annoyed about minor inconveniences", medium: "Easily annoyed by minor things", hard: "Easily annoyed", answer: "Cross-tempered" }
    ]
  },

  // --- Card 43: COFFEE ---
  {
    buzzword: "COFFEE",
    category: "Food & Drink",
    phrases: [
      { easy: "A short rest during the workday to grab a warm brew and chat with colleagues", medium: "Workday rest for a warm brew", hard: "Midwork brew pause", answer: "Coffee break" },
      { easy: "A ceramic vessel you hold to sip your morning espresso", medium: "Ceramic vessel for morning espresso", hard: "Espresso vessel", answer: "Coffee cup" },
      { easy: "An appliance that drips hot water through grounds to produce your morning drink", medium: "Appliance dripping hot water through grounds", hard: "Drip brew appliance", answer: "Coffee maker" },
      { easy: "The roasted seed of a tropical plant ground up for brewing", medium: "Roasted tropical seed for brewing", hard: "Roasted brew seed", answer: "Coffee bean" },
      { easy: "A frozen sweet dessert flavored with roasted brew extract", medium: "Frozen sweet dessert with brew extract", hard: "Brew-flavored frozen dessert", answer: "Coffee ice cream" },
      { easy: "A romantic or casual meeting over warm cups of brew", medium: "Meeting over warm brew", hard: "Brew meeting", answer: "Coffee date" },
      { easy: "A low surface beside a couch for resting mugs and magazines", medium: "Low couch-side surface for mugs", hard: "Couch-side surface", answer: "Coffee table" },
      { easy: "A dark mark left on fabric after spilling a morning drink", medium: "Dark mark from spilled brew", hard: "Spilled brew mark", answer: "Coffee stain" },
      { easy: "An establishment where baristas prepare espresso drinks to order", medium: "Barista establishment for espresso", hard: "Espresso establishment", answer: "Coffee shop" },
      { easy: "An oversized illustrated volume meant for guests to browse on the couch-side surface", medium: "Illustrated volume for browsing on a couch-side surface", hard: "Illustrated browsing volume", answer: "Coffee table book" }
    ]
  },

  // --- Card 44: BALL ---
  {
    buzzword: "BALL",
    category: "Sports & Games",
    phrases: [
      { easy: "An elegant formal dance held in a grand hall with orchestral music", medium: "Elegant formal dance in a grand hall", hard: "Grand formal dance", answer: "Ballroom" },
      { easy: "A sport or competition involving a spherical object on a field or court", medium: "Sport with a spherical object on a court", hard: "Spherical-object sport", answer: "Ball game" },
      { easy: "A rough numerical estimate that gives you a general idea", medium: "Rough numerical estimate", hard: "Rough estimate", answer: "Ballpark figure" },
      { easy: "An athlete who swings a bat and runs the bases in America's pastime", medium: "Athlete who swings a bat in America's pastime", hard: "Bat-swinging athlete", answer: "Ballplayer" },
      { easy: "A decorative spherical trinket hung on a holiday tree in December", medium: "Spherical trinket on a December tree", hard: "Tree sphere decoration", answer: "Ball ornament" },
      { easy: "A heavy metal weight attached to a prisoner's leg to prevent escape", medium: "Heavy metal weight restraining a prisoner", hard: "Prisoner restraint weight", answer: "Ball and chain" },
      { easy: "The athlete who carries the oval projectile toward the end zone on the gridiron", medium: "Athlete carrying the oval projectile on the gridiron", hard: "Projectile-carrying athlete", answer: "Ball carrier" },
      { easy: "A stadium or arena where a professional batting sport is played", medium: "Stadium for a professional batting sport", hard: "Batting sport stadium", answer: "Ballpark" },
      { easy: "A joint mechanism that allows rotation in multiple directions", medium: "Joint allowing multi-directional rotation", hard: "Rotating joint", answer: "Ball and socket" },
      { easy: "A formal evening dance event where guests celebrate in style", medium: "Formal evening dance celebration", hard: "Formal dance celebration", answer: "Ball gala" }
    ]
  },

  // --- Card 45: QUEEN ---
  {
    buzzword: "QUEEN",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "The legendary rock group with Freddie Mercury known for Bohemian Rhapsody", medium: "Freddie Mercury's legendary rock group", hard: "Mercury's rock group", answer: "Queen band" },
      { easy: "The long-reigning British monarch who served from 1952 to 2022", medium: "British monarch reigning 1952-2022", hard: "Long-reigning monarch", answer: "Queen Elizabeth" },
      { easy: "A playing figure in chess that can move any number of squares in any direction", medium: "Chess figure moving any direction freely", hard: "Versatile chess figure", answer: "Queen piece" },
      { easy: "A mattress dimension larger than full but smaller than king", medium: "Mattress between full and king in width", hard: "Mid-width mattress", answer: "Queen-size" },
      { easy: "The parent of a ruling female sovereign", medium: "Parent of a ruling female sovereign", hard: "Sovereign's parent", answer: "Queen mother" },
      { easy: "A playing card featuring a female royal as its face", medium: "Playing card with a female royal face", hard: "Female royal card", answer: "Queen of hearts" },
      { easy: "A large and impressive residence befitting female royalty", medium: "Impressive residence for female royalty", hard: "Royal residence", answer: "Queen estate" },
      { easy: "A musical track celebrating women who rule with confidence and style", medium: "Track celebrating confident ruling women", hard: "Ruling-women anthem", answer: "Queen song" },
      { easy: "A competitive event where drag artists perform and vie for a crown", medium: "Drag artist contest for a crown", hard: "Drag crown contest", answer: "Queen competition" },
      { easy: "The spouse of a ruling male sovereign", medium: "Spouse of a ruling male sovereign", hard: "Sovereign's spouse", answer: "Queen consort" }
    ]
  },

  // --- Card 46: BEAT ---
  {
    buzzword: "BEAT",
    category: "Music (2000+)",
    phrases: [
      { easy: "A producer who crafts instrumental loops for rappers to rhyme over", medium: "Producer crafting instrumental loops for rappers", hard: "Loop producer", answer: "Beat maker" },
      { easy: "The exact moment in an EDM track when the bass hits with maximum impact", medium: "Moment when EDM bass hits hardest", hard: "Bass impact moment", answer: "Beat drop" },
      { easy: "A patrol officer who walks a regular neighborhood route on foot", medium: "Patrol officer on a regular foot route", hard: "Foot patrol officer", answer: "Beat cop" },
      { easy: "A head-to-head contest where producers play their best instrumental loops", medium: "Head-to-head producer contest with loops", hard: "Producer contest", answer: "Beat battle" },
      { easy: "A journalist assigned to cover a specific topic area like education or crime", medium: "Journalist covering a specific topic area", hard: "Topic-assigned journalist", answer: "Beat reporter" },
      { easy: "Worn out and exhausted after a grueling day of work", medium: "Worn out after grueling work", hard: "Exhausted", answer: "Beat tired" },
      { easy: "The 1950s literary movement of Kerouac and Ginsberg rejecting mainstream values", medium: "Kerouac and Ginsberg's 1950s literary movement", hard: "50s literary movement", answer: "Beat generation" },
      { easy: "An electronic instrumental composition used as backing for a vocalist", medium: "Electronic instrumental for vocal backing", hard: "Vocal backing instrumental", answer: "Beat track" },
      { easy: "The steady rhythmic pulse you tap your foot to in a song", medium: "Steady pulse you tap your foot to", hard: "Steady pulse", answer: "Beat groove" },
      { easy: "To win against an opponent by scoring higher in a competition", medium: "Win by scoring higher than an opponent", hard: "Outscore", answer: "Beat it" }
    ]
  },

  // --- Card 47: CLOUD ---
  {
    buzzword: "CLOUD",
    category: "Tech & Internet",
    phrases: [
      { easy: "Saving your digital files to remote servers instead of your own hard drive", medium: "Saving files to remote servers", hard: "Remote file saving", answer: "Cloud storage" },
      { easy: "Processing power delivered over the web from distant data centers", medium: "Processing from distant data centers", hard: "Distant processing", answer: "Cloud computing" },
      { easy: "Playing video titles streamed from remote hardware instead of your own console", medium: "Playing titles streamed from remote hardware", hard: "Remote-streamed play", answer: "Cloud gaming" },
      { easy: "A sudden intense downpour that dumps rain in a short flash", medium: "Sudden intense downpour", hard: "Intense downpour", answer: "Cloud burst" },
      { easy: "A white or gray mass of condensed water vapor floating in the atmosphere", medium: "Condensed water vapor mass aloft", hard: "Floating vapor mass", answer: "Cloud formation" },
      { easy: "Software that runs on remote servers and is accessed through a browser", medium: "Browser-accessed remote software", hard: "Browser-based software", answer: "Cloud app" },
      { easy: "When the sky darkens and a gloomy overcast mood settles in", medium: "Sky darkening with gloomy overcast", hard: "Gloomy overcast", answer: "Cloud over" },
      { easy: "The extent to which the sky is obscured by moisture masses above", medium: "Sky obscured by moisture masses", hard: "Sky obscuration", answer: "Cloud cover" },
      { easy: "An online infrastructure for deploying software without managing physical hardware", medium: "Online infrastructure for hardware-free deployment", hard: "Hardware-free deployment", answer: "Cloud platform" },
      { easy: "A serverless code execution environment that runs on demand", medium: "Serverless on-demand code execution", hard: "On-demand execution", answer: "Cloud function" }
    ]
  },

  // --- Card 48: STORM ---
  {
    buzzword: "STORM",
    category: "Nature & Weather",
    phrases: [
      { easy: "The dangerous rise in coastal waters pushed inland by a hurricane's winds", medium: "Coastal water rise from hurricane winds", hard: "Hurricane-driven rise", answer: "Storm surge" },
      { easy: "A soldier in a specialized infantry unit from the World War era", medium: "Specialized WW-era infantry soldier", hard: "Specialized infantry soldier", answer: "Storm trooper" },
      { easy: "To exit a room in a furious rage slamming the door behind you", medium: "Exit furiously slamming a door", hard: "Furious exit", answer: "Storm out" },
      { easy: "An ominous dark mass of moisture signaling approaching severe weather", medium: "Dark moisture mass signaling severe weather", hard: "Ominous moisture mass", answer: "Storm cloud" },
      { easy: "The leading edge of an advancing weather system with rain and wind", medium: "Leading edge of an advancing weather system", hard: "Weather system edge", answer: "Storm front" },
      { easy: "An extra protective layer installed over a house opening to block harsh weather", medium: "Protective layer over a house opening for severe weather", hard: "Weather protective layer", answer: "Storm window" },
      { easy: "A sign that trouble or anger is building up and about to explode", medium: "Sign of building trouble about to explode", hard: "Building anger sign", answer: "Storm brewing" },
      { easy: "A reinforced safe room designed to protect against extreme weather events", medium: "Reinforced safe room for extreme weather", hard: "Weather safe room", answer: "Storm shelter" },
      { easy: "To assault and overtake a fortified position by overwhelming force", medium: "Assault and overtake a fortified position", hard: "Fortress assault", answer: "Storm the castle" },
      { easy: "A violent disturbance with high winds and heavy precipitation", medium: "Violent disturbance with high winds and precipitation", hard: "Violent weather event", answer: "Storm system" }
    ]
  },

  // --- Card 49: PEN ---
  {
    buzzword: "PEN",
    category: "Everyday Idioms",
    phrases: [
      { easy: "A distant friend you exchange handwritten letters with through the mail", medium: "Distant friend for handwritten mail exchange", hard: "Mail letter friend", answer: "Pen pal" },
      { easy: "An assumed identity an author publishes under instead of their real one", medium: "Author's assumed publishing identity", hard: "Author alias", answer: "Pen name" },
      { easy: "A small folding blade tucked inside a writing instrument for emergencies", medium: "Folding blade inside a writing instrument", hard: "Blade in a writer", answer: "Pen knife" },
      { easy: "The sharp metal tip of a fountain instrument that touches the page", medium: "Sharp metal tip of a fountain instrument", hard: "Fountain instrument tip", answer: "Pen nib" },
      { easy: "To schedule or confirm an appointment firmly in your calendar", medium: "Confirm an appointment firmly", hard: "Confirm firmly", answer: "Pen in" },
      { easy: "A fenced enclosure where farmers keep livestock contained", medium: "Fenced enclosure for containing livestock", hard: "Livestock enclosure", answer: "Pen corral" },
      { easy: "A correctional facility where inmates serve their sentences", medium: "Correctional facility for serving sentences", hard: "Inmate facility", answer: "Penitentiary" },
      { easy: "A writing instrument maker that produces premium fountain instruments", medium: "Premium fountain instrument maker", hard: "Premium writing maker", answer: "Pen brand" },
      { easy: "The small removable refill inside a fountain instrument that holds ink", medium: "Removable ink refill inside a fountain instrument", hard: "Fountain ink refill", answer: "Pen cartridge" },
      { easy: "An enclosed area adjacent to a barn for keeping farm animals", medium: "Enclosed area near a barn for animals", hard: "Barn enclosure", answer: "Pen stall" }
    ]
  },

  // --- Card 50: PITCH ---
  {
    buzzword: "PITCH",
    category: "Sports & Games",
    phrases: [
      { easy: "So completely dark you cannot see your hand in front of your face", medium: "So dark nothing is visible at all", hard: "Absolute darkness", answer: "Pitch black" },
      { easy: "A visual presentation entrepreneurs use to persuade investors to fund their startup", medium: "Visual presentation to persuade investors", hard: "Investor persuasion slides", answer: "Pitch deck" },
      { easy: "The grass area where a soccer or rugby match takes place", medium: "Grass area for soccer or rugby", hard: "Soccer grass", answer: "Pitch surface" },
      { easy: "The total number of throws a hurler has made during a match", medium: "Total throws by a hurler in a match", hard: "Hurler throw total", answer: "Pitch count" },
      { easy: "Flawlessly accurate in musical tone without any deviation", medium: "Flawless musical tone accuracy", hard: "Tone accuracy", answer: "Pitch perfect" },
      { easy: "A sales presentation where you try to convince a client to buy your product", medium: "Sales presentation to convince a client", hard: "Client persuasion", answer: "Pitch meeting" },
      { easy: "The 2012 a cappella comedy film about a college singing group", medium: "2012 a cappella college movie", hard: "A cappella movie", answer: "Pitch Perfect" },
      { easy: "To erect a temporary outdoor shelter for camping", medium: "Erect a temporary outdoor shelter", hard: "Erect outdoor shelter", answer: "Pitch tent" },
      { easy: "A fast throw in cricket that bounces near the batter's feet", medium: "Cricket throw bouncing near the feet", hard: "Cricket foot bounce", answer: "Pitch delivery" },
      { easy: "The degree of steepness or incline of a roof's slope", medium: "Steepness incline of a roof", hard: "Roof steepness", answer: "Pitch angle" }
    ]
  },

  // --- Card 51: KNIGHT ---
  {
    buzzword: "KNIGHT",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "The DC hero who defends Gotham City wearing a dark cowl and cape", medium: "DC hero in a dark cowl defending Gotham", hard: "Gotham cowl hero", answer: "Knight vigilante" },
      { easy: "A wandering medieval warrior who quests for adventure and honor", medium: "Wandering medieval questing warrior", hard: "Questing warrior", answer: "Knight errant" },
      { easy: "The 1982 TV series about a crime-fighting intelligent automobile named KITT", medium: "1982 crime-fighting intelligent automobile series", hard: "Smart car TV series", answer: "Knight Rider" },
      { easy: "The ceremonial act of a monarch tapping a sword on someone's shoulder to bestow rank", medium: "Monarch's sword tap conferring rank", hard: "Sword-tap ritual", answer: "Knight ceremony" },
      { easy: "The chess figure shaped like a horse that moves in an L-pattern", medium: "Horse-shaped chess figure moving in L-pattern", hard: "L-shaped chess horse", answer: "Knight piece" },
      { easy: "The dramatic downfall or defeat of a medieval warrior's order", medium: "Downfall of a medieval warrior order", hard: "Warrior order downfall", answer: "Knight fall" },
      { easy: "A medieval military-religious order from the Crusades era", medium: "Crusades-era military-religious order", hard: "Crusades military order", answer: "Knight templar" },
      { easy: "The protective metal suit a medieval warrior wore into battle", medium: "Metal suit a medieval warrior wore", hard: "Warrior metal suit", answer: "Knight armor" },
      { easy: "The warrior who jousts and competes in a royal tournament", medium: "Warrior competing in a royal jousting tournament", hard: "Jousting competitor", answer: "Knight champion" },
      { easy: "A warrior of Arthur's legendary fellowship at the circular dining table", medium: "Arthur's legendary fellowship warrior", hard: "Arthurian fellowship warrior", answer: "Knight order" }
    ]
  },

  // --- Card 52: CAKE ---
  {
    buzzword: "CAKE",
    category: "Food & Drink",
    phrases: [
      { easy: "Decorative figurines placed atop a wedding dessert for the newlyweds", medium: "Figurines atop a wedding dessert", hard: "Wedding figurines", answer: "Cake topper" },
      { easy: "A sweet buttercream or fondant layer covering a baked celebration treat", medium: "Buttercream layer covering a baked treat", hard: "Treat coating", answer: "Cake frosting" },
      { easy: "A miniature individual baked treat wrapped in a paper cup", medium: "Miniature baked treat in a paper cup", hard: "Mini paper-cup treat", answer: "Cupcake" },
      { easy: "An easy victory or task that requires almost no effort at all", medium: "Easy task requiring no effort", hard: "Effortless task", answer: "Cake walk" },
      { easy: "A round metal mold used for baking layered celebration treats in the oven", medium: "Metal mold for baking layered treats", hard: "Baking mold", answer: "Cake pan" },
      { easy: "The sweet layered dessert served with candles on your annual celebration day", medium: "Layered dessert with candles on your celebration day", hard: "Candle dessert", answer: "Birthday cake" },
      { easy: "The art of smoothing and sculpting fondant over a baked celebration treat", medium: "Art of sculpting fondant over a baked treat", hard: "Fondant sculpting", answer: "Cake decorating" },
      { easy: "A multi-level pedestal used to display an elaborate celebration dessert", medium: "Multi-level pedestal for a celebration dessert", hard: "Dessert pedestal", answer: "Cake stand" },
      { easy: "A wedge-shaped portion cut from a layered celebration dessert", medium: "Wedge cut from a layered dessert", hard: "Dessert wedge", answer: "Cake slice" },
      { easy: "A small circular baked good with a hole in the middle, often glazed", medium: "Circular glazed baked good with a hole", hard: "Glazed ring treat", answer: "Cake donut" }
    ]
  },

  // --- Card 53: BRIDGE ---
  {
    buzzword: "BRIDGE",
    category: "Geography",
    phrases: [
      { easy: "The famous enclosed Venetian walkway connecting a palace to a prison", medium: "Enclosed Venetian walkway from palace to prison", hard: "Venice palace-prison walk", answer: "Bridge of Sighs" },
      { easy: "A covered passage connecting two structures over a street or gap", medium: "Covered passage connecting structures over a gap", hard: "Structure-connecting passage", answer: "Bridge link" },
      { easy: "A trick-taking card activity where four participants play in two partnerships", medium: "Trick-taking activity with four in partnerships", hard: "Partnership trick activity", answer: "Bridge game" },
      { easy: "A dental prosthesis that fills the gap left by a missing molar", medium: "Dental prosthesis for a missing molar gap", hard: "Molar gap prosthesis", answer: "Bridge work" },
      { easy: "The command center on a vessel from which the captain navigates", medium: "Vessel's command center for navigation", hard: "Navigation command center", answer: "Bridge deck" },
      { easy: "A structural span that conveys water across a valley like a Roman-era channel", medium: "Span conveying water across a valley", hard: "Water-conveying span", answer: "Bridge viaduct" },
      { easy: "An artificial mouth appliance replacing one or more missing teeth", medium: "Artificial mouth appliance for missing teeth", hard: "Tooth replacement", answer: "Bridge prosthetic" },
      { easy: "A transitional sonic passage connecting a verse to a chorus", medium: "Transitional passage connecting verse to chorus", hard: "Verse-chorus passage", answer: "Bridge section" },
      { easy: "A geologically formed rock formation spanning a canyon gap", medium: "Geologic rock formation spanning a canyon", hard: "Canyon rock formation", answer: "Bridge arch" },
      { easy: "The iconic orange suspension structure spanning the entrance to San Francisco Bay", medium: "Orange suspension structure at San Francisco Bay", hard: "SF Bay suspension", answer: "Bridge crossing" }
    ]
  },

  // --- Card 54: WAVE ---
  {
    buzzword: "WAVE",
    category: "Science & Math",
    phrases: [
      { easy: "The mathematical formula describing a quantum particle's probability distribution", medium: "Formula for quantum probability distribution", hard: "Quantum probability formula", answer: "Wave function" },
      { easy: "A friendly hand gesture to acknowledge someone from a distance", medium: "Hand gesture acknowledging someone from afar", hard: "Distant hand greeting", answer: "Wave hello" },
      { easy: "The distance between two consecutive peaks of a repeating oscillation", medium: "Distance between consecutive oscillation peaks", hard: "Peak-to-peak distance", answer: "Wave length" },
      { easy: "A disturbance in spacetime caused by the collision of massive cosmic objects", medium: "Spacetime disturbance from cosmic collisions", hard: "Spacetime disturbance", answer: "Wave ripple" },
      { easy: "A device producing oscillating signals for laboratory experiments", medium: "Oscillating signal producer for experiments", hard: "Oscillation signal source", answer: "Wave generator" },
      { easy: "The undulating movement of ocean swells approaching the coastline", medium: "Undulating ocean swells approaching shore", hard: "Ocean swells", answer: "Wave motion" },
      { easy: "A classical physics model explaining light and sound as oscillatory disturbances", medium: "Classical model of oscillatory disturbances", hard: "Oscillation model", answer: "Wave theory" },
      { easy: "The power carried by an oscillating disturbance through a medium", medium: "Power from an oscillating disturbance", hard: "Oscillation power", answer: "Wave energy" },
      { easy: "A disturbance that travels through matter transferring power without permanent displacement", medium: "Disturbance transferring power through matter", hard: "Power-transferring disturbance", answer: "Wave propagation" },
      { easy: "The height measurement of an oscillating curve from its resting position", medium: "Height of an oscillation from resting position", hard: "Oscillation height", answer: "Wave amplitude" }
    ]
  },

  // --- Card 55: SHOT ---
  {
    buzzword: "SHOT",
    category: "Sports & Games",
    phrases: [
      { easy: "A countdown device limiting how long a basketball team can hold possession", medium: "Basketball possession countdown device", hard: "Possession countdown", answer: "Shot clock" },
      { easy: "A small thick-bottomed tumbler used for serving a single measure of spirits", medium: "Small tumbler for a single spirits measure", hard: "Spirits tumbler", answer: "Shot glass" },
      { easy: "A field event where athletes heave a heavy iron sphere for distance", medium: "Field event heaving a heavy iron sphere", hard: "Iron sphere heave", answer: "Shot put" },
      { easy: "An unexpected opportunity to achieve something you've been aiming for", medium: "Unexpected opportunity you've aimed for", hard: "Unexpected opportunity", answer: "Shot at glory" },
      { easy: "A detailed itinerary of camera setups planned for a film or video production", medium: "Camera setup itinerary for film production", hard: "Film camera itinerary", answer: "Shot list" },
      { easy: "An attempt on goal in soccer that forces the keeper to make a save", medium: "Soccer attempt forcing a keeper save", hard: "Goal-bound attempt", answer: "Shot on target" },
      { easy: "The sound of a weapon discharging in a military or law enforcement setting", medium: "Sound of a weapon discharging", hard: "Weapon discharge sound", answer: "Shot fired" },
      { easy: "A hypodermic immunization administered to protect against disease", medium: "Protective hypodermic immunization", hard: "Protective immunization", answer: "Shot injection" },
      { easy: "A single captured frame taken by a professional or amateur with a camera", medium: "Single captured frame by a camera user", hard: "Single captured frame", answer: "Shot snapshot" },
      { easy: "A bar activity where players toss small metal projectiles at a marked board", medium: "Bar activity tossing metal projectiles at a board", hard: "Projectile-tossing activity", answer: "Shot attempt" }
    ]
  },

  // ===== BATCH 4: Cards 56–70 =====

  // --- Card 56: DREAM ---
  {
    buzzword: "DREAM",
    category: "Everyday Idioms",
    phrases: [
      { easy: "The best possible group of people assembled for a particular purpose", medium: "Best possible group assembled for a purpose", hard: "Ideal group", answer: "Dream team" },
      { easy: "An ideal occupation that feels more like play than work", medium: "Occupation that feels like play", hard: "Ideal occupation", answer: "Dream job" },
      { easy: "A perfect residence that represents everything you have ever wanted in a home", medium: "Perfect residence of one's fantasies", hard: "Perfect residence", answer: "Dream house" },
      { easy: "A getaway destination you have always longed to visit but never have", medium: "Getaway destination always longed to visit", hard: "Longed-for getaway", answer: "Dream vacation" },
      { easy: "A Native American webbed hoop believed to filter out bad visions during slumber", medium: "Native American webbed hoop filtering bad visions", hard: "Vision-filtering hoop", answer: "Dream catcher" },
      { easy: "The national ethos that prosperity comes through hard effort and determination", medium: "National ethos of prosperity through effort", hard: "Prosperity ethos", answer: "American Dream" },
      { easy: "An unrealistic fantasy with no chance of ever coming true", medium: "Unrealistic fantasy impossible to achieve", hard: "Impossible fantasy", answer: "Pipe dream" },
      { easy: "A pleasant waking fantasy that distracts you from the present moment", medium: "Pleasant waking fantasy distracting from now", hard: "Waking fantasy", answer: "Daydream" },
      { easy: "A traditional bedtime wish for someone to have restful slumber", medium: "Bedtime wish for restful slumber", hard: "Bedtime wish", answer: "Sweet dreams" },
      { easy: "A film or TV scene depicting events happening while a character sleeps", medium: "Film scene depicting events during sleep", hard: "Sleep scene", answer: "Dream sequence" }
    ]
  },

  // --- Card 57: FLOWER ---
  {
    buzzword: "FLOWER",
    category: "Nature & Weather",
    phrases: [
      { easy: "A tall yellow-petaled plant that turns to track the daylight across the sky", medium: "Tall yellow plant tracking daylight", hard: "Daylight-tracking plant", answer: "Sunflower" },
      { easy: "An uncultivated bloom growing freely in meadows and along roadsides", medium: "Uncultivated bloom growing freely in meadows", hard: "Free-growing bloom", answer: "Wildflower" },
      { easy: "A landscaped planting area for decorative blooms in a yard", medium: "Landscaped area for decorative blooms", hard: "Bloom planting area", answer: "Flower bed" },
      { easy: "A container made of ceramic or terracotta for growing container plants", medium: "Ceramic container for growing container plants", hard: "Plant holder", answer: "Flower pot" },
      { easy: "A 1960s counterculture slogan promoting peace and nonviolence", medium: "1960s counterculture peace slogan", hard: "Peace slogan", answer: "Flower power" },
      { easy: "A young wedding attendant who scatters petals down the aisle before the bride", medium: "Young attendant scattering petals at a wedding", hard: "Petal scatterer", answer: "Flower girl" },
      { easy: "A decorative display of cut stems and greenery for ceremonies or gifts", medium: "Decorative display of cut stems for ceremonies", hard: "Stem display", answer: "Flower arrangement" },
      { easy: "A retail establishment selling bouquets and corsages for special events", medium: "Retail establishment selling bouquets for events", hard: "Bouquet store", answer: "Flower shop" },
      { easy: "A colorful soft leaf surrounding a bloom reproductive center", medium: "Colorful leaf surrounding a bloom center", hard: "Bloom leaf", answer: "Flower petal" },
      { easy: "A hippie peacenik of the 1960s who advocated love and harmony", medium: "1960s hippie advocating love and peace", hard: "Hippie peacenik", answer: "Flower child" }
    ]
  },

  // --- Card 58: FISH ---
  {
    buzzword: "FISH",
    category: "Food & Drink",
    phrases: [
      { easy: "A classic British pub meal of battered cod and deep-fried potato strips", medium: "British battered cod with fried potatoes", hard: "Battered cod meal", answer: "Fish and chips" },
      { easy: "A Baja-style tortilla filled with grilled or fried seafood and cabbage slaw", medium: "Baja tortilla with grilled seafood and slaw", hard: "Seafood tortilla", answer: "Fish taco" },
      { easy: "A pungent fermented liquid condiment from Southeast Asian cuisine", medium: "Fermented Southeast Asian liquid condiment", hard: "Fermented condiment", answer: "Fish sauce" },
      { easy: "A community dinner featuring breaded and deep-fried fillets often on Fridays", medium: "Community dinner of breaded deep-fried fillets", hard: "Fried fillet dinner", answer: "Fish fry" },
      { easy: "A commercial venue selling fresh catches displayed on crushed ice", medium: "Place selling fresh catches on ice", hard: "Fresh catch seller", answer: "Fish market" },
      { easy: "A frozen breaded rectangular fillet that bakes in the oven for an easy meal", medium: "Frozen breaded rectangular fillet for baking", hard: "Frozen breaded fillet", answer: "Fish stick" },
      { easy: "A fried patty of minced seafood mixed with potato and seasonings", medium: "Fried patty of minced seafood and potato", hard: "Fried seafood patty", answer: "Fish cake" },
      { easy: "A spherical glass container for keeping aquatic pets on a desk or shelf", medium: "Spherical glass container for aquatic pets", hard: "Glass aquatic sphere", answer: "Fish bowl" },
      { easy: "A children card game about collecting the most matching pairs", medium: "Children card game collecting matching pairs", hard: "Pair-collecting game", answer: "Go fish" },
      { easy: "A small outdoor water feature for keeping ornamental koi or carp", medium: "Outdoor water feature for ornamental carp", hard: "Ornamental pool", answer: "Fish pond" }
    ]
  },

  // --- Card 59: MIND ---
  {
    buzzword: "MIND",
    category: "Body & Health",
    phrases: [
      { easy: "A person who claims to perceive another unspoken thoughts without communication", medium: "Person perceiving unspoken thoughts", hard: "Thought perceiver", answer: "Mind reader" },
      { easy: "A technique of manipulating someone thoughts or behavior without their consent", medium: "Manipulating another thoughts or behavior", hard: "Thought manipulation", answer: "Mind control" },
      { easy: "The principle that willpower can overcome physical obstacles and pain", medium: "Willpower overcoming physical obstacles", hard: "Willpower over pain", answer: "Mind over matter" },
      { easy: "A receptive attitude willing to consider new or different ideas", medium: "Receptive attitude toward different ideas", hard: "Receptive attitude", answer: "Open mind" },
      { easy: "Psychological tactics used to manipulate confuse or undermine someone", medium: "Psychological tactics to manipulate or confuse", hard: "Psychological tactics", answer: "Mind games" },
      { easy: "A state of being free from worry and emotional anxiety", medium: "State free from worry and anxiety", hard: "Worry-free state", answer: "Peace of mind" },
      { easy: "The act of reversing a previous decision or switching your opinion", medium: "Reversing a previous decision or opinion", hard: "Decision reversal", answer: "Change of mind" },
      { easy: "To remember and consider something important while making choices", medium: "Remember something important while deciding", hard: "Remember this", answer: "Keep in mind" },
      { easy: "So astonishing it challenges your comprehension and leaves you stunned", medium: "So astonishing it challenges comprehension", hard: "Extremely astonishing", answer: "Mind blowing" },
      { easy: "A prompt to behave with proper etiquette in social situations", medium: "Prompt to behave with proper etiquette", hard: "Etiquette prompt", answer: "Mind your manners" }
    ]
  },

  // --- Card 60: KING ---
  {
    buzzword: "KING",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "A fast-food chain known for flame-grilled patties and the Whopper", medium: "Fast-food chain known for flame-grilled patties", hard: "Flame-grill chain", answer: "Burger King" },
      { easy: "Disney 1994 animated film about a young feline ruler on the African savanna", medium: "Disney 1994 animated feline ruler film", hard: "Disney feline ruler", answer: "Lion King" },
      { easy: "A classic movie about a giant ape climbing the Empire State Building", medium: "Classic movie about a giant ape on a skyscraper", hard: "Giant ape classic", answer: "King Kong" },
      { easy: "A prolific author of horror fiction including The Shining and It", medium: "Prolific horror author of The Shining and It", hard: "Horror fiction author", answer: "Stephen King" },
      { easy: "The current British monarch who ascended the throne in 2022", medium: "Current British monarch since 2022", hard: "British monarch", answer: "King Charles" },
      { easy: "A title bestowed upon Michael Jackson for his dominance in mainstream music", medium: "Title for Michael Jackson musical dominance", hard: "Music title", answer: "King of Pop" },
      { easy: "A male student elected as dance royalty at a high school formal", medium: "Male student elected as dance royalty", hard: "Dance royalty", answer: "Prom king" },
      { easy: "An animated sitcom about a propane salesman in Texas created by Mike Judge", medium: "Animated Texas propane salesman sitcom", hard: "Texas propane sitcom", answer: "King of the Hill" },
      { easy: "A famous Egyptian boy pharaoh whose intact tomb was discovered in 1922", medium: "Egyptian boy pharaoh with tomb found in 1922", hard: "Boy pharaoh", answer: "King Tut" },
      { easy: "A performer who adopts masculine attire and mannerisms on stage", medium: "Performer adopting masculine attire on stage", hard: "Masculine performer", answer: "Drag king" }
    ]
  },

  // --- Card 61: CHAIN ---
  {
    buzzword: "CHAIN",
    category: "Everyday Idioms",
    phrases: [
      { easy: "A series of events where each one triggers the next like toppling dominoes", medium: "Events where each triggers the next", hard: "Sequential causation", answer: "Chain reaction" },
      { easy: "A message that demands recipients forward copies to several other people", medium: "Message demanding recipients forward copies", hard: "Forward-demanding message", answer: "Chain letter" },
      { easy: "A person who lights one cigarette immediately after finishing the last", medium: "Person lighting cigarettes one after another", hard: "Constant puffer", answer: "Chain smoker" },
      { easy: "A hierarchy of predators and prey showing who eats whom in an ecosystem", medium: "Predator-prey hierarchy in an ecosystem", hard: "Predator-prey hierarchy", answer: "Food chain" },
      { easy: "A network of steps from raw materials to consumer delivery in manufacturing", medium: "Manufacturing steps from materials to consumer", hard: "Manufacturing network", answer: "Supply chain" },
      { easy: "An interlocking metal loop used in fencing or as jewelry", medium: "Interlocking metal loop for fencing or jewelry", hard: "Metal loop", answer: "Chain link" },
      { easy: "A motorized cutting tool with a toothed rotating blade for felling trees", medium: "Motorized tool with toothed blade for trees", hard: "Motorized tree cutter", answer: "Chain saw" },
      { easy: "A retail outlet operating under a shared corporate brand nationwide", medium: "Retail outlet under a shared corporate brand", hard: "Corporate-brand outlet", answer: "Chain store" },
      { easy: "Slang for something excellent or wildly unrestrained and exciting", medium: "Slang for excellent or wildly unrestrained", hard: "Excellent slang", answer: "Off the chain" },
      { easy: "A series of items connected in a loop like flowers strung together", medium: "Items connected in a loop or sequence", hard: "Looped connection", answer: "Daisy chain" }
    ]
  },

  // --- Card 62: FIREWORK ---
  {
    buzzword: "FIREWORK",
    category: "Music (2000+)",
    phrases: [
      { easy: "Katy Perry 2010 empowerment anthem about igniting your inner spark", medium: "Katy Perry 2010 empowerment anthem", hard: "Perry empowerment anthem", answer: "Firework" },
      { easy: "A July Fourth pyrotechnic spectacle lighting up the night sky over a city", medium: "July 4th pyrotechnic spectacle", hard: "July 4th spectacle", answer: "Fireworks show" },
      { easy: "A municipal exhibition of rockets and roman candles for a holiday crowd", medium: "Municipal exhibition of rockets for a crowd", hard: "Rocket exhibition", answer: "Fireworks display" },
      { easy: "A community celebration featuring choreographed nighttime pyrotechnics over water", medium: "Community celebration with choreographed pyrotechnics", hard: "Pyrotechnic celebration", answer: "Fireworks festival" },
      { easy: "The grand concluding burst at the end of a pyrotechnic event", medium: "Grand concluding burst of a pyrotechnic event", hard: "Concluding burst", answer: "Fireworks finale" },
      { easy: "An injury caused by mishandling explosive celebratory devices", medium: "Injury from mishandling explosive celebratory devices", hard: "Explosive injury", answer: "Fireworks accident" },
      { easy: "A temporary roadside retail tent selling pyrotechnics during summer", medium: "Seasonal roadside tent selling pyrotechnics", hard: "Seasonal pyrotechnic tent", answer: "Firework stand" },
      { easy: "A midnight pyrotechnic celebration welcoming January 1st around the world", medium: "Midnight pyrotechnic celebration on January 1st", hard: "January 1st celebration", answer: "New Year fireworks" },
      { easy: "An elaborate choreographed pyrotechnic performance synchronized to music", medium: "Choreographed pyrotechnic performance with music", hard: "Choreographed pyrotechnics", answer: "Fireworks extravaganza" },
      { easy: "Guidelines and precautions for preventing injuries from explosive novelties", medium: "Guidelines preventing injuries from explosive novelties", hard: "Explosive precaution rules", answer: "Fireworks safety" }
    ]
  },

  // --- Card 63: BERRY ---
  {
    buzzword: "BERRY",
    category: "Food & Drink",
    phrases: [
      { easy: "A small sweet indigo fruit commonly used in muffins and pancakes", medium: "Sweet indigo fruit for muffins and pancakes", hard: "Indigo muffin fruit", answer: "Blueberry" },
      { easy: "A bright red fruit with tiny seeds dotting its outer surface", medium: "Red fruit with tiny seeds on its surface", hard: "Seeded red fruit", answer: "Strawberry" },
      { easy: "A delicate red bramble fruit with a hollow center when picked", medium: "Delicate red bramble fruit with hollow center", hard: "Hollow bramble fruit", answer: "Raspberry" },
      { easy: "A dark purple hedgerow fruit used in jams and crumbles", medium: "Dark purple hedgerow fruit for jams", hard: "Purple hedgerow fruit", answer: "Blackberry" },
      { easy: "A tart red fruit served as a sauce at Thanksgiving dinners", medium: "Tart red fruit served at Thanksgiving", hard: "Thanksgiving fruit", answer: "Cranberry" },
      { easy: "A blended frozen drink of fruit and yogurt mixed until smooth", medium: "Blended frozen fruit and yogurt drink", hard: "Frozen fruit drink", answer: "Berry smoothie" },
      { easy: "A baked pastry filled with small fruits and topped with a crust", medium: "Baked pastry filled with small fruits", hard: "Fruit-filled pastry", answer: "Berry pie" },
      { easy: "A dessert of baked fruit under a crumbly butter-flour topping", medium: "Baked fruit under crumbly topping", hard: "Crumb-topped dessert", answer: "Berry crisp" },
      { easy: "A thicket of bushes where small fruits grow for summer picking", medium: "Thicket of bushes for summer fruit picking", hard: "Fruit-picking thicket", answer: "Berry patch" },
      { easy: "A warm-weather activity of gathering small fruits from bushes by hand", medium: "Gathering small fruits from bushes by hand", hard: "Fruit gathering activity", answer: "Berry picking" }
    ]
  },

  // --- Card 64: CAMP ---
  {
    buzzword: "CAMP",
    category: "Sports & Games",
    phrases: [
      { easy: "An intense pre-season athletic preparatory session where players prove themselves", medium: "Intense pre-season athletic preparatory session", hard: "Pre-season session", answer: "Training camp" },
      { easy: "A rigorous military-style fitness program designed to build discipline fast", medium: "Rigorous military-style fitness program", hard: "Military fitness program", answer: "Boot camp" },
      { easy: "A young leader who supervises kids and leads activities at a summer program", medium: "Young leader supervising kids at a summer program", hard: "Summer program leader", answer: "Camp counselor" },
      { easy: "An outdoor blaze for gathering and telling stories under the stars", medium: "Outdoor blaze for gathering and storytelling", hard: "Outdoor blaze", answer: "Campfire" },
      { easy: "The starting point settlement for a mountain climbing expedition", medium: "Starting settlement for a climbing expedition", hard: "Expedition start", answer: "Base camp" },
      { easy: "A park with designated spots for tents and RVs near nature trails", medium: "Park with spots for tents and RVs", hard: "RV and tent park", answer: "Campground" },
      { easy: "An individual cleared area where hikers pitch their tent at the end of a trail", medium: "Cleared area where hikers pitch their tent", hard: "Tent area", answer: "Campsite" },
      { easy: "A summer music program for marching musicians to practice routines", medium: "Summer music program for marching musicians", hard: "Musician program", answer: "Band camp" },
      { easy: "A summer training program for chant and tumbling squads", medium: "Summer training for chant and tumbling squads", hard: "Chant squad training", answer: "Cheer camp" },
      { easy: "The person who oversees all operations and staff at a summer program", medium: "Person overseeing operations at a summer program", hard: "Program overseer", answer: "Camp director" }
    ]
  },

  // --- Card 65: GATE ---
  {
    buzzword: "GATE",
    category: "Everyday Idioms",
    phrases: [
      { easy: "San Francisco famous orange suspension bridge spanning its namesake strait", medium: "Famous orange suspension bridge in San Francisco", hard: "SF orange bridge", answer: "Golden Gate" },
      { easy: "A hinged barrier that releases racehorses simultaneously at the start", medium: "Barrier releasing racehorses simultaneously", hard: "Racing barrier", answer: "Starting gate" },
      { easy: "An airline employee who checks boarding passes at the terminal departure area", medium: "Airline employee checking boarding passes", hard: "Airline checker", answer: "Gate agent" },
      { easy: "An uninvited person who sneaks into a private event without a ticket", medium: "Uninvited person sneaking into a private event", hard: "Uninvited sneaker", answer: "Gate crasher" },
      { easy: "A political scandal that led to President Nixon resignation in 1974", medium: "Scandal leading to Nixon resignation", hard: "Nixon scandal", answer: "Watergate" },
      { easy: "Revenue collected from ticket sales at a venue or event", medium: "Revenue from ticket sales at a venue", hard: "Ticket revenue", answer: "Gate receipt" },
      { easy: "A neoclassical monument in Berlin that once symbolized the Cold War divide", medium: "Berlin monument symbolizing the Cold War divide", hard: "Berlin monument", answer: "Brandenburg Gate" },
      { easy: "A dramatic gorge along the Danube between Romania and Serbia", medium: "Danube gorge between Romania and Serbia", hard: "Danube gorge", answer: "Iron Gate" },
      { easy: "The co-founder of Microsoft and one of the world wealthiest philanthropists", medium: "Microsoft co-founder and philanthropist", hard: "Microsoft co-founder", answer: "Bill Gates" },
      { easy: "A narrow turbulent passage in the East River of New York City", medium: "Narrow turbulent East River passage in NYC", hard: "NYC river passage", answer: "Hell Gate" }
    ]
  },

  // --- Card 66: CELL ---
  {
    buzzword: "CELL",
    category: "Science & Math",
    phrases: [
      { easy: "The rigid outer layer surrounding a plant structural unit providing support", medium: "Rigid outer layer supporting a plant structure", hard: "Plant rigid layer", answer: "Cell wall" },
      { easy: "The control center containing genetic material inside a biological unit", medium: "Control center with genetic material", hard: "Genetic control center", answer: "Cell nucleus" },
      { easy: "The thin boundary layer regulating what enters and exits a biological unit", medium: "Thin boundary regulating entry and exit", hard: "Boundary regulator", answer: "Cell membrane" },
      { easy: "A photovoltaic device converting sunlight directly into electricity", medium: "Photovoltaic device converting sunlight to electricity", hard: "Sunlight converter", answer: "Solar cell" },
      { easy: "The process where one biological unit splits into two identical daughters", medium: "One biological unit splitting into two daughters", hard: "Unit splitting", answer: "Cell division" },
      { easy: "The scientific study of life basic structural and functional units", medium: "Scientific study of life basic units", hard: "Life-units study", answer: "Cell biology" },
      { easy: "A spreadsheet location identified by its row and column coordinates", medium: "Spreadsheet location at row-column coordinates", hard: "Spreadsheet location", answer: "Cell reference" },
      { easy: "A white blood defender that engulfs pathogens as part of the defensive response", medium: "White defender engulfing pathogens for defense", hard: "Pathogen engulfer", answer: "Immune cell" },
      { easy: "The smallest repeating pattern in a crystal lattice framework", medium: "Smallest repeating pattern in a crystal lattice", hard: "Crystal repeating element", answer: "Unit cell" },
      { easy: "An electrochemical device producing electricity from hydrogen and oxygen", medium: "Electrochemical device producing electricity from hydrogen", hard: "Hydrogen power device", answer: "Fuel cell" }
    ]
  },

  // --- Card 67: SNOW ---
  {
    buzzword: "SNOW",
    category: "Nature & Weather",
    phrases: [
      { easy: "A vehicle with a front blade for clearing roads after a winter storm", medium: "Vehicle with blade for clearing winter roads", hard: "Road-clearing vehicle", answer: "Snowplow" },
      { easy: "A packed sphere of frozen precipitation for throwing at friends", medium: "Packed frozen sphere for throwing", hard: "Frozen sphere", answer: "Snowball" },
      { easy: "A stacked figure of frozen precipitation with a carrot nose and top hat", medium: "Stacked frozen figure with carrot nose and hat", hard: "Frozen figure", answer: "Snowman" },
      { easy: "A severe weather event with heavy frozen precipitation and strong winds", medium: "Severe event with heavy frozen precipitation", hard: "Severe winter event", answer: "Snowstorm" },
      { easy: "A unique six-branched crystal of frozen water falling from clouds", medium: "Unique six-branched frozen crystal", hard: "Six-branched crystal", answer: "Snowflake" },
      { easy: "A treaded vehicle for traveling over deep frozen terrain in winter", medium: "Treaded vehicle for deep frozen terrain", hard: "Treaded winter vehicle", answer: "Snowmobile" },
      { easy: "An athlete who glides down alpine slopes on a single wide plank", medium: "Athlete gliding down slopes on a wide plank", hard: "Alpine plank rider", answer: "Snowboarder" },
      { easy: "A rare spotted big cat native to the mountains of Central Asia", medium: "Rare spotted big cat of Central Asian mountains", hard: "Asian mountain cat", answer: "Snow leopard" },
      { easy: "An impression made by lying on fresh frozen ground and moving limbs outward", medium: "Impression made by lying on fresh frozen ground", hard: "Ground impression", answer: "Snow angel" },
      { easy: "A school closure due to heavy winter weather — every kid wish", medium: "School closure due to heavy winter weather", hard: "School closure", answer: "Snow day" }
    ]
  },

  // --- Card 68: RING ---
  {
    buzzword: "RING",
    category: "Pop Culture & Media",
    phrases: [
      { easy: "Tolkien epic about a powerful circular artifact that must be destroyed", medium: "Tolkien epic about a powerful circular artifact", hard: "Tolkien artifact epic", answer: "Lord of the Rings" },
      { easy: "A young person who carries the ceremonial bands down the aisle at a wedding", medium: "Ceremonial band carrier at a wedding", hard: "Wedding carrier", answer: "Ring bearer" },
      { easy: "A 2002 horror film about a cursed videotape that kills viewers in seven days", medium: "2002 horror about a cursed videotape", hard: "Cursed videotape horror", answer: "The Ring" },
      { easy: "An auditory signal on a phone alerting you to an incoming call", medium: "Phone auditory signal for incoming calls", hard: "Phone alert", answer: "Ring tone" },
      { easy: "A precious metal band given at a marriage proposal", medium: "Precious metal band given at a proposal", hard: "Proposal band", answer: "Engagement ring" },
      { easy: "A roped square where boxers compete in championship bouts", medium: "Roped square where boxers compete", hard: "Pugilism arena", answer: "Boxing ring" },
      { easy: "A covert network of agents operating within an organization for intelligence", medium: "Covert agent network within an organization", hard: "Covert agent network", answer: "Spy ring" },
      { easy: "The performer who introduces acts and keeps the audience engaged at a circus", medium: "Performer introducing circus acts", hard: "Circus host", answer: "Ringmaster" },
      { easy: "A fungal skin infection that creates a circular red rash on the body", medium: "Fungal infection creating a circular red rash", hard: "Circular rash", answer: "Ringworm" },
      { easy: "A jeweled emblem awarded to winners of a major sports title", medium: "Jeweled emblem for title winners", hard: "Title emblem", answer: "Championship ring" }
    ]
  },

  // --- Card 69: NAIL ---
  {
    buzzword: "NAIL",
    category: "Everyday Idioms",
    phrases: [
      { easy: "A colored lacquer applied to fingertips for cosmetic decoration in many shades", medium: "Colored lacquer for fingertip decoration", hard: "Fingertip lacquer", answer: "Nail polish" },
      { easy: "An abrasive stick for smoothing and shaping keratin edges on fingers", medium: "Abrasive stick for smoothing keratin edges", hard: "Keratin smoother", answer: "Nail file" },
      { easy: "A small cutting tool for trimming keratin plates on fingers and toes", medium: "Cutting tool for trimming keratin plates", hard: "Keratin trimmer", answer: "Nail clipper" },
      { easy: "A pneumatically powered tool that drives metal fasteners into wood rapidly", medium: "Pneumatic tool driving fasteners rapidly", hard: "Pneumatic fastener tool", answer: "Nail gun" },
      { easy: "An establishment providing manicures and pedicures for clients", medium: "Establishment providing manicures and pedicures", hard: "Manicure establishment", answer: "Nail salon" },
      { easy: "The skin beneath the hard keratin plate on each finger", medium: "Skin beneath the keratin plate on a finger", hard: "Keratin underlayer", answer: "Nail bed" },
      { easy: "A person who chews on their fingertips when feeling anxious or nervous", medium: "Person chewing fingertips when anxious", hard: "Anxious chewer", answer: "Nail biter" },
      { easy: "Creative decorative designs painted onto keratin plates by a technician", medium: "Decorative designs painted on keratin plates", hard: "Keratin decoration", answer: "Nail art" },
      { easy: "To describe or identify something with perfect accuracy and precision", medium: "Describe something with perfect accuracy", hard: "Perfect description", answer: "Hit the nail on the head" },
      { easy: "To finalize or secure an agreement firmly so it cannot be reversed", medium: "Finalize an agreement firmly", hard: "Finalize firmly", answer: "Nail down" }
    ]
  },

  // --- Card 70: DRUM ---
  {
    buzzword: "DRUM",
    category: "Music (2000+)",
    phrases: [
      { easy: "An electronic device producing percussion sounds for studio recordings", medium: "Electronic device producing percussion sounds", hard: "Electronic percussion", answer: "Drum machine" },
      { easy: "A collection of percussion instruments arranged around a seated player", medium: "Percussion collection arranged around a player", hard: "Percussion collection", answer: "Drum kit" },
      { easy: "A full arrangement of shells cymbals and pedals for a rock or jazz player", medium: "Full arrangement of shells and cymbals for playing", hard: "Full percussion set", answer: "Drum set" },
      { easy: "A showcasing passage where the percussionist plays alone to demonstrate skill", medium: "Passage where percussionist plays alone", hard: "Unaccompanied passage", answer: "Drum solo" },
      { easy: "A rapid building rhythm played on a snare before a big announcement", medium: "Rapid building rhythm before a big announcement", hard: "Rapid building rhythm", answer: "Drum roll" },
      { easy: "The repeating rhythmic pattern forming the foundation of a music track", medium: "Repeating rhythmic foundation of a track", hard: "Rhythmic foundation", answer: "Drum beat" },
      { easy: "A short recorded percussion segment repeated as a backing track in production", medium: "Recorded percussion segment repeated as backing", hard: "Repeated percussion clip", answer: "Drum loop" },
      { easy: "A cylinder with wires stretched across the bottom for a sharp crack sound", medium: "Cylinder with wires for a sharp crack", hard: "Wired cylinder", answer: "Snare drum" },
      { easy: "A large deep-toned instrument played with a foot pedal in marching bands", medium: "Large deep-toned instrument with foot pedal", hard: "Deep-toned instrument", answer: "Bass drum" },
      { easy: "An informal gathering where people play hand percussion together in a round formation", medium: "Gathering to play hand percussion together", hard: "Percussion gathering", answer: "Drum circle" }
    ]
  },

  // ===== BATCH 5: Cards 71–85 =====

  // --- Card 71: FIRE ---
  {
    buzzword: "FIRE",
    category: "Science & Math",
    phrases: [
      { easy: "The rapid oxidation process that releases heat and light from a combustible material", medium: "Rapid oxidation releasing heat and light", hard: "Oxidation process", answer: "Fire triangle" },
      { easy: "A safety device that sprays water to suppress flames in a commercial building", medium: "Safety device spraying water to suppress flames", hard: "Flame suppressor", answer: "Fire sprinkler" },
      { easy: "The temperature at which a substance ignites without an external spark", medium: "Temperature where a substance ignites without a spark", hard: "Ignition temperature", answer: "Fire point" },
      { easy: "A reaction where oxygen combines with another substance producing intense heat and light", medium: "Oxygen combining with another substance producing heat", hard: "Heat-producing reaction", answer: "Fire chemistry" },
      { easy: "A heat-resistant barrier between a vehicle engine and the passenger compartment", medium: "Heat barrier between engine and cabin", hard: "Engine heat barrier", answer: "Firewall" },
      { easy: "A professional who investigates the origin and cause of destructive blazes", medium: "Professional investigating blaze origins", hard: "Blaze investigator", answer: "Fire marshal" },
      { easy: "The intentional use of controlled burns to manage wildland habitats and vegetation", medium: "Controlled burns for managing wildland habitats", hard: "Habitat burn method", answer: "Fire ecology" },
      { easy: "A measure of how easily a material will ignite and sustain combustion", medium: "Measure of how easily material ignites", hard: "Ignition measure", answer: "Fire resistance" },
      { easy: "A practiced evacuation procedure that prepares building occupants for emergency escape", medium: "Practiced evacuation procedure for emergency escape", hard: "Evacuation practice", answer: "Fire drill" },
      { easy: "A safety classification system for building materials based on their combustion behavior", medium: "Safety classification for building combustion behavior", hard: "Combustion classification", answer: "Fire rating" }
    ]
  },

  // --- Card 72: WEB ---
  {
    buzzword: "WEB",
    category: "Tech & Internet",
    phrases: [
      { easy: "A system of interlinked documents accessed via browsers on the internet", medium: "Interlinked documents accessed via browsers", hard: "Internet documents", answer: "World Wide Web" },
      { easy: "A program that automatically browses and indexes pages across the internet", medium: "Program that browses and indexes pages", hard: "Indexing program", answer: "Web crawler" },
      { easy: "A person who creates and maintains internet sites and online applications", medium: "Person creating internet sites and applications", hard: "Site creator", answer: "Web developer" },
      { easy: "The address that identifies a specific page on the internet", medium: "Address identifying a specific online page", hard: "Online address", answer: "Web URL" },
      { easy: "A software application that hosts and delivers pages to browsers over HTTP", medium: "Host delivering pages over HTTP", hard: "Page-hosting application", answer: "Web server" },
      { easy: "A browser tool for saving and organizing favorite online destinations", medium: "Browser tool for saving favorite destinations", hard: "Favorite saver", answer: "Web bookmark" },
      { easy: "A storage area in the browser that holds temporary copies of visited pages", medium: "Browser storage holding temporary page copies", hard: "Temporary page storage", answer: "Web cache" },
      { easy: "The visual arrangement and aesthetic styling of pages on the internet", medium: "Visual arrangement of internet pages", hard: "Online layout", answer: "Web design" },
      { easy: "A platform for publishing diary-style entries accessible to the public", medium: "Platform for publishing diary-style entries", hard: "Online journal", answer: "Weblog" },
      { easy: "A lookup platform that helps users find information across the internet", medium: "Lookup platform for finding online information", hard: "Online lookup platform", answer: "Web search" }
    ]
  },

  // --- Card 73: OCEAN ---
  {
    buzzword: "OCEAN",
    category: "Geography",
    phrases: [
      { easy: "The vast body of saltwater between Africa and the Americas", medium: "Saltwater body between Africa and the Americas", hard: "Intercontinental body", answer: "Atlantic Ocean" },
      { easy: "The largest and deepest saltwater body covering the area between Asia and the Americas", medium: "Largest saltwater body between Asia and Americas", hard: "Largest saltwater body", answer: "Pacific Ocean" },
      { easy: "The saltwater body surrounding Antarctica and extending toward Africa and Australia", medium: "Saltwater body surrounding Antarctica", hard: "Antarctic body", answer: "Indian Ocean" },
      { easy: "The frozen saltwater body centered on the North Pole", medium: "Frozen saltwater body at the North Pole", hard: "Polar body", answer: "Arctic Ocean" },
      { easy: "The global system of currents circulating warm and cold water across the planet", medium: "Global system circulating warm and cold water", hard: "Current system", answer: "Ocean conveyor" },
      { easy: "The vast saltwater body that surrounds the Antarctic continent on all sides", medium: "Saltwater body surrounding Antarctica", hard: "Far-south body", answer: "Southern Ocean" },
      { easy: "The average downward extent of the global saltwater bodies approximately 12000 feet", medium: "Average downward extent of global saltwater at 12000 feet", hard: "Downward extent measure", answer: "Ocean depth" },
      { easy: "An underwater crest where tectonic plates are spreading apart on the seafloor", medium: "Underwater crest where plates spread apart", hard: "Underwater crest", answer: "Ocean ridge" },
      { easy: "The top warm layer of saltwater heated by sunlight about 600 feet deep", medium: "Top warm layer heated by sunlight", hard: "Warm top layer", answer: "Ocean surface" },
      { easy: "A vast rotating current system that moves water in a circular pattern", medium: "Vast rotating current moving in a circle", hard: "Rotating current", answer: "Ocean gyre" }
    ]
  },

  // --- Card 74: WHEEL ---
  {
    buzzword: "WHEEL",
    category: "Everyday Idioms",
    phrases: [
      { easy: "The most important person in charge of directing a large organization", medium: "Most important person directing an organization", hard: "Top director", answer: "Big wheel" },
      { easy: "To recreate something that already exists and works perfectly fine", medium: "Recreating something that already works", hard: "Redundant creation", answer: "Reinvent the wheel" },
      { easy: "To negotiate and bargain aggressively to get the best possible outcome in business", medium: "Negotiating and bargaining aggressively for advantage", hard: "Aggressive bargaining", answer: "Wheel and deal" },
      { easy: "A circular control mechanism used to guide the direction of an automobile", medium: "Circular control for guiding vehicle direction", hard: "Directional control", answer: "Steering wheel" },
      { easy: "The rubber and rim assembly that rotates on a vehicle axle", medium: "Rubber and rim rotating on an axle", hard: "Rotating assembly", answer: "Wheel and tire" },
      { easy: "A chair with circular frames used by people who cannot walk", medium: "Chair with frames for non-walking individuals", hard: "Mobility chair", answer: "Wheelchair" },
      { easy: "A single-wheeled handcart used for moving heavy loads in gardens and construction sites", medium: "Single-wheeled handcart for moving heavy loads", hard: "Garden handcart", answer: "Wheelbarrow" },
      { easy: "A mechanism with interlocking teeth that transfers rotational force", medium: "Mechanism with interlocking teeth transferring rotation", hard: "Toothed mechanism", answer: "Wheel gear" },
      { easy: "A large vertical rotating device at a fairground for scenic rides", medium: "Large vertical rotating fairground device", hard: "Fairground rotation", answer: "Ferris wheel" },
      { easy: "To turn rapidly in a different direction often in surprise or anger", medium: "Turning rapidly in a new direction with surprise", hard: "Sudden pivot", answer: "Wheel around" }
    ]
  },

  // --- Card 75: WOLF ---
  {
    buzzword: "WOLF",
    category: "Nature & Weather",
    phrases: [
      { easy: "A person who pretends to be harmless but actually has malicious intent", medium: "Person pretending to be harmless but malicious", hard: "Hidden predator", answer: "Wolf in sheep clothing" },
      { easy: "A person who prefers to be solitary rather than part of a group", medium: "Person preferring solitude over groups", hard: "Solitary person", answer: "Lone wolf" },
      { easy: "To frantically call for help when there is no actual danger until nobody believes you", medium: "Calling for help with no danger until ignored", hard: "False alarm call", answer: "Cry wolf" },
      { easy: "The ancestral wild canine from which domestic dogs descended", medium: "Ancestral wild canine of domestic dogs", hard: "Wild canine ancestor", answer: "Gray wolf" },
      { easy: "A hunting arachnid that chases prey on the ground rather than spinning a web to trap it", medium: "Hunting arachnid that chases prey on the ground", hard: "Ground-hunting arachnid", answer: "Wolf spider" },
      { easy: "A group of wild canines hunting together across tundra and forests", medium: "Wild canines hunting together across tundra", hard: "Hunting canine group", answer: "Wolf pack" },
      { easy: "The long mournful wail of a wild canine on a winter night", medium: "Long mournful wail of a wild canine", hard: "Canine wail", answer: "Wolf howl" },
      { easy: "A large wild canine native to North America and Eurasia forests", medium: "Large wild canine of American and Eurasian forests", hard: "Forest wild canine", answer: "Timber wolf" },
      { easy: "A ravenous appetite that feels impossible to satisfy", medium: "Ravenous appetite impossible to satisfy", hard: "Unsatisfiable appetite", answer: "Wolf hunger" },
      { easy: "A distinctive two-toned sound made to express admiration or attraction to someone passing by", medium: "Two-toned sound expressing attraction to someone", hard: "Two-toned signal", answer: "Wolf whistle" }
    ]
  },

  // --- Card 76: GLASS ---
  {
    buzzword: "GLASS",
    category: "Science & Math",
    phrases: [
      { easy: "A transparent amorphous solid made by cooling molten silica without crystallization", medium: "Transparent solid from cooled molten silica", hard: "Amorphous solid", answer: "Glass formation" },
      { easy: "An enlarging optical instrument used to examine small objects in detail", medium: "Enlarging instrument for examining small objects", hard: "Enlarging instrument", answer: "Magnifying glass" },
      { easy: "The temperature at which an amorphous solid changes from brittle to rubbery", medium: "Temperature where amorphous solid becomes rubbery", hard: "Change temperature", answer: "Glass transition" },
      { easy: "A strong composite material made by embedding reinforced strands in a resin matrix", medium: "Strong composite with reinforced strands in resin", hard: "Reinforced composite", answer: "Fiberglass" },
      { easy: "A curved piece of transparent material that bends light rays to focus or spread an image", medium: "Curved transparent piece that bends light to focus", hard: "Light-bending piece", answer: "Glass lens" },
      { easy: "Thin flat transparent panels used in windows and displays", medium: "Thin flat transparent panels for windows", hard: "Transparent panel", answer: "Glass sheet" },
      { easy: "A decorative art form where molten material is shaped by exhaling through a tube", medium: "Art shaping molten material by exhaling through a tube", hard: "Blown art form", answer: "Glass blowing" },
      { easy: "The invisible limit that prevents certain groups from advancing to top leadership positions", medium: "Barrier preventing advancement to top positions", hard: "Advancement barrier", answer: "Glass ceiling" },
      { easy: "Recycled crushed material used as raw feedstock for new transparent products", medium: "Recycled crushed material for new products", hard: "Recycled feedstock", answer: "Glass recycling" },
      { easy: "A transparent enclosure for keeping small plants warm and protected", medium: "Transparent enclosure protecting small plants", hard: "Plant enclosure", answer: "Glass greenhouse" }
    ]
  },

  // --- Card 77: FLAG ---
  {
    buzzword: "FLAG",
    category: "Geography",
    phrases: [
      { easy: "The Stars and Stripes banner with 50 stars and 13 stripes representing the USA", medium: "Stars and Stripes with 50 stars and 13 stripes", hard: "US banner", answer: "American flag" },
      { easy: "A signal banner with a skull and crossbones flown by pirates at sea", medium: "Skull and crossbones pirate banner", hard: "Pirate banner", answer: "Jolly Roger flag" },
      { easy: "A pale banner symbolizing surrender or a request for truce in battle", medium: "Pale banner symbolizing surrender or truce", hard: "Surrender banner", answer: "White flag" },
      { easy: "The Games banner with five interlocking rings on a white background", medium: "Games banner with five interlocking rings", hard: "Games banner", answer: "Olympic flag" },
      { easy: "A warning signal indicating hazardous ocean conditions at a beach", medium: "Warning signal for hazardous beach conditions", hard: "Beach warning", answer: "Red flag" },
      { easy: "A patterned black and white banner waved at the end of a car race", medium: "Patterned banner ending a car race", hard: "Race-ending banner", answer: "Checkered flag" },
      { easy: "A half-masted banner flown low on a pole to signal mourning or respect", medium: "Banner flown low on a pole for mourning", hard: "Mourning banner", answer: "Half-staff flag" },
      { easy: "The national banner of the United Kingdom combining red white and blue crosses", medium: "UK banner combining red white and blue crosses", hard: "UK banner", answer: "Union Jack flag" },
      { easy: "A rectangular banner with a maple leaf on a red and white background for Canada", medium: "Maple leaf banner on red and white background", hard: "Northern banner", answer: "Canadian flag" },
      { easy: "A warning sign that alerts referees to a rules violation in football", medium: "Warning sign alerting referees to a violation", hard: "Violation alert", answer: "Penalty flag" }
    ]
  },

  // --- Card 78: SONG ---
  {
    buzzword: "SONG",
    category: "Music (2000+)",
    phrases: [
      { easy: "The opening track of a musical album that sets the tone for the whole record", medium: "Opening track setting the tone for an album", hard: "Opening track", answer: "Lead song" },
      { easy: "A track that becomes enormously popular and defines an artist career", medium: "Enormously popular track defining an artist", hard: "Signature track", answer: "Hit song" },
      { easy: "A well-known traditional melody associated with a particular nation or group", medium: "Traditional melody associated with a nation", hard: "National melody", answer: "Folk song" },
      { easy: "A final appearance or performance given just before retirement or departure from a role", medium: "Final performance before retirement or departure", hard: "Final appearance", answer: "Swan song" },
      { easy: "A repeated section of a track that contains the main melody and lyrics", medium: "Repeated section with main melody and lyrics", hard: "Repeated melody", answer: "Song chorus" },
      { easy: "A collaborative track featuring two or more artists performing together", medium: "Collaborative track with multiple artists", hard: "Collaborative track", answer: "Duet song" },
      { easy: "A gentle soothing melody played to help a child fall asleep at bedtime", medium: "Gentle melody to help a child fall asleep", hard: "Bedtime melody", answer: "Lullaby song" },
      { easy: "A track that tops the Billboard charts and receives extensive radio play", medium: "Track topping the Billboard charts", hard: "Chart-topping track", answer: "Number one song" },
      { easy: "The written lyrics and notation that document a musical composition", medium: "Written lyrics and musical notation", hard: "Written composition", answer: "Song sheet" },
      { easy: "A writer who creates lyrics and melodies for recording artists", medium: "Writer creating lyrics and melodies", hard: "Melody writer", answer: "Songwriter" }
    ]
  },

  // --- Card 79: COIN ---
  {
    buzzword: "COIN",
    category: "Everyday Idioms",
    phrases: [
      { easy: "To invent a new word or expression that becomes widely adopted", medium: "Inventing a new widely-adopted word or expression", hard: "Invent an expression", answer: "Coin a phrase" },
      { easy: "Two choices where both options lead to the same outcome", medium: "Two choices leading to the same outcome", hard: "Same outcome choices", answer: "Two sides of the same coin" },
      { easy: "A small pouch with a clasp or zipper used to hold loose change and small items", medium: "Small pouch with a clasp for holding change", hard: "Change pouch", answer: "Coin purse" },
      { easy: "A device that sorts and counts circular currency by denomination", medium: "Device sorting and counting circular currency", hard: "Currency tabulator", answer: "Coin counter" },
      { easy: "A rare or valuable piece of currency sought by collectors and enthusiasts", medium: "Rare valuable piece sought by collectors", hard: "Collector piece", answer: "Coin collection" },
      { easy: "The act of tossing a flat metal disc to decide between two options by which face lands up", medium: "Tossing a flat disc to decide between options", hard: "Toss decision", answer: "Coin flip" },
      { easy: "A vending device that accepts circular currency in exchange for goods", medium: "Vending device accepting circular currency for goods", hard: "Currency vending", answer: "Coin machine" },
      { easy: "A decorative token placed inside a clear acrylic block as a keepsake", medium: "Decorative token in a clear acrylic keepsake block", hard: "Keepsake token", answer: "Coin souvenir" },
      { easy: "A new type of digital currency that operates on blockchain technology", medium: "Digital currency operating on blockchain technology", hard: "Digital currency", answer: "Altcoin" },
      { easy: "To return more money than owed when someone pays with a larger amount", medium: "Returning excess money when overpaid", hard: "Excess return", answer: "Coin change" }
    ]
  },

  // --- Card 80: BLOOD ---
  {
    buzzword: "BLOOD",
    category: "Body & Health",
    phrases: [
      { easy: "A classification system for the different marker proteins found on red fluid cell surfaces", medium: "Classification of marker proteins on red fluid cells", hard: "Marker classification", answer: "Blood type" },
      { easy: "The force exerted by circulating fluid against the walls of arteries", medium: "Force of circulating fluid against artery walls", hard: "Artery tension", answer: "Blood pressure" },
      { easy: "A laboratory analysis that examines the cellular and chemical components of circulating fluid", medium: "Lab analysis examining circulating fluid components", hard: "Fluid analysis", answer: "Blood test" },
      { easy: "A hereditary substance that determines the compatibility of transfusions between people", medium: "Hereditary substance determining transfusion compatibility", hard: "Transfusion marker", answer: "Blood group" },
      { easy: "A drainage of circulating red fluid from the body due to injury or surgery", medium: "Drainage of circulating red fluid from injury", hard: "Fluid drainage", answer: "Blood loss" },
      { easy: "Cells in the circulating fluid that clump together to form clots and stop bleeding", medium: "Cells forming clots to stop bleeding", hard: "Clotting cells", answer: "Blood platelet" },
      { easy: "A gift of red fluid given voluntarily to help patients in hospitals", medium: "Voluntary red fluid gift for hospital patients", hard: "Fluid contribution", answer: "Blood donation" },
      { easy: "An inherited condition causing red fluid corpuscles to deform into a crescent shape", medium: "Inherited condition deforming red fluid corpuscles", hard: "Corpuscle deformity", answer: "Blood disorder" },
      { easy: "The protein in red fluid corpuscles responsible for transporting oxygen throughout the body", medium: "Protein transporting oxygen in red fluid corpuscles", hard: "Oxygen carrier", answer: "Blood cell" },
      { easy: "A tubular structure that carries circulating red fluid throughout the body to deliver oxygen", medium: "Tubular structure carrying red fluid throughout the body", hard: "Circulation tube", answer: "Blood vessel" }
    ]
  },

  // --- Card 81: STAR ---
  {
    buzzword: "STAR",
    category: "Science & Math",
    phrases: [
      { easy: "The process by which dense clouds of gas and dust collapse under gravity to create new luminous bodies", medium: "Process of gas clouds collapsing under gravity to create luminous bodies", hard: "Luminous-body creation", answer: "Star formation" },
      { easy: "The closest stellar object to Earth providing heat and daylight", medium: "Closest stellar object providing heat and daylight", hard: "Nearest stellar object", answer: "Sun star" },
      { easy: "A bright fixed point in the night sky used for centuries as a navigational reference for travelers", medium: "Bright fixed point used for navigation in the night sky", hard: "Navigation reference", answer: "Pole star" },
      { easy: "A brief streak of light across the night sky caused by a small space rock burning up in the atmosphere", medium: "Brief streak of light from a space rock burning up", hard: "Atmospheric streak", answer: "Shooting star" },
      { easy: "A group of stellar objects gravitationally bound together in a spiral or elliptical shape", medium: "Gravitationally bound stellar group", hard: "Stellar group", answer: "Star cluster" },
      { easy: "The process where hydrogen fuses into helium releasing enormous energy inside a stellar core", medium: "Hydrogen fusing into helium releasing energy", hard: "Merging process", answer: "Star power" },
      { easy: "A small cool stellar remnant left after a red giant exhausts its nuclear fuel", medium: "Small cool remnant after a red giant exhausts fuel", hard: "Cool remnant", answer: "White dwarf star" },
      { easy: "A rapidly spinning stellar remnant that emits beams of radiation from its poles", medium: "Rapidly spinning remnant emitting radiation beams", hard: "Spinning remnant", answer: "Neutron star" },
      { easy: "A printed or digital map showing the positions and names of celestial bodies in the night sky", medium: "Map showing positions and names of celestial bodies", hard: "Sky map", answer: "Star chart" },
      { easy: "A pattern of stellar objects recognized by astronomers in the night sky", medium: "Pattern of stellar objects in the night sky", hard: "Sky pattern", answer: "Star map" }
    ]
  },

  // --- Card 82: CROWD ---
  {
    buzzword: "CROWD",
    category: "Everyday Idioms",
    phrases: [
      { easy: "The practice of raising funds from a large number of people via the internet", medium: "Raising funds from many people via the internet", hard: "Online fundraising", answer: "Crowdfunding" },
      { easy: "The collective behavior of a large gathering that turns disorderly or destructive", medium: "Disorderly behavior of a large gathering", hard: "Disorderly gathering", answer: "Crowd riot" },
      { easy: "A professional who manages and directs large gatherings at events and venues", medium: "Professional managing large gatherings at events", hard: "Gathering manager", answer: "Crowd control" },
      { easy: "The psychological tendency for people to follow what the majority is doing", medium: "Following what the majority does", hard: "Majority following", answer: "Crowd mentality" },
      { easy: "The number of people attending a sports or entertainment event", medium: "Number of people attending an event", hard: "Attendance number", answer: "Crowd size" },
      { easy: "A feeling of anxiety caused by being in a densely packed public space", medium: "Anxiety from being in a densely packed space", hard: "Dense-space anxiety", answer: "Crowd phobia" },
      { easy: "A technique of gathering information from many contributors to solve a problem", medium: "Gathering information from many to solve a problem", hard: "Mass problem-solving", answer: "Crowdsourcing" },
      { easy: "The pleasant experience of sharing excitement with others at a live event", medium: "Sharing excitement with others at a live event", hard: "Shared excitement", answer: "Crowd energy" },
      { easy: "A spontaneous and energetic collective vocalization from a gathered audience", medium: "Spontaneous vocalization from a gathered audience", hard: "Audience vocalization", answer: "Crowd roar" },
      { easy: "To lie on your back and be passed over the heads of concertgoers across a packed venue", medium: "Being passed over heads of concertgoers at a packed venue", hard: "Concert body-riding", answer: "Crowd surf" }
    ]
  },

  // --- Card 83: PAPER ---
  {
    buzzword: "PAPER",
    category: "Tech & Internet",
    phrases: [
      { easy: "A scholarly manuscript presenting original research submitted to a journal for review", medium: "Scholarly manuscript presenting original research", hard: "Research manuscript", answer: "Paper publication" },
      { easy: "A sequence of documents and records that provide evidence of someone's activities or decisions", medium: "Sequence of documents providing evidence of activities", hard: "Documentary evidence", answer: "Paper trail" },
      { easy: "The removable compartment inside a printer that holds blank sheets ready for printing", medium: "Removable printer compartment holding blank sheets", hard: "Printer sheet holder", answer: "Paper tray" },
      { easy: "A device that cuts physical sheets to precise dimensions for printing", medium: "Device cutting physical sheets to precise dimensions", hard: "Sheet trimmer", answer: "Paper cutter" },
      { easy: "A pre-printed document with blank fields that users fill out to apply or request something", medium: "Pre-printed document with blank fields to complete", hard: "Fill-in document", answer: "Paper form" },
      { easy: "A small bent wire fastener used to hold loose sheets together without piercing them", medium: "Small bent wire fastener holding sheets together", hard: "Wire sheet fastener", answer: "Paper clip" },
      { easy: "A daily or weekly publication containing articles about current events and opinion columns", medium: "Daily or weekly publication with current event articles", hard: "Current-events publication", answer: "Newspaper" },
      { easy: "A folded aircraft made from a single sheet launched by hand for fun", medium: "Folded hand-launched aircraft from a single sheet", hard: "Folded aircraft", answer: "Paper airplane" },
      { easy: "A decorative sheet used for covering gifts and packages", medium: "Decorative sheet for covering gifts", hard: "Covering sheet", answer: "Paper wrap" },
      { easy: "The maximum width of a physical sheet that a printer can handle", medium: "Maximum sheet width a printer can handle", hard: "Printer width", answer: "Paper size" }
    ]
  },

  // --- Card 84: STORM ---
  {
    buzzword: "STORM",
    category: "Nature & Weather",
    phrases: [
      { easy: "An abnormal rise in coastal water level caused by strong winds and low pressure during severe weather", medium: "Abnormal coastal water rise from severe weather winds", hard: "Coastal water rise", answer: "Storm surge" },
      { easy: "An underground shelter built near a house to provide protection from violent weather events", medium: "Underground shelter for protection from violent weather", hard: "Underground shelter", answer: "Storm cellar" },
      { easy: "A severe electrical disturbance with lightning and heavy precipitation", medium: "Severe electrical disturbance with lightning", hard: "Electrical disturbance", answer: "Thunderstorm" },
      { easy: "A sudden and overwhelming influx of water caused by heavy rainfall", medium: "Overwhelming water influx from heavy rainfall", hard: "Water influx", answer: "Storm drain" },
      { easy: "An outer entrance barrier that provides an additional layer of protection against harsh weather and insulation", medium: "Outer entrance barrier providing protection against harsh weather", hard: "Weather barrier panel", answer: "Storm door" },
      { easy: "A severe winter event with freezing rain and dangerously icy conditions", medium: "Winter event with freezing rain and icy conditions", hard: "Icy event", answer: "Ice storm" },
      { easy: "A large-scale atmospheric disturbance over the open sea with strong winds", medium: "Atmospheric sea disturbance with strong winds", hard: "Marine disturbance", answer: "Storm front" },
      { easy: "A period of intense public outrage or dispute over an issue", medium: "Intense public outrage or dispute", hard: "Public outrage", answer: "Storm of controversy" },
      { easy: "A device that detects electrical discharges in the atmosphere", medium: "Device detecting atmospheric electrical discharges", hard: "Discharge detector", answer: "Storm tracker" },
      { easy: "A protective underground bunker built to withstand severe weather events", medium: "Underground refuge for severe weather", hard: "Underground refuge", answer: "Storm shelter" }
    ]
  },

  // --- Card 85: DIAMOND ---
  {
    buzzword: "DIAMOND",
    category: "Sports & Games",
    phrases: [
      { easy: "The square infield area in the sport with four bases at each corner", medium: "Square sport infield with four bases", hard: "Pastime infield", answer: "Baseball diamond" },
      { easy: "A playing card category marked by a red rhombus shape", medium: "Card category marked by a red rhombus", hard: "Red card category", answer: "Diamond suit" },
      { easy: "The number one position on the Mohs scale of mineral durability", medium: "Number one on the Mohs durability scale", hard: "Hardest mineral", answer: "Diamond hardness" },
      { easy: "A cut gem with 58 facets designed to maximize light reflection and brilliance", medium: "Cut gem with 58 facets for maximum brilliance", hard: "Faceted gem", answer: "Diamond cut" },
      { easy: "A precious clear gemstone given at a marriage proposal or anniversary", medium: "Clear gemstone given at a proposal", hard: "Proposal gemstone", answer: "Diamond ring" },
      { easy: "A method of evaluating a gem based on cut clarity color and carat weight", medium: "Evaluating a gem by cut clarity color and carat", hard: "Gem evaluation", answer: "Diamond grading" },
      { easy: "A mark made on a playing piece in the red rhombus set", medium: "Mark on a playing piece in the red rhombus set", hard: "Red set mark", answer: "Diamond card" },
      { easy: "The narrow elongated form of a rhombus used in design and heraldry", medium: "Narrow elongated rhombus form in design", hard: "Rhombus form", answer: "Diamond shape" },
      { easy: "The process of extracting precious carbon crystals from deep underground mines", medium: "Extracting precious carbon crystals from mines", hard: "Crystal extraction", answer: "Diamond mining" },
      { easy: "An artificial carbon crystal created in a research facility with identical properties", medium: "Research-created carbon crystal with identical properties", hard: "Facility-created crystal", answer: "Diamond lab" }
    ]
  }
];

const CATEGORIES = [...new Set(CARDS.map(c => c.category))];