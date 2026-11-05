---
# AI Chatbot web🤖
---

A complete, high-performance web application featuring a fast client-side frontend and a cloud-hosted asynchronous **FastAPI** Python backend engine. 

---

## 🛠️ The Tech Stack
* **Frontend:** HTML5, CSS, and JS.
* **Backend:** FastAPI (Python), Pydantic (Data validation), and Uvicorn.
  
---

## 📂 Project Architecture
```text
├── backend/
│   ├── main.py              # FastAPI routing & core server logic
│   └── requirements.txt     # Python production libraries
├── frontend/                # Interactive client interface files
└── README.md                # System documentation
```

---

## 🚦 Core API Endpoints

### 1. Connection Verification (`GET`)
* **URL:** `https://onrender.com`
* **Response:** `{"message": "slenderman"}`

### 2. Message Engine (`POST`)
* **URL:** `https://onrender.com`
* **Payload:** `{"task_name": "string"}`

---

## 💻 Fast Local Setup

1. **Navigate to the backend:**
   ```bash
   cd backend
   ```
2. **Install requirements:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Launch the local development server:**
   ```bash
   uvicorn main:app --reload
   ```

---

## 🌐 Production Cloud Deploy Settings
This repository utilizes automatic deployment updates. Pushing new changes directly to the `main` GitHub branch immediately triggers a fresh Render web service build using these variables:
* **Root Directory:** `backend`
* **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
