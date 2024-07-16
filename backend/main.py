from fastapi import APIRouter, FastAPI
import uvicorn
from .api import router

app = FastAPI()
app.include_router(router)

@app.get("/")
async def root():
    return "This is the base application"

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)