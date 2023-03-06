app = FastAPI(title='Contact.ly', description='APIs for contact Apis', version='0.1')

@app.on_event("startup")
async def startup():
    print("Connecting...")

@app.get("/")
async def root():
    return {"message": "Contact Applications!"}
