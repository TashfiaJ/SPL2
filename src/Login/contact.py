from fastapi import APIRouter

router_contacts = APIRouter(
    prefix="/contacts",
    tags=["contacts"]
)

@router_contacts.get("/",summary="List of contacts", description="Returns all contacts" )
async def get_contacts():
    #create(first_name='Addu', last_name='Pagal', email='addu@gmail.com', phone='123-494', status=1)
    return [{'status': 'OK'}]
