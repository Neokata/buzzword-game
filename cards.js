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
      { easy: "Bright sweeping beam from a lighthouse across the water", medium: "Lighthouse sweep beam", hard: "Coastal beacon", answer: "Searchlight" },
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
      { easy: "Makeup applied to the edges of your eyelids for definition", medium: "Lid-defining cosmetic", hard: "Pencil cosmetic", answer: "Eyeliner" },
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
  }
];

const CATEGORIES = [...new Set(CARDS.map(c => c.category))];