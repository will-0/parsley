from object_store import ObjectStore, Path as BlobPath
from fastapi import APIRouter, UploadFile, Path
from fastapi.responses import Response
import urllib.parse
from typing import Annotated
from pathlib import Path as LocalPath

store = ObjectStore(f"file:///{LocalPath.cwd()}/local/data/")

router = APIRouter(
    prefix="/files",
    tags=["files"],
    responses={404: {"description": "Not found"}},
)

@router.get('')
def get_files():
    blobs = store.list()
    return [str(x.location) for x in blobs]

@router.post('')
def post_files(file: UploadFile):
    data = file.file.read()                         # Read the file data
    store.put(BlobPath(file.filename), data)                 # Store the file data
    return {
        "path": urllib.parse.quote(file.filename),
        "content_type": file.content_type
    }

@router.get('/{filepath}')
def get_files(
    filepath: Annotated[str, Path(title="The ID of the item to get")]
):
    try:
        data = store.get(filepath)                    # Get data for the specified blob
        return Response(
            content=data
        )
    except Exception as e:
        return {
            "error": str(e)
        }