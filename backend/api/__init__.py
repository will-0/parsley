from fastapi import APIRouter
import time

router = APIRouter(
    prefix="/api",
    tags=["api"],
    responses={404: {"description": "Not found"}},
)

@router.get('/')
async def home():
    time.sleep(0.5)
    return {"message": "Hello World!"}