from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class tasks(BaseModel):
    task_name: str

@app.get("/get")
def get():
    return {"message":"this is a basic test of my api"}

@app.post("/post")
def post(task: tasks):
    print(task.task_name)
    return {"title": task.task_name}
