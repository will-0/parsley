from fastapi import APIRouter, FastAPI
import time
from .api import router

app = FastAPI()
app.include_router(router)

@app.get("/")
async def root():
    return "This is the base application"