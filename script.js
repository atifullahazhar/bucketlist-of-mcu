// --- S.H.I.E.L.D. DATABASE v3.0 (MCU COMPLETE STREAM) ---
const OMDB_API_KEY = "ef1d0492"; 

// MCU COMPLETE TIMELINE (No Shortcuts)
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
            { id: "x-men", title: "X-Men", year: "TBA", type: "Movie", meta: "Upcoming", desc: "The highly anticipated arrival of Mutants to the Sacred Timeline." }
        ]
    }
];

// UNIQUE LOCAL STORAGE FOR MARVEL UNIVERSE
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

// Python Simulations (MCU)
const simulatedNews = [
    "🕷️ MCU RUMOR: Tom Holland spotted on set for Spider-Man 4...",
    "📈 MCU BOX OFFICE: Avengers: Doomsday shatters records!",
    "🎬 MCU LEAK: Fantastic Four post-credit scene hints at Galactus..."
];
let newsIndex = 0;
setInterval(() => {
    const ticker = document.getElementById('live-news-ticker');
    if(ticker) ticker.innerText = simulatedNews[newsIndex];
    newsIndex = (newsIndex + 1) % simulatedNews.length;
}, 5000);

document.getElementById('sync-btn').addEventListener('click', () => {
    alert("Python Sync (MCU):\n- 85 Links Verified\n- S.H.I.E.L.D. Database secure.");
});

document.getElementById('analytics-btn').addEventListener('click', () => {
    dataModalTitle.innerText = "MCU Global Analytics";
    dataModalBody.innerHTML = `<p><strong>Phase 3 Box Office:</strong> $13.5 Billion</p><p><strong>Fan Sentiment:</strong> 82% Positive</p>`;
    dataModal.style.display = 'flex';
});

document.getElementById('comic-recommender-btn').addEventListener('click', () => {
    if (!activeMovieData) return;
    dataModalTitle.innerText = `Machine Learning Comic Match: ${activeMovieData.title}`;
    dataModalBody.innerHTML = `<p><strong>Match 1:</strong> Infinity Gauntlet #1-6 (94% Accuracy)</p><p><strong>Match 2:</strong> Secret Wars (88% Accuracy)</p>`;
    dataModal.style.display = 'flex';
});

function initChart(watched, pending) {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    if (progressChart) progressChart.destroy();
    progressChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: { labels: ['Cleared', 'Pending'], datasets: [{ data: [watched, pending], backgroundColor: ['#d32f2f', '#cccccc'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false }
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
        if (["Vision Series", "Avengers: Secret Wars", "Blade", "Armor Wars", "Shang-Chi 2", "X-Men"].includes(cleanTitle)) {
            document.getElementById('active-poster').src = `https://placehold.co/400x600/eef1f5/d32f2f?text=CLASSIFIED\\n\\nUPCOMING+PROJECT`;
        } else {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(cleanTitle)}`);
            const data = await res.json();
            document.getElementById('active-poster').src = data.Poster && data.Poster !== "N/A" ? data.Poster : `https://placehold.co/400x600/eef1f5/d32f2f?text=NO+IMAGE`;
            document.getElementById('active-director').innerText = data.Director || "Unknown";
            document.getElementById('active-cast').innerText = data.Actors || "Classified";
            document.getElementById('active-rating').innerText = data.imdbRating || "N/A";
        }
    } catch (e) {
        document.getElementById('active-poster').src = `https://placehold.co/400x600/eef1f5/d32f2f?text=OFFLINE`;
    }
    
    document.getElementById('active-boxoffice').innerText = item.type === "Series" ? "Streaming (Disney+)" : `$${(Math.random() * 800 + 200).toFixed(1)} Million`;
    document.getElementById('active-credits').innerText = Math.floor(Math.random() * 3) + " Scenes";
    document.getElementById('active-sentiment').innerText = `${Math.floor(Math.random() * 30 + 60)}% Positive`;
}

// Event Listeners for UI Features
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.innerText = document.body.classList.contains('dark-theme') ? '☀️ Light Mode' : '🌙 Dark Mode';
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

// Initialize
loadMovies();