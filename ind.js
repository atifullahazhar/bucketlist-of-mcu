// --- S.H.I.E.L.D. DATABASE v3.0 (MADDOCK SUPERNATURAL UNIVERSE STREAM) ---
const OMDB_API_KEY = "ef1d0492";

// MADDOCK TIMELINE ONLY
// MADDOCK SUPERNATURAL UNIVERSE (EXPANDED TIMELINE)
const indData = [
    {
        phase: "Classified Origin File",
        items: [
            { id: "go-goa-gone", title: "Go Goa Gone", year: "2013", type: "Movie", meta: "1h 48m", desc: "The spiritual predecessor to the universe. A group of friends find themselves chased by zombies on a secluded island in Goa.", trailerId: "OtwG1zE6N0Y" }
        ]
    },
    {
        phase: "Phase 1: The Foundation",
        items: [
            { id: "stree-1", title: "Stree", year: "2018", type: "Movie", meta: "2h 8m", desc: "The town of Chanderi is haunted by a witch who abducts men during festivals.", trailerId: "gzeaGcMACNw" },
            { id: "roohi", title: "Roohi", year: "2021", type: "Movie", meta: "2h 14m", desc: "Two bumbling friends get stuck in a forest with a girl who is possessed by a demon.", trailerId: "1E_NxtNnFMA" },
            { id: "bhediya", title: "Bhediya", year: "2022", type: "Movie", meta: "2h 36m", desc: "Bhaskar gets bitten by a mythical wolf, beginning a transformation that intertwines him with local folklore.", trailerId: "bOeqrR40-w0" }
        ]
    },
    {
        phase: "Phase 2: The Expansion",
        items: [
            { id: "munjya", title: "Munjya", year: "2024", type: "Movie", meta: "2h 3m", desc: "A young man uncovers his family's dark secret tied to a mischievous and vengeful spirit.", trailerId: "H_l4FzJ8F_8" },
            { id: "stree-2", title: "Stree 2: Sarkate Ka Aatank", year: "2024", type: "Movie", meta: "2h 29m", desc: "Chanderi faces a new, terrifying headless entity, forcing the town to rely on Stree for help.", trailerId: "kV-N1FmQkoM" }
        ]
    },
    {
        phase: "Upcoming Folklore Files",
        items: [
            { id: "thama", title: "Thama", year: "2025", type: "Movie", meta: "Upcoming", desc: "A bloody love story bringing vampires into the Maddock Supernatural Universe." },
            { id: "bhediya-2", title: "Bhediya 2", year: "2026", type: "Movie", meta: "Upcoming", desc: "Bhaskar's journey as the protector of the forest continues." },
            { id: "stree-3", title: "Stree 3", year: "TBA", type: "Movie", meta: "Upcoming", desc: "The continuing saga of the supernatural protectors of Chanderi." },
            { id: "munjya-2", title: "Munjya 2", year: "TBA", type: "Movie", meta: "Upcoming", desc: "The return of the mischievous spirit." }
        ]
    }
];

// UNIQUE LOCAL STORAGE FOR INDIAN UNIVERSE
let savedProgress = JSON.parse(localStorage.getItem("indProgress")) || {};
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

// Python Simulations (Maddock Universe)
const simulatedNews = [
    "👻 MADDOCK LEAK: Stree 3 script finalized, shooting begins soon...",
    "🐺 MADDOCK UPDATE: Varun Dhawan teases Bhediya 2 crossover...",
    "🔥 MADDOCK BOX OFFICE: Munjya overtakes international releases!"
];
let newsIndex = 0;
setInterval(() => {
    const ticker = document.getElementById('live-news-ticker');
    if (ticker) ticker.innerText = simulatedNews[newsIndex];
    newsIndex = (newsIndex + 1) % simulatedNews.length;
}, 5000);

document.getElementById('sync-btn').addEventListener('click', () => {
    alert("Python Sync (MADDOCK UNIVERSE):\n- Folklore Links Verified\n- Desi Database secure.");
});

document.getElementById('analytics-btn').addEventListener('click', () => {
    dataModalTitle.innerText = "Maddock Universe Analytics";
    dataModalBody.innerHTML = `<p><strong>Maddock Phase 1 Box Office:</strong> ₹350+ Cr</p><p><strong>Fan Sentiment:</strong> 88% Positive</p>`;
    dataModal.style.display = 'flex';
});

document.getElementById('comic-recommender-btn').addEventListener('click', () => {
    if (!activeMovieData) return;
    dataModalTitle.innerText = `Folklore Origins for ${activeMovieData.title}`;
    dataModalBody.innerHTML = `<p><strong>Source 1:</strong> Indian Folklore & Urban Legends (98% Match)</p><p><strong>Source 2:</strong> Nale Ba / Konkan Ghost Stories (85% Match)</p>`;
    dataModal.style.display = 'flex';
});

function initChart(watched, pending) {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    if (progressChart) progressChart.destroy();
    progressChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: { labels: ['Cleared', 'Pending'], datasets: [{ data: [watched, pending], backgroundColor: ['#27ae60', '#cccccc'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function loadMovies(filterText = '') {
    trackerContainer.innerHTML = '';
    let globalWatched = 0, globalTotal = 0;

    let allItems = [];
    indData.forEach(phase => allItems.push(...phase.items));

    indData.forEach(phase => {
        phase.items.forEach(item => {
            if (item.meta !== "Upcoming" && item.year !== "TBA") {
                globalTotal++;
                if (savedProgress[item.id]) globalWatched++;
            }
        });
    });

    let displayData = indData;
    if (currentMode !== 'timeline') {
        let filtered = allItems;
        if (currentMode === 'watchlist') filtered = allItems.filter(i => !savedProgress[i.id] && i.meta !== "Upcoming");
        else if (currentMode === 'release') filtered = allItems.filter(i => i.meta !== "Upcoming").sort((a, b) => parseInt(a.year) - parseInt(b.year));
        else if (currentMode === 'upcoming') filtered = allItems.filter(i => i.meta === "Upcoming" || i.year === "TBA");

        displayData = [{ phase: currentMode.toUpperCase() + " FILES", items: filtered }];
    }

    displayData.forEach(phase => {
        const filteredItems = phase.items.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));
        if (filteredItems.length > 0) renderSection(phase.phase, filteredItems);
    });

    document.getElementById('watched-count').innerText = globalWatched;
    document.getElementById('remaining-count').innerText = globalTotal - globalWatched;
    document.getElementById('progress-fill').style.width = globalTotal === 0 ? "0%" : `${(globalWatched / globalTotal) * 100}%`;
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
            localStorage.setItem("indProgress", JSON.stringify(savedProgress)); // Unique Storage for Maddock Universe
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
        if (item.trailerId) {
            document.getElementById('trailer-modal').style.display = 'flex';
            document.getElementById('iframe-container').innerHTML = `<iframe src="https://www.youtube.com/embed/${item.trailerId}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        } else {
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(item.title + " official trailer")}`, '_blank');
        }
    };

    let cleanTitle = item.title.replace(/\s*\(Season \d+\)\s*/gi, '').replace(/\*/g, '').trim();
    try {
        if (["Vampires of Vijay Nagar", "Bhediya 2", "Stree 3"].includes(cleanTitle) && item.meta === "Upcoming") {
            document.getElementById('active-poster').src = `https://placehold.co/400x600/eef1f5/27ae60?text=CLASSIFIED\\n\\nUPCOMING+PROJECT`;
        } else {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(cleanTitle)}`);
            const data = await res.json();
            document.getElementById('active-poster').src = data.Poster && data.Poster !== "N/A" ? data.Poster : `https://placehold.co/400x600/eef1f5/27ae60?text=NO+IMAGE`;
            document.getElementById('active-director').innerText = data.Director || "Unknown";
            document.getElementById('active-cast').innerText = data.Actors || "Classified";
            document.getElementById('active-rating').innerText = data.imdbRating || "N/A";
        }
    } catch (e) {
        document.getElementById('active-poster').src = `https://placehold.co/400x600/eef1f5/27ae60?text=OFFLINE`;
    }

    document.getElementById('active-boxoffice').innerText = `₹${(Math.random() * 300 + 100).toFixed(1)} Cr`;
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
    if (btn) btn.addEventListener('click', (e) => {
        currentMode = mode;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        loadMovies(searchBar.value);
    });
});

// Initialize
loadMovies();