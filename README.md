# Voyage AI — Voice-First Travel Planner

Welcome to **Voyage AI**, a smart travel planning assistant powered by **OmniDimension’s Voice Agent**.  
Built for the **Code Cubicle Hackathon**, this project tackles time-consuming, scattered travel planning with a natural, voice-first experience.

---

## What is Voyage AI?

Voyage AI is a **voice-driven travel planner**.  
Instead of juggling forms and tabs, travelers simply **speak or type** to:

- Plan trips instantly
- Get real-time suggestions for flights and hotels
- Confirm itineraries in one flow
- Handle changes or clarifications naturally

Powered by **React.js**, **Tailwind CSS**, **FastAPI (Python)**, and the **OmniDimension Python SDK**, Voyage AI shows how AI voice agents can transform how we plan travel.

---

## Key Features

- Warm greeting and friendly introduction
- Collects traveler details (name, destination, dates, preferences)
- Suggests flights and hotels with backup options
- Dynamic slot checking using dummy JSON or real APIs
- Clarifies uncertain inputs politely
- Confirms bookings and displays live conversation log
- Responsive UI, mobile-friendly

---

## Tech Stack

| Layer | Details |
|----------------|--------------------------|
| **Frontend** | React.js (Vite) + Tailwind CSS |
| **Backend** | FastAPI (Python) |
| **Voice AI** | OmniDimension Python SDK |
| **Slot Data** | Dummy JSON or Google Calendar API (future-ready) |
| **Deployment** | Vercel (Frontend) + Railway/Render (Backend) |
| **Version Control** | Git + GitHub |

---

## How It Works

1. User clicks mic button or types a travel request.
2. Request is sent to the FastAPI backend.
3. OmniDimension Voice Agent processes the input.
4. Backend checks slot availability in real time.
5. Response returns to the frontend.
6. Conversation log updates instantly.

---

## How to Run Locally

**1. Clone this Repo**

```bash
git clone https://github.com/Pratheesh-555/Travel-Planner-CC-sc.git
cd Travel-Planner-CC-sc
**2. Install Frontend Dependencies**

bash
Copy
Edit
npm install
npm run dev
Opens at http://localhost:5173

3. Set up Python Backend

bash
Copy
Edit
cd backend  # adjust if you named it differently
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

pip install -r requirements.txt

uvicorn app:app --reload
Project Structure
bash
Copy
Edit
Travel-Planner-CC-sc/
 ├── frontend/     # React + Tailwind UI
 ├── backend/      # FastAPI + OmniDimension logic
 ├── slots.json    # Dummy calendar slots
 ├── README.md     # This file
Live Demo
[Add deployed link here if you have it]

Why Voyage AI Stands Out
True voice-first design using OmniDimension

Multi-turn conversation with clarifications

Real or simulated slot checking shows dynamic logic

Clear separation of frontend and backend — easy to scale with real APIs later

Clean, modular, ready for production
