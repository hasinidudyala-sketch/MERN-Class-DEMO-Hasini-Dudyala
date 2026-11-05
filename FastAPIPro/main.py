#FastApi
# pip install fastapi uvicorn
# python -m pip install fastapi uvicorn     (if you get errors with the above one use this)
from fastapi import FastAPI

#creating the Attribute like App
app  = FastAPI()

#Api end point /homepage
@app.get("/")
def Home():
    return {
        "Message":"Welcome to homepage"
    }
@app.get("/About")
def About():
    return {
        "Message":"Welcome to aboutpage"
    }
@app.get("/Clients")
def Clients():
    return {
        "Message":"Welcome to clientpage"
    }

#Path Parameters
#http://127.0.0.1:8000/getNum/100
@app.get("/getNum/{Num}")
def GetNumber(Num:int):
    mul=Num * 2

    return { 
            "My Number":Num,
            "My Multi":mul,
            }
#http://127.0.0.1:8000/getNum/Books
@app.get("/getNum/{Data}")
def GetNumber(Data:str): 
    return {  "My Data":Data  }

# Query Parameters
#http://127.0.0.1:8000/GetBooks?Book=python&limit=5
@app.get("/GetBooks")
def GetBooks(Book:str="all", limit:int=10):
    return {    "My Book":Book,
                "Limit":limit  
            }
#post Method 
# {
#  BookId:1,
#  BookName:"Python",
#  BookPrice:800,
#  BookPublishYear:2006
# }
# Pydantic BaseModel, Field
#pip install pydantic
#python -m pip install pydantic
from pydantic import BaseModel, Field

class Books(BaseModel):
    BookId:int =Field(gt=0)
    BookName:str
    BookPrice:int= Field(gt=0)   
    BookPublishYear:int = Field(gt=2000)

@app.post("/AddNewBooks")
def AddNewBooks(book:Books):
    return  {
                    "Message": "New Book Added Succes.",
                    "Book Details":book.model_dump()
            }

#Update Method
@app.put("/UpdateBook")
def AddNewBooks(book:Books):
    # Call  the database 
    return  {
                    "Message": "Update the Book Succes.",
                    "Book Price":book.BookPrice,
                    "Book Id":book.BookId
            }

# {
#  BookId:1,
#  BookName:"Python",
#  BookPrice:800,
#  BookPublishYear:2006
# }




#Execute the python programs
#python programName.py           (SYNTAX)
#Execute the FastApi programs
#uvicorn ProgramName:AttributeName --reload           (SYNTAX)
#example: uvicorn main:app --reload
# python -m uvicorn main:app --reload          (if you get errors with the above one use this)
#http://127.0.0.1:8000/
#http://127.0.0.1:8000/docs
#http://127.0.0.1:8000/redoc
