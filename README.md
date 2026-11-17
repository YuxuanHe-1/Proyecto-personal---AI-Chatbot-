# AI Chatbot web🤖

## 🛠️ Tools
* **Frontend:** HTML5, CSS, and react.
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

## API Endpoint

### 1.(`GET`)
* **URL:** `https://proyecto-personal-ai-chatbot.onrender.com/get`
* **Response:** `{"message":"soy eslenderman estos son mis bosques, eslenderman voy a asesinarte"}`

---

## 🌐 Production Cloud Deploy Settings
This repository utilizes automatic deployment updates. Pushing new changes directly to the `main` GitHub branch immediately triggers a fresh Render web service build using these variables:
* **Root Directory:** `backend`
* **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
