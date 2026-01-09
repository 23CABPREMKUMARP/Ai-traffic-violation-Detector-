# Smart AI Traffic Violation Detection System

## 🚀 System Overview
This is a full-stack AI application designed to detect traffic violations (No Helmet, Triple Riding, Over-speeding) from video footage.

### Architecture
- **Frontend**: React + Vite + Tailwind CSS (Port 5173)
- **Backend**: Node.js + Express (Port 3000)
- **AI Service**: Python + FastAPI + YOLOv8 (Port 8000)
- **Database**: PostgreSQL (Traffic Data & Challans)

## 🛠 Setup & Installation

### Prerequisite
Ensure you have `Node.js`, `Python 3.8+`, and `PostgreSQL` installed.

### 1. Database Setup
Create a PostgreSQL database named `traffic_ai_db`:
```bash
createdb traffic_ai_db
psql -d traffic_ai_db -f backend/database/init.sql
```
*Update `backend/.env` with your DB credentials if needed.*

### 2. Install Dependencies
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# AI Service
cd ../ai_service
pip install -r requirements.txt
```

### 3. Run the System
You can run each service in a separate terminal:

**Terminal 1 (Frontend)**
```bash
cd frontend
npm run dev
```

**Terminal 2 (Backend)**
```bash
cd backend
npm run dev
```

**Terminal 3 (AI Service)**
```bash
cd ai_service
python3 app.py
```

## 🎥 Usage
1. Open the Dashboard at `http://localhost:5173`.
2. Navigate to **Violation Detection**.
3. Upload a traffic video (MP4/AVI).
4. The system will process it and generate a Video ID.
5. (Coming Soon) View generated Challans in the dashboard.

## 📂 Project Structure
- `frontend/`: UI Logic and Components.
- `backend/`: API handling, File Uploads, Database interactions.
- `ai_service/`: YOLOv8 Inference engine.

# Ai-traffic-violation-Detector-
