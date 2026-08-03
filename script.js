// --- S.H.I.E.L.D. DATABASE v2.0 (PYTHON BACKEND READY) ---
// OMDb API KEY
const OMDB_API_KEY = "ef1d0492"; 

// MCU COMPLETE TIMELINE (2026 Edition)
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
            { id: "iron-man-3", title: "Iron Man 3", year: "2013", type: "Movie", meta: "2h 10m", desc: "Tony Stark faces a formidable terrorist called the Mandarin." },
            { id: "thor-2", title: "Thor: The Dark World", year: "2013", type: "Movie", meta: "1h 52m", desc: "Thor must embark on a perilous journey to stop the Dark Elves." },
            { id: "cap-2", title: "Captain America: The Winter Soldier", year: "2014", type: "Movie", meta: "2h 16m", desc: "Steve Rogers battles a new threat: the Winter Soldier." },
            { id: "gotg-1", title: "Guardians of the Galaxy", year: "2014", type: "Movie", meta: "2h 1m", desc: "A group of intergalactic criminals pull together to stop a fanatical warrior." },
            { id: "avengers-2", title: "Avengers: Age of Ultron", year: "2015", type: "Movie", meta: "2h 21m", desc: "The Avengers must stop the villainous artificial intelligence, Ultron." },
            { id: "ant-man-1", title: "Ant-Man", year: "2015", type: "Movie", meta: "1h 57m", desc: "Cat burglar Scott Lang uses a shrinking suit to become a hero." }
        ]
    },
    {
        phase: "Phase 3: The Infinity Saga",
        items: [
            { id: "cap-3", title: "Captain America: Civil War", year: "2016", type: "Movie", meta: "2h 27m", desc: "Political involvement causes a rift between Captain America and Iron Man." },
            { id: "strange-1", title: "Doctor Strange", year: "2016", type: "Movie", meta: "1h 55m", desc: "A brilliant neurosurgeon is drawn into the world of the mystic arts." },
            { id: "gotg-2", title: "Guardians of the Galaxy Vol. 2", year: "2017", type: "Movie", meta: "2h 16m", desc: "The Guardians struggle to keep together while exploring Star-Lord's parentage." },
            { id: "spidey-1", title: "Spider-Man: Homecoming", year: "2017", type: "Movie", meta: "2h 13m", desc: "Peter Parker balances high school with his superhero alter-ego." },
            { id: "thor-3", title: "Thor: Ragnarok", year: "2017", type: "Movie", meta: "2h 10m", desc: "Thor races against time to stop Hela and the destruction of Asgard." },
            { id: "panther-1", title: "Black Panther", year: "2018", type: "Movie", meta: "2h 14m", desc: "T'Challa must step forward to lead his people and protect Wakanda." },
            { id: "avengers-3", title: "Avengers: Infinity War", year: "2018", type: "Movie", meta: "2h 29m", desc: "The Avengers attempt to stop Thanos from collecting the Infinity Stones." },
            { id: "ant-man-2", title: "Ant-Man and the Wasp", year: "2018", type: "Movie", meta: "1h 58m", desc: "Scott Lang and Hope van Dyne embark on an urgent new mission." },
            { id: "marvel-1", title: "Captain Marvel", year: "2019", type: "Movie", meta: "2h 3m", desc: "Carol Danvers becomes one of the universe's most powerful heroes." },
            { id: "avengers-4", title: "Avengers: Endgame", year: "2019", type: "Movie", meta: "3h 1m", desc: "The remaining Avengers assemble once more to reverse Thanos' actions." },
            { id: "spidey-2", title: "Spider-Man: Far From Home", year: "2019", type: "Movie", meta: "2h 9m", desc: "Spider-Man takes on new threats during a school trip to Europe." }
        ]
    },
    {
        phase: "Phase 4: The Multiverse Saga",
        items: [
            { id: "wandavision", title: "WandaVision", year: "2021", type: "Series", meta: "9 Episodes", desc: "Wanda and Vision live idealized suburban lives." },
            { id: "falcon-ws", title: "The Falcon and the Winter Soldier", year: "2021", type: "Series", meta: "6 Episodes", desc: "Sam Wilson and Bucky Barnes team up." },
            { id: "loki-1", title: "Loki (Season 1)", year: "2021", type: "Series", meta: "6 Episodes", desc: "Loki is captured by the Time Variance Authority." },
            { id: "widow-1", title: "Black Widow", year: "2021", type: "Movie", meta: "2h 14m", desc: "Natasha Romanoff confronts a dangerous conspiracy." },
            { id: "whatif-1", title: "What If...? (Season 1)", year: "2021", type: "Series", meta: "9 Episodes", desc: "Exploring alternate realities within the multiverse." },
            { id: "shang-chi", title: "Shang-Chi and the Legend of the Ten Rings", year: "2021", type: "Movie", meta: "2h 12m", desc: "Shang-Chi must confront the mysterious Ten Rings." },
            { id: "eternals", title: "Eternals", year: "2021", type: "Movie", meta: "2h 36m", desc: "Immortal beings who shaped Earth's history emerge." },
            { id: "hawkeye", title: "Hawkeye", year: "2021", type: "Series", meta: "6 Episodes", desc: "Clint Barton and Kate Bishop team up." },
            { id: "spidey-3", title: "Spider-Man: No Way Home", year: "2021", type: "Movie", meta: "2h 28m", desc: "Peter Parker asks Doctor Strange for help." },
            { id: "moon-knight", title: "Moon Knight", year: "2022", type: "Series", meta: "6 Episodes", desc: "Steven Grant discovers he shares a body with a mercenary." },
            { id: "strange-2", title: "Doctor Strange in the Multiverse of Madness", year: "2022", type: "Movie", meta: "2h 6m", desc: "Doctor Strange travels across multiverses." },
            { id: "ms-marvel", title: "Ms. Marvel", year: "2022", type: "Series", meta: "6 Episodes", desc: "Kamala Khan struggles to fit in until she gains her own powers." },
            { id: "thor-4", title: "Thor: Love and Thunder", year: "2022", type: "Movie", meta: "1h 59m", desc: "Thor fights Gorr the God Butcher." },
            { id: "groot-1", title: "I Am Groot", year: "2022", type: "Shorts", meta: "10 Episodes", desc: "A series of shorts featuring Baby Groot." },
            { id: "she-hulk", title: "She-Hulk: Attorney at Law", year: "2022", type: "Series", meta: "9 Episodes", desc: "Jennifer Walters navigates life as a lawyer." },
            { id: "werewolf", title: "Werewolf by Night", year: "2022", type: "Special", meta: "52m", desc: "A secret cabal of monster hunters gather." },
            { id: "panther-2", title: "Black Panther: Wakanda Forever", year: "2022", type: "Movie", meta: "2h 41m", desc: "Wakanda fights to protect their home." },
            { id: "gotg-holiday", title: "The Guardians of the Galaxy Holiday Special", year: "2022", type: "Special", meta: "42m", desc: "The Guardians engage in spirited hijinks." }
        ]
    },
    {
        phase: "Phase 5: The Multiverse Saga",
        items: [
            { id: "ant-man-3", title: "Ant-Man and the Wasp: Quantumania", year: "2023", type: "Movie", meta: "2h 4m", desc: "Scott and Hope explore the Quantum Realm." },
            { id: "gotg-3", title: "Guardians of the Galaxy Vol. 3", year: "2023", type: "Movie", meta: "2h 30m", desc: "Peter Quill rallies his team." },
            { id: "secret-invasion", title: "Secret Invasion", year: "2023", type: "Series", meta: "6 Episodes", desc: "Nick Fury uncovers a conspiracy." },
            { id: "loki-2", title: "Loki (Season 2)", year: "2023", type: "Series", meta: "6 Episodes", desc: "Loki tries to save the collapsing multiverse." },
            { id: "marvels", title: "The Marvels", year: "2023", type: "Movie", meta: "1h 45m", desc: "Carol, Kamala, and Monica are forced to work together." },
            { id: "whatif-2", title: "What If...? (Season 2)", year: "2023", type: "Series", meta: "9 Episodes", desc: "The Watcher continues to explore the multiverse." },
            { id: "echo", title: "Echo", year: "2024", type: "Series", meta: "5 Episodes", desc: "Maya Lopez reconnects with her roots." },
            { id: "deadpool-3", title: "Deadpool & Wolverine", year: "2024", type: "Movie", meta: "2h 7m", desc: "Deadpool teams up with Wolverine to save his universe." },
            { id: "agatha", title: "Agatha All Along", year: "2024", type: "Series", meta: "9 Episodes", desc: "Agatha Harkness embarks on a dangerous quest." },
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
            { id: "spider-man-4", title: "Spider-Man: Brand New Day", year: "2026", type: "Movie", meta: "2h 28m", desc: "Peter Parker's next chapter after everyone forgot who he is." },
            { id: "avengers-doomsday", title: "Avengers: Doomsday", year: "2026", type: "Movie", meta: "2h 35m", desc: "The Avengers face off against a massive new threat: Doctor Doom." },
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

// State Variables
let savedProgress = JSON.parse(localStorage.getItem("mcuProgress")) || {};
const imageCache = {}; 
let progressChart;
let currentMode = 'timeline'; 
let activeMovieData = null;

// DOM Elements
const trackerContainer = document.getElementById('tracker-container');
const watchedCountEl = document.getElementById('watched-count');
const remainingCountEl = document.getElementById('remaining-count');
const progressFill = document.getElementById('progress-fill');
const searchBar = document.getElementById('search-bar');
const themeToggle = document.getElementById('theme-toggle');
const thanosSnapBtn = document.getElementById('thanos-snap');
const spoilerText = document.getElementById('active-desc');

// Tabs
const btnTimeline = document.getElementById('sort-timeline');
const btnRelease = document.getElementById('sort-release');
const btnWatchlist = document.getElementById('filter-watchlist');
const btnUpcoming = document.getElementById('filter-upcoming');

// Modals
const watchTrailerBtn = document.getElementById('watch-trailer-btn');
const trailerModal = document.getElementById('trailer-modal');
const closeTrailerBtn = document.getElementById('close-modal');
const iframeContainer = document.getElementById('iframe-container');

// NEW: Python Feature Elements
const newsTicker = document.getElementById('live-news-ticker');
const syncBtn = document.getElementById('sync-btn');
const analyticsBtn = document.getElementById('analytics-btn');
const comicBtn = document.getElementById('comic-recommender-btn');
const dataModal = document.getElementById('data-modal');
const closeDataBtn = document.getElementById('close-data-modal');
const dataModalTitle = document.getElementById('data-modal-title');
const dataModalBody = document.getElementById('data-modal-body');

// ---------------------------------------------------
// PYTHON SIMULATION MODULES (To be replaced by APIs)
// ---------------------------------------------------

// 1. Live Web-Scraped News (Simulation)
const simulatedNews = [
    "🕷️ RUMOR: Tom Holland spotted on set for Spider-Man: Brand New Day...",
    "📈 BOX OFFICE: Avengers: Doomsday shatters opening weekend records!",
    "🎬 LEAK: Fantastic Four post-credit scene hints at Galactus arrival...",
    "🤖 UPDATE: Python web scraper initialized successfully.",
    "🦸‍♂️ CASTING: New X-Men casting rumors surface on Reddit..."
];
let newsIndex = 0;
setInterval(() => {
    newsTicker.innerText = simulatedNews[newsIndex];
    newsIndex = (newsIndex + 1) % simulatedNews.length;
}, 5000);

// 2. Auto Sync / Broken Link Checker (Simulation)
syncBtn.addEventListener('click', () => {
    syncBtn.innerText = "🔄 Syncing...";
    setTimeout(() => {
        alert("Python Sync Complete:\n- 85 Database Links Verified\n- 3 Missing Posters Auto-Updated\n- Latest Box Office Data Pulled from APIs.");
        syncBtn.innerText = "✅ DB Synced";
        setTimeout(() => syncBtn.innerText = "🔄 Sync DB", 3000);
    }, 2000);
});

// 3. Analytics Dashboard (Simulation)
analyticsBtn.addEventListener('click', () => {
    dataModalTitle.innerText = "S.H.I.E.L.D. Global Analytics [Python Pandas]";
    dataModalBody.innerHTML = `
        <div style="background: rgba(0,0,0,0.1); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h3>📈 Phase Box Office Comparison</h3>
            <p>Phase 3 generated $13.5B compared to Phase 4's $5.7B. <em>(Simulated output from Python Matplotlib)</em></p>
        </div>
        <div style="background: rgba(0,0,0,0.1); padding: 15px; border-radius: 8px;">
            <h3>😊 Overall Fan Sentiment</h3>
            <p>Based on Reddit/Twitter scrape: 72% Positive | 18% Mixed | 10% Negative</p>
        </div>
    `;
    dataModal.style.display = 'flex';
});

// 4. ML Comic Recommender (Simulation)
comicBtn.addEventListener('click', () => {
    if (!activeMovieData) return;
    dataModalTitle.innerText = `Machine Learning Comic Match: ${activeMovieData.title}`;
    dataModalBody.innerHTML = `
        <p>Analyzing file characteristics via Scikit-Learn...</p>
        <ul style="margin-top: 15px; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>Match 1 (94% Accuracy):</strong> Read the original comic run from 1984 based on this plotline.</li>
            <li style="margin-bottom: 10px;"><strong>Match 2 (88% Accuracy):</strong> A modern graphic novel interpretation of these characters.</li>
        </ul>
        <p style="margin-top: 20px; font-size: 12px; color: var(--marvel-red);">*Actual Python ML model implementation pending Level 3 setup.</p>
    `;
    dataModal.style.display = 'flex';
});

// Close Data Modal
closeDataBtn.addEventListener('click', () => dataModal.style.display = 'none');


// ---------------------------------------------------
// CORE APP LOGIC
// ---------------------------------------------------

// Chart Initialization
function initChart(watched, pending) {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    
    if (progressChart) progressChart.destroy();
    progressChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Cleared', 'Pending'],
            datasets: [{
                data: [watched, pending],
                backgroundColor: ['#d32f2f', '#cccccc'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

// Rendering Function
function loadMovies(filterText = '') {
    trackerContainer.innerHTML = '';
    
    let globalWatched = 0;
    let globalTotal = 0;
    mcuData.forEach(phase => {
        phase.items.forEach(item => {
            if (item.meta !== "Upcoming" && item.year !== "TBA") {
                globalTotal++;
                if (savedProgress[item.id]) globalWatched++;
            }
        });
    });

    if (currentMode === 'timeline') {
        mcuData.forEach(phase => {
            const filteredItems = phase.items.filter(item => 
                item.title.toLowerCase().includes(filterText.toLowerCase()) &&
                item.meta !== "Upcoming" && 
                item.year !== "TBA"
            );
            if (filteredItems.length > 0) renderSection(phase.phase, filteredItems);
        });
    } else {
        let allItems = [];
        mcuData.forEach(phase => allItems.push(...phase.items));

        if (currentMode === 'watchlist') {
            allItems = allItems.filter(item => !savedProgress[item.id] && item.meta !== "Upcoming" && item.year !== "TBA");
        } else if (currentMode === 'release') {
            allItems = allItems.filter(item => item.meta !== "Upcoming" && item.year !== "TBA");
            allItems.sort((a, b) => {
                let yearA = parseInt(a.year) || 9999;
                let yearB = parseInt(b.year) || 9999;
                return yearA - yearB;
            });
        } else if (currentMode === 'upcoming') {
            allItems = allItems.filter(item => item.meta === "Upcoming" || item.year === "TBA");
        }

        allItems = allItems.filter(item => 
            item.title.toLowerCase().includes(filterText.toLowerCase())
        );

        if (allItems.length > 0) {
            let sectionTitle = "All Projects (Release Order)";
            if (currentMode === 'watchlist') sectionTitle = "My Watchlist (Pending Files)";
            if (currentMode === 'upcoming') sectionTitle = "Upcoming Projects (Classified)";
            
            renderSection(sectionTitle, allItems);
        } else {
            trackerContainer.innerHTML = '<p style="padding: 20px; font-family: monospace;">No files found.</p>';
        }
    }

    updateStats(globalWatched, globalTotal - globalWatched);
}

// Render DOM Sections
function renderSection(titleText, items) {
    const section = document.createElement("section");
    section.className = "phase-section";
    
    const title = document.createElement("h2");
    title.className = "phase-title";
    title.textContent = titleText;
    section.appendChild(title);

    const list = document.createElement("ul");
    list.className = "movie-list";

    items.forEach(item => {
        const isWatched = savedProgress[item.id] === true;
        const li = document.createElement("li");
        li.className = `movie-item ${isWatched ? "watched" : ""}`;
        
        li.innerHTML = `
            <input type="checkbox" id="${item.id}" ${isWatched ? "checked" : ""}>
            <label class="movie-label" for="${item.id}">${item.title} (${item.year})</label>
        `;

        const checkbox = li.querySelector("input");
        checkbox.addEventListener("change", (e) => {
            savedProgress[item.id] = e.target.checked;
            localStorage.setItem("mcuProgress", JSON.stringify(savedProgress));
            
            e.target.checked ? li.classList.add("watched") : li.classList.remove("watched");
            
            if (currentMode === 'watchlist') {
                loadMovies(searchBar.value);
            } else {
                let newWatched = 0;
                let newTotal = 0;
                mcuData.forEach(p => p.items.forEach(i => {
                    if (i.meta !== "Upcoming" && i.year !== "TBA") {
                        newTotal++;
                        if(savedProgress[i.id]) newWatched++;
                    }
                }));
                updateStats(newWatched, newTotal - newWatched);
            }
        });

        li.addEventListener("mouseenter", () => fetchAdvancedData(item));
        list.appendChild(li);
    });

    section.appendChild(list);
    trackerContainer.appendChild(section);
}

// Fetch Advanced Details (OMDb + Python Simulators)
async function fetchAdvancedData(item) {
    activeMovieData = item; // Store active item for ML Recommender
    
    document.getElementById('active-title').innerText = item.title;
    document.getElementById('active-type').innerText = item.type.toUpperCase();
    document.getElementById('active-meta').innerText = `/// DATA: ${item.meta || "CLASSIFIED"} | YEAR: ${item.year}`;
    
    const activePoster = document.getElementById('active-poster');
    activePoster.style.opacity = "0.5";
    activePoster.src = `https://placehold.co/400x600/eef1f5/111111?text=SEARCHING\\nDATABASE...`;

    document.getElementById('active-director').innerText = "Restricted";
    document.getElementById('active-cast').innerText = "Restricted";
    document.getElementById('active-rating').innerText = "N/A";
    spoilerText.innerText = item.desc || "Information restricted by S.H.I.E.L.D.";
    spoilerText.classList.remove('revealed');
    
    // Simulate Python scraping data
    document.getElementById('active-boxoffice').innerText = item.type === "Series" ? "Streaming (Disney+)" : `$${(Math.random() * 800 + 200).toFixed(1)} Million [Simulated]`;
    document.getElementById('active-credits').innerText = Math.floor(Math.random() * 3) + " Scenes [Simulated]";
    document.getElementById('active-sentiment').innerText = `${Math.floor(Math.random() * 30 + 60)}% Positive [Simulated NLP]`;
    
    comicBtn.style.display = 'block';

    watchTrailerBtn.style.display = 'inline-block';
    watchTrailerBtn.onclick = () => {
        if (item.trailerId) {
            trailerModal.style.display = 'flex';
            iframeContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${item.trailerId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        } else {
            const query = encodeURIComponent(item.title + " official trailer marvel");
            window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
        }
    };

    try {
        let cleanTitle = item.title.replace(/\s*\(Season \d+\)\s*/gi, '').replace(/\*/g, '').trim();
        
        if (["Vision Series", "Avengers: Secret Wars", "Blade", "Armor Wars", "Shang-Chi 2", "X-Men"].includes(cleanTitle)) {
            activePoster.src = `https://placehold.co/400x600/eef1f5/d32f2f?text=CLASSIFIED\\n\\nUPCOMING+PROJECT`;
            activePoster.style.opacity = "1";
            return;
        }

        const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(cleanTitle)}`);
        const data = await response.json();
        
        if (data.Response === "True") {
            if (data.Poster && data.Poster !== "N/A") {
                imageCache[item.title] = data.Poster;
                activePoster.src = data.Poster;
            } else {
                activePoster.src = `https://placehold.co/400x600/eef1f5/d32f2f?text=NO+IMAGE\\n\\n${encodeURIComponent(cleanTitle)}`;
            }
            document.getElementById('active-director').innerText = data.Director !== "N/A" ? data.Director : "Unknown";
            document.getElementById('active-cast').innerText = data.Actors !== "N/A" ? data.Actors : "Classified";
            document.getElementById('active-rating').innerText = data.imdbRating !== "N/A" ? data.imdbRating : "N/A";
        } else {
            activePoster.src = `https://placehold.co/400x600/eef1f5/d32f2f?text=CLASSIFIED\\n\\n${encodeURIComponent(cleanTitle)}`;
        }
    } catch (error) {
        console.error("S.H.I.E.L.D. Link Error:", error);
        activePoster.src = `https://placehold.co/400x600/eef1f5/d32f2f?text=OFFLINE\\n\\n${encodeURIComponent(item.title)}`;
    }
    
    activePoster.style.opacity = "1";
}

// Update Header Stats
function updateStats(watched, pending) {
    watchedCountEl.innerText = watched;
    remainingCountEl.innerText = pending;
    
    const total = watched + pending;
    const percentage = total === 0 ? 0 : (watched / total) * 100;
    progressFill.style.width = `${percentage}%`;
    
    initChart(watched, pending);
}

// Interactive Event Listeners
function closeTrailer() {
    trailerModal.style.display = 'none';
    iframeContainer.innerHTML = ''; 
}
closeTrailerBtn.addEventListener('click', closeTrailer);
window.addEventListener('click', (e) => {
    if (e.target === trailerModal) closeTrailer();
    if (e.target === dataModal) dataModal.style.display = 'none';
});

// Tab Switching
function updateTabStyles(activeBtn) {
    [btnTimeline, btnRelease, btnWatchlist, btnUpcoming].forEach(btn => {
        if (btn) btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

btnTimeline.addEventListener('click', () => { currentMode = 'timeline'; updateTabStyles(btnTimeline); loadMovies(searchBar.value); });
btnRelease.addEventListener('click', () => { currentMode = 'release'; updateTabStyles(btnRelease); loadMovies(searchBar.value); });
btnWatchlist.addEventListener('click', () => { currentMode = 'watchlist'; updateTabStyles(btnWatchlist); loadMovies(searchBar.value); });

if (btnUpcoming) {
    btnUpcoming.addEventListener('click', () => { currentMode = 'upcoming'; updateTabStyles(btnUpcoming); loadMovies(searchBar.value); });
}

searchBar.addEventListener('input', (e) => loadMovies(e.target.value));
spoilerText.addEventListener('click', () => spoilerText.classList.toggle('revealed'));

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.innerText = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

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

// Initialize on Load
loadMovies();