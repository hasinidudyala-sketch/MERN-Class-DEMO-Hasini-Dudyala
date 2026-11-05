import './App.css'
import Adminlogin from './Adminlogin'
import Books from './Books'
import Login from './Login'
import Register from './Register'
import {useState} from 'react'
import ButtonClicked from './Button'
import axios from 'axios'
function menu(){

}






function showBooks() {
  const {count, setCount} = useState(0);


  return(
    <>
    function Addcount() {
      setCount(count+1)

    }




        <div class = "Book_container">

        </div>
    </>
  )
}

function App() {
  const [userdata, setUserData] = useState("");

  const ConnectingServer = async () =>{
    try{
      const ApiUrl = await axios.create("http://localhost:5001/")
      const response = await axios.get("http://localhost:5001/");
      setUserData(response.data.message);
    }
    catch(error){
      setUserData("Server connection Error"+error);
      console.log("Error", error)
    }
  } 



  return (
    <>
      <h1>Online book store management system</h1>
      <button onClick={ConnectingServer}>To connect Server</button>
      <h3>{userdata}</h3>
      
    <div className="app" id="home">
      <header className="site-header">
        <p className="site-eyebrow">Welcome to</p>
        <h1 className="site-title">Online Book Store</h1>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#login">User Login</a>
          <a href="#register">Register</a>
          <a href="#admin-login">Admin Login</a>
        </nav>
      </header>

      <main className="content">
        <Login />
        <section className="books-panel" id="books" aria-labelledby="books-title">
          <h2 id="books-title">Featured book</h2>
          <Books />
        </section>
        <Adminlogin />
        <Register />
      </main>

      <footer className="site-footer">Online Book Store</footer>
    </div>
    </>
  )
}

export default App
