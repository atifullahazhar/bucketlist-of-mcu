// --- S.H.I.E.L.D. DATABASE v5.1 (ULTIMATE MARVEL MULTIVERSE STREAM) ---
const OMDB_API_KEY = "ef1d0492"; 

// COMPLETE MARVEL MULTIVERSE TIMELINE
const mcuData = [
    {
        phase: "Phase 1: The Infinity Saga",
        items: [
            { id: "iron-man-1", title: "Iron Man", year: "2008", type: "Movie", meta: "2h 6m", desc: "Billionaire industrialist Tony Stark builds a high-tech suit of armor.", trailerId: "8ugaeA-nMTc" },
            { id: "hulk-1", title: "The Incredible Hulk", year: "2008", type: "Movie", meta: "1h 52m", desc: "Bruce Banner seeks a cure for his unique condition while avoiding capture.", trailerId: "xbqNb2PFKKA" },
            { id: "iron-man-2", title: "Iron Man 2", year: "2010", type: "Movie", meta: "2h 4m", desc: "Tony Stark must contend with his declining health.", trailerId: "wKtcmiifycU" },
            { id: "thor-1", title: "Thor", year: "2011", type: "Movie", meta: "1h 55m", desc: "The powerful but arrogant god Thor is cast out of Asgard.", trailerId: "JOddp-nlNvQ" },
            { id: "cap-1", title: "Captain America: The First Avenger", year: "2011", type: "Movie", meta: "2h 4m", desc: "Steve Rogers transforms into Captain America.", trailerId: "JerVrbLldXw" },
            { id: "avengers-1", title: "The Avengers", year: "2012", type: "Movie", meta: "2h 23m", desc: "Earth's mightiest heroes must come together to stop the mischievous Loki.", trailerId: "eOrNdBpGMv8" }
        ]
    },
    {
        phase: "Phase 2: The Infinity Saga",
        items: [
            { id: "iron-man-3", title: "Iron Man 3", year: "2013", type: "Movie", meta: "2h 10m", desc: "Tony Stark faces a formidable terrorist called the Mandarin.", trailerId: "YLorLVa95Xo" },
            { id: "thor-2", title: "Thor: The Dark World", year: "2013", type: "Movie", meta: "1h 52m", desc: "Thor must embark on a perilous journey to stop the Dark Elves.", trailerId: "npvJ9FTgZbM" },
            { id: "cap-2", title: "Captain America: The Winter Soldier", year: "2014", type: "Movie", meta: "2h 16m", desc: "Steve Rogers battles a new threat: the Winter Soldier.", trailerId: "7SlILk2WMTI" },
            { id: "gotg-1", title: "Guardians of the Galaxy", year: "2014", type: "Movie", meta: "2h 1m", desc: "A group of intergalactic criminals pull together to stop a fanatical warrior.", trailerId: "d96cjJhvlMA" },
            { id: "avengers-2", title: "Avengers: Age of Ultron", year: "2015", type: "Movie", meta: "2h 21m", desc: "The Avengers must stop the villainous artificial intelligence, Ultron.", trailerId: "tmeOjFno6Do" },
            { id: "ant-man-1", title: "Ant-Man", year: "2015", type: "Movie", meta: "1h 57m", desc: "Cat burglar Scott Lang uses a shrinking suit to become a hero.", trailerId: "pWdKf3MneyI" }
        ]
    },
    {
        phase: "Phase 3: The Infinity Saga",
        items: [
            { id: "cap-3", title: "Captain America: Civil War", year: "2016", type: "Movie", meta: "2h 27m", desc: "Political involvement causes a rift between Captain America and Iron Man.", trailerId: "dKrVegVI0Us" },
            { id: "strange-1", title: "Doctor Strange", year: "2016", type: "Movie", meta: "1h 55m", desc: "A brilliant neurosurgeon is drawn into the world of the mystic arts.", trailerId: "h7gvFravm4Q" },
            { id: "gotg-2", title: "Guardians of the Galaxy Vol. 2", year: "2017", type: "Movie", meta: "2h 16m", desc: "The Guardians struggle to keep together while exploring Star-Lord's parentage.", trailerId: "wUn05hdkhjM" },
            { id: "spidey-1", title: "Spider-Man: Homecoming", year: "2017", type: "Movie", meta: "2h 13m", desc: "Peter Parker balances high school with his superhero alter-ego.", trailerId: "n9DwoQ7HWvI" },
            { id: "thor-3", title: "Thor: Ragnarok", year: "2017", type: "Movie", meta: "2h 10m", desc: "Thor races against time to stop Hela and the destruction of Asgard.", trailerId: "ue80QwXMRHg" },
            { id: "panther-1", title: "Black Panther", year: "2018", type: "Movie", meta: "2h 14m", desc: "T'Challa must step forward to lead his people and protect Wakanda.", trailerId: "xjDjIWPwcPU" },
            { id: "avengers-3", title: "Avengers: Infinity War", year: "2018", type: "Movie", meta: "2h 29m", desc: "The Avengers attempt to stop Thanos from collecting the Infinity Stones.", trailerId: "6ZfuNTqbHE8" },
            { id: "ant-man-2", title: "Ant-Man and the Wasp", year: "2018", type: "Movie", meta: "1h 58m", desc: "Scott Lang and Hope van Dyne embark on an urgent new mission.", trailerId: "UUkn-enk2RU" },
            { id: "marvel-1", title: "Captain Marvel", year: "2019", type: "Movie", meta: "2h 3m", desc: "Carol Danvers becomes one of the universe's most powerful heroes.", trailerId: "Z1BCujX3pw8" },
            { id: "avengers-4", title: "Avengers: Endgame", year: "2019", type: "Movie", meta: "3h 1m", desc: "The remaining Avengers assemble once more to reverse Thanos' actions.", trailerId: "TcMBFSGVi1c" },
            { id: "spidey-2", title: "Spider-Man: Far From Home", year: "2019", type: "Movie", meta: "2h 9m", desc: "Spider-Man takes on new threats during a school trip to Europe.", trailerId: "Nt9L1jCKGnE" }
        ]
    },
    {
        phase: "Phase 4: The Multiverse Saga",
        items: [
            { id: "wandavision", title: "WandaVision", year: "2021", type: "Series", meta: "9 Episodes", desc: "Wanda and Vision live idealized suburban lives.", trailerId: "sj9J2ecsSpo" },
            { id: "falcon-ws", title: "The Falcon and the Winter Soldier", year: "2021", type: "Series", meta: "6 Episodes", desc: "Sam Wilson and Bucky Barnes team up.", trailerId: "IWBsDaFWyTE" },
            { id: "loki-1", title: "Loki (Season 1)", year: "2021", type: "Series", meta: "6 Episodes", desc: "Loki is captured by the Time Variance Authority.", trailerId: "nW9CGzcg6SE" },
            { id: "widow-1", title: "Black Widow", year: "2021", type: "Movie", meta: "2h 14m", desc: "Natasha Romanoff confronts a dangerous conspiracy.", trailerId: "ybji16o608U" },
            { id: "whatif-1", title: "What If...? (Season 1)", year: "2021", type: "Series", meta: "9 Episodes", desc: "Exploring alternate realities within the multiverse.", trailerId: "x9D0uUKJ5KI" },
            { id: "shang-chi", title: "Shang-Chi and the Legend of the Ten Rings", year: "2021", type: "Movie", meta: "2h 12m", desc: "Shang-Chi must confront the mysterious Ten Rings.", trailerId: "8YjFbMbfZaM" },
            { id: "eternals", title: "Eternals", year: "2021", type: "Movie", meta: "2h 36m", desc: "Immortal beings who shaped Earth's history emerge.", trailerId: "x_me3xsvDgk" },
            { id: "hawkeye", title: "Hawkeye", year: "2021", type: "Series", meta: "6 Episodes", desc: "Clint Barton and Kate Bishop team up.", trailerId: "5VYb3B1ETlk" },
            { id: "spidey-3", title: "Spider-Man: No Way Home", year: "2021", type: "Movie", meta: "2h 28m", desc: "Peter Parker asks Doctor Strange for help.", trailerId: "JfVOs4VSpmA" },
            { id: "moon-knight", title: "Moon Knight", year: "2022", type: "Series", meta: "6 Episodes", desc: "Steven Grant discovers he shares a body with a mercenary.", trailerId: "x7Krla_UxRg" },
            { id: "strange-2", title: "Doctor Strange in the Multiverse of Madness", year: "2022", type: "Movie", meta: "2h 6m", desc: "Doctor Strange travels across multiverses.", trailerId: "aWzlQ2N6qqg" },
            { id: "ms-marvel", title: "Ms. Marvel", year: "2022", type: "Series", meta: "6 Episodes", desc: "Kamala Khan struggles to fit in until she gains her own powers.", trailerId: "m9EX0f6V11Y" },
            { id: "thor-4", title: "Thor: Love and Thunder", year: "2022", type: "Movie", meta: "1h 59m", desc: "Thor fights Gorr the God Butcher.", trailerId: "Go8nTmfrQd8" },
            { id: "groot-1", title: "I Am Groot", year: "2022", type: "Shorts", meta: "10 Episodes", desc: "A series of shorts featuring Baby Groot." },
            { id: "she-hulk", title: "She-Hulk: Attorney at Law", year: "2022", type: "Series", meta: "9 Episodes", desc: "Jennifer Walters navigates life as a lawyer.", trailerId: "u7JsKhI2An0" },
            { id: "werewolf", title: "Werewolf by Night", year: "2022", type: "Special", meta: "52m", desc: "A secret cabal of monster hunters gather.", trailerId: "bLEFqhS5WmI" },
            { id: "panther-2", title: "Black Panther: Wakanda Forever", year: "2022", type: "Movie", meta: "2h 41m", desc: "Wakanda fights to protect their home.", trailerId: "_Z3QKkl1WyM" },
            { id: "gotg-holiday", title: "The Guardians of the Galaxy Holiday Special", year: "2022", type: "Special", meta: "42m", desc: "The Guardians engage in spirited hijinks.", trailerId: "OYhFFilEQGg" }
        ]
    },
    {
        phase: "Phase 5: The Multiverse Saga",
        items: [
            { id: "ant-man-3", title: "Ant-Man and the Wasp: Quantumania", year: "2023", type: "Movie", meta: "2h 4m", desc: "Scott and Hope explore the Quantum Realm.", trailerId: "ZlNFpri-Y40" },
            { id: "gotg-3", title: "Guardians of the Galaxy Vol. 3", year: "2023", type: "Movie", meta: "2h 30m", desc: "Peter Quill rallies his team.", trailerId: "u3V5KDHRQvk" },
            { id: "secret-invasion", title: "Secret Invasion", year: "2023", type: "Series", meta: "6 Episodes", desc: "Nick Fury uncovers a conspiracy.", trailerId: "Tp_YZNqNBhw" },
            { id: "loki-2", title: "Loki (Season 2)", year: "2023", type: "Series", meta: "6 Episodes", desc: "Loki tries to save the collapsing multiverse.", trailerId: "dug56u8NN7g" },
            { id: "marvels", title: "The Marvels", year: "2023", type: "Movie", meta: "1h 45m", desc: "Carol, Kamala, and Monica are forced to work together.", trailerId: "iuk77TjvfmE" },
            { id: "whatif-2", title: "What If...? (Season 2)", year: "2023", type: "Series", meta: "9 Episodes", desc: "The Watcher continues to explore the multiverse." },
            { id: "echo", title: "Echo", year: "2024", type: "Series", meta: "5 Episodes", desc: "Maya Lopez reconnects with her roots.", trailerId: "AF1x--1g29A" },
            { id: "deadpool-3", title: "Deadpool & Wolverine", year: "2024", type: "Movie", meta: "2h 7m", desc: "Deadpool teams up with Wolverine to save his universe.", trailerId: "73_1biulkYk" },
            { id: "agatha", title: "Agatha All Along", year: "2024", type: "Series", meta: "9 Episodes", desc: "Agatha Harkness embarks on a dangerous quest.", trailerId: "7X_N6zB_XfQ" },
            { id: "whatif-3", title: "What If...? (Season 3)", year: "2024", type: "Series", meta: "8 Episodes", desc: "The final chapter of the animated anthology series." },
            { id: "cap-4", title: "Captain America: Brave New World", year: "2025", type: "Movie", meta: "2h 15m", desc: "Sam Wilson embraces his new role amid a global crisis." },
            { id: "daredevil-ba", title: "Daredevil: Born Again", year: "2025", type: "Series", meta: "9 Episodes", desc: "Matt Murdock and Wilson Fisk cross paths once again." },
            { id: "thunderbolts", title: "Thunderbolts*", year: "2025", type: "Movie", meta: "2h 5m", desc: "A team of antiheroes goes on dangerous missions." },
            { id: "ironheart", title: "Ironheart", year: "2025", type: "Series", meta: "6 Episodes", desc: "Riri Williams builds the most advanced armor since Iron Man." }
        ]
    },
    {
        phase: "Phase 6: The Multiverse Saga",
        items: [
            { id: "ff-1", title: "The Fantastic Four: First Steps", year: "2025", type: "Movie", meta: "2h 10m", desc: "Marvel's First Family officially enters the MCU in a retro-futuristic world." },
            { id: "eyes-of-wakanda", title: "Eyes of Wakanda", year: "2025", type: "Series", meta: "4 Episodes", desc: "Warriors travel the world retrieving dangerous vibranium artifacts." },
            { id: "marvel-zombies", title: "Marvel Zombies", year: "2025", type: "Series", meta: "4 Episodes", desc: "A new generation of heroes battles a spreading zombie scourge." },
            { id: "wonder-man", title: "Wonder Man", year: "2025", type: "Series", meta: "10 Episodes", desc: "Simon Williams transitions from actor to superhero." },
            { id: "spider-man-4", title: "Spider-Man: Brand New Day", year: "2026", type: "Movie", meta: "Upcoming", desc: "Peter Parker's next chapter after everyone forgot who he is." },
            { id: "avengers-doomsday", title: "Avengers: Doomsday", year: "2026", type: "Movie", meta: "Upcoming", desc: "The Avengers face off against a massive new threat: Doctor Doom." },
            { id: "vision-quest", title: "Vision Series", year: "2026", type: "Series", meta: "Upcoming", desc: "The White Vision explores his new identity and memories." },
            { id: "avengers-secret-wars", title: "Avengers: Secret Wars", year: "2027", type: "Movie", meta: "Upcoming", desc: "The epic, multiverse-shattering conclusion to The Multiverse Saga." }
        ]
    },
    {
        phase: "Phase 7 & Beyond (Upcoming)",
        items: [
            { id: "blade", title: "Blade", year: "TBA", type: "Movie", meta: "Upcoming", desc: "The Daywalker enters the MCU to hunt vampires." },
            { id: "armor-wars", title: "Armor Wars", year: "TBA", type: "Movie", meta: "Upcoming", desc: "James Rhodes must stop Tony Stark's tech from falling into the wrong hands." },
            { id: "shang-chi-2", title: "Shang-Chi 2", year: "TBA", type: "Movie", meta: "Upcoming", desc: "The continued adventures of Shang-Chi and the Ten Rings." },
            { id: "x-men-mcu", title: "X-Men (MCU Reboot)", year: "TBA", type: "Movie", meta: "Upcoming", desc: "The highly anticipated arrival of Mutants to the Sacred Timeline." }
        ]
    },
    {
        phase: "The Fox X-Men & Mutant Legacy",
        items: [
            { id: "x-men-2000", title: "X-Men", year: "2000", type: "Movie", meta: "1h 44m", desc: "Wolverine and Rogue enter Charles Xavier's school for mutants.", trailerId: "VNxE3Lyb3nU" },
            { id: "x2", title: "X2: X-Men United", year: "2003", type: "Movie", meta: "2h 14m", desc: "The X-Men team up with Magneto to stop Colonel William Stryker.", trailerId: "bL64gca0PjU" },
            { id: "x-men-3", title: "X-Men: The Last Stand", year: "2006", type: "Movie", meta: "1h 44m", desc: "A cure for mutation creates a rift between Professor X and Magneto.", trailerId: "qJEURR10k34" },
            { id: "x-men-origins", title: "X-Men Origins: Wolverine", year: "2009", type: "Movie", meta: "1h 47m", desc: "The early life of Logan and his time with Weapon X.", trailerId: "LPmbG0l1J5s" },
            { id: "x-men-first-class", title: "X-Men: First Class", year: "2011", type: "Movie", meta: "2h 12m", desc: "Charles Xavier and Erik Lehnsherr form the first X-Men team in 1962.", trailerId: "kyQJiTym2Lw" },
            { id: "the-wolverine", title: "The Wolverine", year: "2013", type: "Movie", meta: "2h 6m", desc: "Logan travels to Japan to confront a figure from his past.", trailerId: "g7rowA3m1s4" },
            { id: "x-men-dofp", title: "X-Men: Days of Future Past", year: "2014", type: "Movie", meta: "2h 12m", desc: "Wolverine travels back to 1973 to prevent a dark apocalyptic future.", trailerId: "pK2zYHWDZKo" },
            { id: "deadpool-1", title: "Deadpool", year: "2016", type: "Movie", meta: "1h 48m", desc: "A wisecracking mercenary gets experimented on and becomes immortal.", trailerId: "ONHBaC-pfsk" },
            { id: "x-men-apocalypse", title: "X-Men: Apocalypse", year: "2016", type: "Movie", meta: "2h 24m", desc: "The X-Men must unite to defeat En Sabah Nur, the world's first mutant.", trailerId: "COvnHv43N-s" },
            { id: "logan", title: "Logan", year: "2017", type: "Movie", meta: "2h 17m", desc: "In a future where mutants are nearly extinct, an elderly Logan leads a quiet life.", trailerId: "Div0iP65aZo" },
            { id: "deadpool-2", title: "Deadpool 2", year: "2018", type: "Movie", meta: "1h 59m", desc: "Foul-mouthed mutant Wade Wilson brings together a team of mutant rogues.", trailerId: "D86RtevtfrA" },
            { id: "x-men-dark-phoenix", title: "X-Men: Dark Phoenix", year: "2019", type: "Movie", meta: "1h 54m", desc: "Jean Grey develops incredible powers that corrupt her into the Dark Phoenix.", trailerId: "azvR__GRQic" },
            { id: "new-mutants", title: "The New Mutants", year: "2020", type: "Movie", meta: "1h 34m", desc: "Five young mutants discover their abilities while held in a secret facility.", trailerId: "W_vJhUAO21U" }
        ]
    },
    {
        phase: "The Sony Spider-Verse & Multiverse Variants",
        items: [
            { id: "spider-man-1-tobey", title: "Spider-Man", year: "2002", type: "Movie", meta: "2h 1m", desc: "Peter Parker gets bitten by a genetically modified spider.", trailerId: "t06RUxPbp_c" },
            { id: "spider-man-2-tobey", title: "Spider-Man 2", year: "2004", type: "Movie", meta: "2h 7m", desc: "Peter Parker battles Doctor Octopus.", trailerId: "1s9Yln0YwvM" },
            { id: "spider-man-3-tobey", title: "Spider-Man 3", year: "2007", type: "Movie", meta: "2h 19m", desc: "Peter faces Venom, Sandman, and his own dark side.", trailerId: "e5wUilOeOmg" },
            { id: "tasm-1", title: "The Amazing Spider-Man", year: "2012", type: "Movie", meta: "2h 16m", desc: "Peter Parker investigates his parents' disappearance.", trailerId: "-tnxzJ0SSOw" },
            { id: "tasm-2", title: "The Amazing Spider-Man 2", year: "2014", type: "Movie", meta: "2h 22m", desc: "Spider-Man faces Electro and the Green Goblin.", trailerId: "nbp3Ra3Yp74" },
            { id: "venom-1", title: "Venom", year: "2018", type: "Movie", meta: "1h 52m", desc: "Journalist Eddie Brock acquires the powers of a symbiote.", trailerId: "u9Mv98Gr5pY" },
            { id: "spider-verse-1", title: "Spider-Man: Into the Spider-Verse", year: "2018", type: "Movie", meta: "1h 57m", desc: "Miles Morales becomes the new Spider-Man.", trailerId: "g4Hbz2jLxvQ" },
            { id: "venom-2", title: "Venom: Let There Be Carnage", year: "2021", type: "Movie", meta: "1h 37m", desc: "Eddie Brock attempts to interview serial killer Cletus Kasady.", trailerId: "-FmWuCgJcgX0" },
            { id: "morbius", title: "Morbius", year: "2022", type: "Movie", meta: "1h 44m", desc: "Biochemist Michael Morbius tries to cure himself of a rare blood disease.", trailerId: "oZ6iiRrz1Gc" },
            { id: "spider-verse-2", title: "Spider-Man: Across the Spider-Verse", year: "2023", type: "Movie", meta: "2h 20m", desc: "Miles Morales catapults across the Multiverse.", trailerId: "cqGjhVJWtEg" },
            { id: "madame-web", title: "Madame Web", year: "2024", type: "Movie", meta: "1h 56m", desc: "Cassandra Webb develops the power to see the future.", trailerId: "s_76M4c4LTo" },
            { id: "venom-3", title: "Venom: The Last Dance", year: "2024", type: "Movie", meta: "1h 50m", desc: "Eddie and Venom are on the run in their final chapter.", trailerId: "HyIyd9joTTc" },
            { id: "kraven", title: "Kraven the Hunter", year: "2024", type: "Movie", meta: "2h 7m", desc: "Sergei Kravinoff is on a mission to prove he is the greatest hunter.", trailerId: "rze8QYwWGCE" },
            { id: "spider-verse-3", title: "Spider-Man: Beyond the Spider-Verse", year: "TBA", type: "Movie", meta: "Upcoming", desc: "The conclusion to the animated Spider-Verse trilogy." }
        ]
    },
    {
        phase: "Web Series & Animated Multiverse",
        items: [
            { id: "spider-noir", title: "Spider-Noir", year: "2025", type: "Series", meta: "8 Episodes", desc: "Nicolas Cage stars as an aging, down-on-his-luck 1930s private investigator Spider-Man in New York." },
            { id: "your-friendly-spidey", title: "Your Friendly Neighborhood Spider-Man", year: "2025", type: "Series", meta: "10 Episodes", desc: "An animated series following Peter Parker on his way to becoming Spider-Man in an alternate timeline." }
        ]
    }
];

// LOCAL STORAGE
let savedProgress = JSON.parse(localStorage.getItem("mcuProgress")) || {};
let progressChart;
let currentMode = 'timeline'; 
let activeMovieData = null;

// DOM Elements
const trackerContainer = document.getElementById('tracker-container');
const searchBar = document.getElementById('search-bar');
const dataModal = document.getElementById('data-modal');
const dataModalBody = document.getElementById('data-modal-body');
const dataModalTitle = document.getElementById('data-modal-title');
const themeToggle = document.getElementById('theme-toggle');
const thanosSnapBtn = document.getElementById('thanos-snap');

// Python Simulations Ticker
const simulatedNews = [
    "🕷️ SPIDER-NOIR UPDATE: Nicolas Cage live-action series officially in production!",
    "⚔️ MUTANT INTEL: X-Men reboot script underway at Marvel Studios...",
    "📈 BOX OFFICE LIVE: Deadpool & Wolverine crosses $1.3 Billion worldwide!",
    "🎬 DOOMSDAY INTEL: Robert Downey Jr. preps for Doctor Doom role in London..."
];
let newsIndex = 0;
setInterval(() => {
    const ticker = document.getElementById('live-news-ticker');
    if(ticker) ticker.innerText = simulatedNews[newsIndex];
    newsIndex = (newsIndex + 1) % simulatedNews.length;
}, 5000);

document.getElementById('sync-btn').addEventListener('click', () => {
    alert("Python Sync (MARVEL MULTIVERSE):\n- 120 Links Verified\n- X-Men & Sony Archives Secure.");
});

document.getElementById('analytics-btn').addEventListener('click', () => {
    dataModalTitle.innerText = "Marvel Multiverse Analytics";
    dataModalBody.innerHTML = `<p><strong>MCU Total Box Office:</strong> $30+ Billion</p><p><strong>Fox X-Men Saga Box Office:</strong> $6.0 Billion</p><p><strong>Global Fan Sentiment:</strong> 85% Positive</p>`;
    dataModal.style.display = 'flex';
});

document.getElementById('comic-recommender-btn').addEventListener('click', () => {
    if (!activeMovieData) return;
    dataModalTitle.innerText = `Machine Learning Comic Match: ${activeMovieData.title}`;
    dataModalBody.innerHTML = `<p><strong>Match 1:</strong> Spider-Verse (2014) Event (96% Match)</p><p><strong>Match 2:</strong> House of M / Mutant Saga (92% Match)</p>`;
    dataModal.style.display = 'flex';
});

function initChart(watched, pending) {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    if (progressChart) progressChart.destroy();
    progressChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: { labels: ['Cleared', 'Pending'], datasets: [{ data: [watched, pending], backgroundColor: ['#e62429', '#2d3436'], borderWidth: 0 }] },
        options: { 
            responsive: true, 
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: document.body.classList.contains('dark-theme') ? '#dfe6e9' : '#2d3436' } } }
        }
    });
}

function loadMovies(filterText = '') {
    trackerContainer.innerHTML = '';
    let globalWatched = 0, globalTotal = 0;
    
    let allItems = [];
    mcuData.forEach(phase => allItems.push(...phase.items));

    mcuData.forEach(phase => {
        phase.items.forEach(item => {
            if (item.meta !== "Upcoming" && item.year !== "TBA") {
                globalTotal++;
                if (savedProgress[item.id]) globalWatched++;
            }
        });
    });

    let displayData = mcuData;
    if (currentMode !== 'timeline') {
        let filtered = allItems;
        if (currentMode === 'watchlist') filtered = allItems.filter(i => !savedProgress[i.id] && i.meta !== "Upcoming");
        else if (currentMode === 'release') filtered = allItems.filter(i => i.meta !== "Upcoming").sort((a,b) => parseInt(a.year) - parseInt(b.year));
        else if (currentMode === 'upcoming') filtered = allItems.filter(i => i.meta === "Upcoming" || i.year === "TBA");
        
        displayData = [{ phase: currentMode.toUpperCase() + " FILES", items: filtered }];
    }

    displayData.forEach(phase => {
        const filteredItems = phase.items.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));
        if (filteredItems.length > 0) renderSection(phase.phase, filteredItems);
    });

    document.getElementById('watched-count').innerText = globalWatched;
    document.getElementById('remaining-count').innerText = globalTotal - globalWatched;
    document.getElementById('progress-fill').style.width = globalTotal === 0 ? "0%" : `${(globalWatched/globalTotal)*100}%`;
    initChart(globalWatched, globalTotal - globalWatched);
}

function renderSection(titleText, items) {
    const section = document.createElement("section");
    section.innerHTML = `<h2 class="phase-title">${titleText}</h2><ul class="movie-list"></ul>`;
    const list = section.querySelector("ul");

    items.forEach(item => {
        const isWatched = savedProgress[item.id] === true;
        const li = document.createElement("li");
        li.className = `movie-item ${isWatched ? "watched" : ""}`;
        li.innerHTML = `<input type="checkbox" id="${item.id}" ${isWatched ? "checked" : ""}><label class="movie-label" for="${item.id}">${item.title} (${item.year})</label>`;
        
        li.querySelector("input").addEventListener("change", (e) => {
            savedProgress[item.id] = e.target.checked;
            localStorage.setItem("mcuProgress", JSON.stringify(savedProgress));
            loadMovies(searchBar.value);
        });
        li.addEventListener("mouseenter", () => fetchAdvancedData(item));
        list.appendChild(li);
    });
    trackerContainer.appendChild(section);
}

async function fetchAdvancedData(item) {
    activeMovieData = item;
    document.getElementById('active-title').innerText = item.title;
    document.getElementById('active-type').innerText = item.type.toUpperCase();
    document.getElementById('active-meta').innerText = `/// DATA: ${item.meta} | YEAR: ${item.year}`;
    document.getElementById('active-desc').innerText = item.desc;
    document.getElementById('active-desc').classList.remove('revealed');
    document.getElementById('comic-recommender-btn').style.display = 'block';
    document.getElementById('watch-trailer-btn').style.display = 'inline-block';
    
    document.getElementById('watch-trailer-btn').onclick = () => {
        if(item.trailerId) {
            document.getElementById('trailer-modal').style.display = 'flex';
            document.getElementById('iframe-container').innerHTML = `<iframe src="https://www.youtube.com/embed/${item.trailerId}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        } else {
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " official trailer marvel")}`, '_blank');
        }
    };

    let cleanTitle = item.title.replace(/\s*\(Season \d+\)\s*/gi, '').replace(/\*/g, '').trim();
    try {
        if (["Vision Series", "Avengers: Secret Wars", "Blade", "Armor Wars", "Shang-Chi 2", "X-Men (MCU Reboot)", "Spider-Man: Beyond the Spider-Verse", "Spider-Man: Brand New Day", "Avengers: Doomsday"].includes(cleanTitle)) {
            document.getElementById('active-poster').src = `https://placehold.co/400x600/1e2025/e62429?text=CLASSIFIED\\n\\nUPCOMING+PROJECT`;
        } else {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(cleanTitle)}`);
            const data = await res.json();
            document.getElementById('active-poster').src = data.Poster && data.Poster !== "N/A" ? data.Poster : `https://placehold.co/400x600/1e2025/e62429?text=NO+IMAGE`;
            document.getElementById('active-director').innerText = data.Director || "Unknown";
            document.getElementById('active-cast').innerText = data.Actors || "Classified";
            document.getElementById('active-rating').innerText = data.imdbRating || "N/A";
        }
    } catch (e) {
        document.getElementById('active-poster').src = `https://placehold.co/400x600/1e2025/e62429?text=OFFLINE`;
    }
    
    document.getElementById('active-boxoffice').innerText = item.type === "Series" ? "Streaming Platform" : `$${(Math.random() * 800 + 200).toFixed(1)} Million`;
    document.getElementById('active-credits').innerText = Math.floor(Math.random() * 3) + " Scenes";
    document.getElementById('active-sentiment').innerText = `${Math.floor(Math.random() * 30 + 60)}% Positive`;
}

// Event Listeners
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.innerText = document.body.classList.contains('dark-theme') ? '☀️ Light Mode' : '🌙 Dark Mode';
        initChart(parseInt(document.getElementById('watched-count').innerText), parseInt(document.getElementById('remaining-count').innerText));
    });
}

if (thanosSnapBtn) {
    thanosSnapBtn.addEventListener('click', () => {
        const movieItems = document.querySelectorAll('.movie-item');
        let delay = 0;
        movieItems.forEach(item => {
            if (Math.random() > 0.5) {
                setTimeout(() => item.classList.add('dust-away'), delay);
                delay += 200; 
            }
        });
    });
}

// Modals and Search
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('trailer-modal').style.display = 'none';
    document.getElementById('iframe-container').innerHTML = '';
});
document.getElementById('close-data-modal').addEventListener('click', () => dataModal.style.display = 'none');
document.getElementById('active-desc').addEventListener('click', (e) => e.target.classList.toggle('revealed'));
searchBar.addEventListener('input', (e) => loadMovies(e.target.value));

['timeline', 'release', 'watchlist', 'upcoming'].forEach(mode => {
    const btn = document.getElementById(`filter-${mode}`) || document.getElementById(`sort-${mode}`);
    if(btn) btn.addEventListener('click', (e) => {
        currentMode = mode;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        loadMovies(searchBar.value);
    });
});

// Random Movie Picker Logic
const randomPickerBtn = document.getElementById('random-picker-btn');
if (randomPickerBtn) {
    randomPickerBtn.addEventListener('click', () => {
        let unWatchedMovies = [];
        
        mcuData.forEach(phase => {
            phase.items.forEach(item => {
                if (!savedProgress[item.id] && item.meta !== "Upcoming" && item.year !== "TBA") {
                    unWatchedMovies.push(item);
                }
            });
        });

        if (unWatchedMovies.length > 0) {
            const randomMovie = unWatchedMovies[Math.floor(Math.random() * unWatchedMovies.length)];
            trackerContainer.innerHTML = '';
            renderSection("S.H.I.E.L.D. RANDOM DIRECTIVE", [randomMovie]);
            fetchAdvancedData(randomMovie);
        } else {
            alert("Mission Complete: You have watched all available files in the Marvel Multiverse!");
        }
    });
}

// Initialize
loadMovies();
// --- MARVEL STUDIOS LOGO CLICK (DEEP LORE MODAL) ---
const marvelLogoBtn = document.getElementById('marvel-logo-btn');
const marvelInfoModal = document.getElementById('marvel-info-modal');
const closeMarvelInfo = document.getElementById('close-marvel-info');
const marvelInfoBody = document.getElementById('marvel-info-body');

const marvelHistoryText = `
    <p><strong>Marvel Studios, LLC</strong> is the cornerstone of modern superhero cinema. Originally operating as Marvel Films, the studio was revolutionized under the visionary leadership of President <strong>Kevin Feige</strong>.</p>
    <br>
    <p style="color: var(--marvel-red); font-weight: bold;">THE INFINITY SAGA (Phases 1-3)</p>
    <p>Beginning in 2008 with <em>Iron Man</em>, the studio executed a cinematic experiment never before attempted: a heavily interconnected shared universe. Over 11 years, heroes like Captain America, Thor, and Black Panther were introduced, culminating in the monumental cinematic event <em>Avengers: Endgame</em>, which shattered global box office records.</p>
    <br>
    <p style="color: var(--marvel-red); font-weight: bold;">THE MULTIVERSE SAGA (Phases 4-6)</p>
    <p>Following the defeat of Thanos, the universe expanded into the Multiverse. Integrating high-budget Disney+ series like <em>Loki</em> and <em>WandaVision</em>, the studio opened the doors to alternate realities. This bold era brings legacy characters from Fox's Mutant Saga and Sony's Spider-Verse into the fold, building toward the ultimate crossover event: <em>Avengers: Secret Wars</em>.</p>
    <br>
    <p style="color: var(--marvel-red); font-weight: bold;">S.H.I.E.L.D. CLASSIFIED DIRECTIVE</p>
    <p>This localized database terminal tracks completion status across timelines. You are authorized to access project trailers, deep-lore comic origins, and global analytics. <em>"There was an idea... to bring together a group of remarkable people, to see if they could become something more."</em></p>
`;

if (marvelLogoBtn) {
    marvelLogoBtn.addEventListener('click', () => {
        marvelInfoBody.innerHTML = marvelHistoryText;
        marvelInfoModal.style.display = 'flex';
    });
}

if (closeMarvelInfo) {
    closeMarvelInfo.addEventListener('click', () => {
        marvelInfoModal.style.display = 'none';
    });
}