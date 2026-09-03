from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api import deps

router = APIRouter()


@router.get("/", response_model=List[schemas.Item])
def read_items(
        db: Session = Depends(deps.get_db),
) -> Any:
    """
    Retrieve items.
    """
    items = crud.item.get_multi(db, )

    return items


# @router.post("/", response_model=schemas.Item)
@router.post("/", )
def create_item(
        *,
        db: Session = Depends(deps.get_db),

        item_in: schemas.ItemCreate,
) -> Any:
    """
    Create new item.
    """
    item = crud.item.create(db=db, obj_in=item_in)
    return item


@router.put("/{id}", response_model=schemas.Item)
def update_item(
        *,
        db: Session = Depends(deps.get_db),
        id: int,
        item_in: schemas.ItemUpdate,
) -> Any:
    """
    Update an item.
    """
    item = crud.item.get(db=db, id=id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    item = crud.item.update(db=db, db_obj=item, obj_in=item_in)
    return item


@router.delete("/{id}", response_model=schemas.Item)
def delete_item(
        *,
        db: Session = Depends(deps.get_db),
        id: int,
) -> Any:
    """
    Delete an item.
    """
    item = crud.item.get(db=db, id=id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    item = crud.item.remove(db=db, id=id)
    return item
