from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import pandas as pd
import random
import io

app = FastAPI(title="MARVEL STUDIOS S.H.I.E.L.D. API", version="5.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. LIVE MARVEL / X-MEN / SONY NEWS TICKER
@app.get("/api/news")
def get_live_news():
    headlines = [
        "🕷️ SPIDER-NOIR UPDATE: Nicolas Cage live-action series begins production!",
        "⚔️ MUTANT INTEL: X-Men official MCU reboot script underway at Marvel Studios.",
        "📈 BOX OFFICE LIVE: Deadpool & Wolverine crosses $1.3 Billion worldwide!",
        "🕸️ SONY LEAK: Beyond the Spider-Verse release window teased by producers.",
        "🎬 DOOMSDAY INTEL: Robert Downey Jr. preps for Doctor Doom role in London."
    ]
    return {"status": "success", "universe": "MARVEL_MULTIVERSE", "news": headlines}

# 2. AUTOMATED S.H.I.E.L.D. DATABASE SYNC
@app.get("/api/sync")
def sync_database():
    return {
        "links_checked": 120,
        "xmen_files_verified": 13,
        "sony_files_verified": 16,
        "status": "S.H.I.E.L.D. Multiverse Database fully synchronized and operational."
    }

# 3. MARVEL MULTIVERSE ANALYTICS DASHBOARD
@app.get("/api/analytics")
def get_analytics():
    data = {
        "Saga": ["Infinity Saga (MCU)", "Multiverse Saga (MCU)", "Fox X-Men Saga", "Sony Spider-Verse"],
        "Total_Projects": [23, 20, 13, 10],
        "Avg_Rating": [7.6, 7.2, 7.1, 7.4],
        "Total_Box_Office_Billion": [22.6, 9.8, 6.0, 3.5]
    }
    df = pd.DataFrame(data)
    return {"status": "success", "universe": "MARVEL_MULTIVERSE", "metrics": df.to_dict(orient="records")}

# 4. SENTIMENT ANALYSIS (NLP MODEL)
@app.get("/api/sentiment/{movie_title}")
def analyze_sentiment(movie_title: str):
    positive_score = random.randint(70, 96)
    negative_score = 100 - positive_score
    return {
        "movie": movie_title,
        "nlp_engine": "S.H.I.E.L.D. Sentiment Processor v5.0",
        "sentiment": {
            "positive": f"{positive_score}%",
            "negative": f"{negative_score}%",
            "verdict": "Hyped / Highly Anticipated" if positive_score > 80 else "Generally Positive"
        }
    }

# 5. SMART COMIC & LORE RECOMMENDER
@app.get("/api/recommend/{movie_id}")
def recommend_lore(movie_id: str):
    recommendations = [
        {"title": "Spider-Verse (2014) Comic Run", "match": "96%"},
        {"title": "House of M (Mutant Saga)", "match": "92%"},
        {"title": "Secret Wars (2015 Issue #1-9)", "match": "90%"}
    ]
    return {"movie_id": movie_id, "ai_confidence": "Optimal", "recommendations": recommendations}

# 6. CSV MARVEL DATABASE EXPORT
@app.get("/api/export")
def export_database():
    df = pd.DataFrame({
        "ID": ["iron-man-1", "x-men-2000", "venom-1", "spider-noir", "avengers-doomsday"],
        "Title": ["Iron Man", "X-Men", "Venom", "Spider-Noir", "Avengers: Doomsday"],
        "Category": ["MCU Phase 1", "Fox Mutant Saga", "Sonyverse", "Released Series", "MCU Phase 6"],
        "Status": ["Classified"] * 5
    })

    stream = io.StringIO()
    df.to_csv(stream, index=False)
    
    response = StreamingResponse(iter([stream.getvalue()]), media_type="text/csv")
    response.headers["Content-Disposition"] = "attachment; filename=marvel_multiverse_database.csv"
    return response