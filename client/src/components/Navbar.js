import react from 'react'
import ('./style/navbar.css')

const Navbar = () =>{
    return (
        <div className="navbar__container">
             <div className="navbar__logo">
                DOGINFO
             </div>

             <div className="navbar__Search">
                <input type="text" placeholder="Search  by name"/>
             </div>
        </div>
    )
}


export default Navbar