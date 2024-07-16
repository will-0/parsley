from fastapi import APIRouter
from .files import router as files_router
import time

router = APIRouter(
    prefix="/api",
    tags=["api"],
    responses={404: {"description": "Not found"}},
)
router.include_router(files_router)

@router.get('/')
async def home():
    time.sleep(0.5)
    return {"message": "Hello World!"}