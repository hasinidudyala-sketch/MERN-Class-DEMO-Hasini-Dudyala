import './App.css'
function Products(){
    const imagurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5ryeX0Ukhl8oCN50OeHwdnfzLkVlW5aVlRP2OsDXiA&s=10";
    const imagesize=90;
    const productName="Bread Lorem Ipsum";

    const Book_details={
                            Imagurl:"https://m.media-amazon.com/images/I/61ViPUXS8ZL._AC_UF1000,1000_QL80_.jpg",
                            Book_Name:"Python NoteBook",
                            Imagesize:90,
                            Price:700
                        }
    return(
        <>
        <div className='book_details'>
            <div className='books'>
                    <img  className='imgcls'
                     src={Book_details.Imagurl}
                     width={Book_details.Imagesize}
                     height={Book_details.Imagesize}
                     alt={'An image of '+Book_details.Book_Name}  />
                <h2>{Book_details.Book_Name}</h2>    
                <h4>Price : {Book_details.Price}</h4>   
                <button>To click more details</button> 
            </div>
            <div className='books'>
                <img  className='imgcls'
                     src={imagurl}
                     width={imagesize}
                     height={imagesize}
                     alt={'An image of '+productName}  />
                <h2>{productName}</h2>       
                <button>To click more details</button>      
            </div> 
        </div>
        </>
    )
}
export default Products
