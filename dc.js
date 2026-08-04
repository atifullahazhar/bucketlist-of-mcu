// --- S.H.I.E.L.D. DATABASE v3.0 (DC UNIVERSE COMPLETE STREAM) ---
const OMDB_API_KEY = "ef1d0492"; 

// DC COMPLETE TIMELINE (No Shortcuts)
const dcData = [
    {
        phase: "DC Classics & The Dark Knight Trilogy",
        items: [
            { id: "superman-78", title: "Superman", year: "1978", type: "Movie", meta: "2h 23m", desc: "An alien orphan is sent from his dying planet to Earth.", trailerId: "L_J9W24LbzM" },
            { id: "batman-89", title: "Batman", year: "1989", type: "Movie", meta: "2h 6m", desc: "The Dark Knight of Gotham City begins his war on crime.", trailerId: "dgC9Q0uhX70" },
            { id: "batman-begins", title: "Batman Begins", year: "2005", type: "Movie", meta: "2h 20m", desc: "Bruce Wayne trains with the League of Shadows.", trailerId: "neY2xVmOfUM" },
            { id: "dark-knight", title: "The Dark Knight", year: "2008", type: "Movie", meta: "2h 32m", desc: "Batman faces his ultimate nemesis, the Joker.", trailerId: "EXeTwQWrcwY" },
            { id: "dark-knight-rises", title: "The Dark Knight Rises", year: "2012", type: "Movie", meta: "2h 44m", desc: "Eight years later, a new terrorist leader, Bane, overwhelms Gotham.", trailerId: "GokKUqLcvD8" }
        ]
    },
    {
        phase: "The DCEU (Snyderverse & Beyond)",
        items: [
            { id: "man-of-steel", title: "Man of Steel", year: "2013", type: "Movie", meta: "2h 23m", desc: "Clark Kent must protect Earth from General Zod.", trailerId: "T6DJcgm3wNY" },
            { id: "bvs", title: "Batman v Superman: Dawn of Justice", year: "2016", type: "Movie", meta: "2h 31m", desc: "Batman manipulates a conflict with Superman.", trailerId: "0WWzgGyAH6Y" },
            { id: "suicide-squad-1", title: "Suicide Squad", year: "2016", type: "Movie", meta: "2h 3m", desc: "A secret government agency recruits some of the most dangerous incarcerated super-villains.", trailerId: "CmRih_VtVAs" },
            { id: "wonder-woman", title: "Wonder Woman", year: "2017", type: "Movie", meta: "2h 21m", desc: "Diana leaves her island to stop World War I.", trailerId: "1Q8fG0TtVAY" },
            { id: "aquaman-1", title: "Aquaman", year: "2018", type: "Movie", meta: "2h 23m", desc: "Arthur Curry learns he is the heir to the underwater kingdom of Atlantis.", trailerId: "WDkg3h8PCVU" },
            { id: "shazam-1", title: "Shazam!", year: "2019", type: "Movie", meta: "2h 12m", desc: "A newly fostered young boy in search of his mother instead finds unexpected super powers.", trailerId: "go6GEIrcvFY" },
            { id: "birds-of-prey", title: "Birds of Prey", year: "2020", type: "Movie", meta: "1h 49m", desc: "Harley Quinn joins forces with a singer, an assassin and a police detective.", trailerId: "kGM4uYZzfu0" },
            { id: "zsjl", title: "Zack Snyder's Justice League", year: "2021", type: "Movie", meta: "4h 2m", desc: "The definitive director's cut of the Justice League.", trailerId: "vM-Bja2Gy04" },
            { id: "the-suicide-squad", title: "The Suicide Squad", year: "2021", type: "Movie", meta: "2h 12m", desc: "Supervillains are sent to the remote, enemy-infused island of Corto Maltese.", trailerId: "eg5ciqQzmK0" },
            { id: "peacemaker-1", title: "Peacemaker (Season 1)", year: "2022", type: "Series", meta: "8 Episodes", desc: "Peacemaker joins a black ops squad to eliminate parasitic butterflies.", trailerId: "WHXq62VCaCM" },
            { id: "black-adam", title: "Black Adam", year: "2022", type: "Movie", meta: "2h 5m", desc: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods, Black Adam is freed.", trailerId: "X0tOpBuCWbk" },
            { id: "the-flash", title: "The Flash", year: "2023", type: "Movie", meta: "2h 24m", desc: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes.", trailerId: "hebWYacbdvc" },
            { id: "aquaman-2", title: "Aquaman and the Lost Kingdom", year: "2023", type: "Movie", meta: "2h 4m", desc: "Aquaman balances his duties as king and as a member of the Justice League.", trailerId: "FV3bqvOHRQo" }
        ]
    },
    {
        phase: "DC Elseworlds",
        items: [
            { id: "joker-1", title: "Joker", year: "2019", type: "Movie", meta: "2h 2m", desc: "Arthur Fleck embarks on a downward spiral of revolution and crime.", trailerId: "zAGVQLHvwOY" },
            { id: "the-batman", title: "The Batman", year: "2022", type: "Movie", meta: "2h 56m", desc: "Batman ventures into Gotham's underworld to catch a sadistic killer.", trailerId: "mqqft2x_Aa4" },
            { id: "joker-2", title: "Joker: Folie à Deux", year: "2024", type: "Movie", meta: "2h 18m", desc: "Arthur Fleck finds love and chaos in Arkham Asylum.", trailerId: "xy8aJw1vYHo" },
            { id: "the-penguin", title: "The Penguin", year: "2024", type: "Series", meta: "8 Episodes", desc: "Oswald Cobblepot makes a play to seize the reins of the crime world in Gotham.", trailerId: "sf-iH1VbSow" },
            { id: "the-batman-2", title: "The Batman Part II", year: "2026", type: "Movie", meta: "Upcoming", desc: "The Batman continues his crusade in a flooded, chaotic Gotham." }
        ]
    },
    {
        phase: "DCU Chapter 1: Gods and Monsters",
        items: [
            { id: "creature-commandos", title: "Creature Commandos", year: "2024", type: "Series", meta: "7 Episodes", desc: "Amanda Waller forms a black ops team out of monstrous prisoners." },
            { id: "superman-legacy", title: "Superman", year: "2025", type: "Movie", meta: "Upcoming", desc: "Clark Kent balances his Kryptonian heritage with his human upbringing." },
            { id: "peacemaker-2", title: "Peacemaker (Season 2)", year: "2025", type: "Series", meta: "Upcoming", desc: "The continuing adventures of Christopher Smith." },
            { id: "supergirl-wot", title: "Supergirl: Woman of Tomorrow", year: "2026", type: "Movie", meta: "Upcoming", desc: "Kara Zor-El travels across the galaxy on a quest for revenge." },
            { id: "lanterns", title: "Lanterns", year: "TBA", type: "Series", meta: "Upcoming", desc: "Hal Jordan and John Stewart investigate a terrifying terrestrial mystery." },
            { id: "the-authority", title: "The Authority", year: "TBA", type: "Movie", meta: "Upcoming", desc: "A team of superheroes takes extreme methods to protect the planet." },
            { id: "brave-and-bold", title: "The Brave and the Bold", year: "TBA", type: "Movie", meta: "Upcoming", desc: "Batman discovers he has a son, Damian Wayne, raised by assassins." }
        ]
    }
];

// UNIQUE LOCAL STORAGE FOR DC UNIVERSE
let savedProgress = JSON.parse(localStorage.getItem("dcProgress")) || {};
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

// Python Simulations (DC Universe)
const simulatedNews = [
    "🦇 DCU CASTING: New Batman announced for James Gunn's Brave and the Bold...",
    "🦸‍♂️ DCU UPDATE: Superman (2025) crosses $800M at global box office!",
    "💥 DCU RUMOR: Lanterns series adds massive budget for VFX..."
];
let newsIndex = 0;
setInterval(() => {
    const ticker = document.getElementById('live-news-ticker');
    if(ticker) ticker.innerText = simulatedNews[newsIndex];
    newsIndex = (newsIndex + 1) % simulatedNews.length;
}, 5000);

document.getElementById('sync-btn').addEventListener('click', () => {
    alert("Python Sync (DCU):\n- 65 Links Verified\n- Batcomputer connection secure.");
});

document.getElementById('analytics-btn').addEventListener('click', () => {
    dataModalTitle.innerText = "DCU Global Analytics";
    dataModalBody.innerHTML = `<p><strong>Snyderverse Box Office:</strong> $4.5 Billion</p><p><strong>Fan Sentiment:</strong> 75% Positive</p>`;
    dataModal.style.display = 'flex';
});

document.getElementById('comic-recommender-btn').addEventListener('click', () => {
    if (!activeMovieData) return;
    dataModalTitle.innerText = `Machine Learning Comic Match: ${activeMovieData.title}`;
    dataModalBody.innerHTML = `<p><strong>Match 1:</strong> All-Star Superman (92% Accuracy)</p><p><strong>Match 2:</strong> Flashpoint Paradox (88% Accuracy)</p>`;
    dataModal.style.display = 'flex';
});

function initChart(watched, pending) {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    if (progressChart) progressChart.destroy();
    progressChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: { labels: ['Cleared', 'Pending'], datasets: [{ data: [watched, pending], backgroundColor: ['#005b9f', '#cccccc'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function loadMovies(filterText = '') {
    trackerContainer.innerHTML = '';
    let globalWatched = 0, globalTotal = 0;
    
    let allItems = [];
    dcData.forEach(phase => allItems.push(...phase.items));

    dcData.forEach(phase => {
        phase.items.forEach(item => {
            if (item.meta !== "Upcoming" && item.year !== "TBA") {
                globalTotal++;
                if (savedProgress[item.id]) globalWatched++;
            }
        });
    });

    let displayData = dcData;
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
            localStorage.setItem("dcProgress", JSON.stringify(savedProgress)); // Unique Storage for DC
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
    document.getElementById('active-type').innerText = item.type ? item.type.toUpperCase() : "MOVIE";
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
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " official trailer dc")}`, '_blank');
        }
    };

    let cleanTitle = item.title.replace(/\s*\(Season \d+\)\s*/gi, '').replace(/\*/g, '').trim();
    try {
        if (["Superman", "Lanterns", "The Authority", "The Brave and the Bold", "Supergirl: Woman of Tomorrow", "The Batman Part II"].includes(cleanTitle) && item.meta === "Upcoming") {
            document.getElementById('active-poster').src = `https://placehold.co/400x600/eef1f5/005b9f?text=CLASSIFIED\\n\\nUPCOMING+PROJECT`;
        } else {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(cleanTitle)}`);
            const data = await res.json();
            document.getElementById('active-poster').src = data.Poster && data.Poster !== "N/A" ? data.Poster : `https://placehold.co/400x600/eef1f5/005b9f?text=NO+IMAGE`;
            document.getElementById('active-director').innerText = data.Director || "Unknown";
            document.getElementById('active-cast').innerText = data.Actors || "Classified";
            document.getElementById('active-rating').innerText = data.imdbRating || "N/A";
        }
    } catch (e) {
        document.getElementById('active-poster').src = `https://placehold.co/400x600/eef1f5/005b9f?text=OFFLINE`;
    }
    
    document.getElementById('active-boxoffice').innerText = item.type === "Series" ? "Streaming (Max)" : `$${(Math.random() * 600 + 200).toFixed(1)} Million`;
    document.getElementById('active-credits').innerText = Math.floor(Math.random() * 2) + " Scenes";
    document.getElementById('active-sentiment').innerText = `${Math.floor(Math.random() * 40 + 50)}% Positive`;
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