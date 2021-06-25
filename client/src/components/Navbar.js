import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DogBlock from './DogBlock'

import ('./style/navbar.css')
import ('./style/displayDogList.css')


const Navbar = () =>{

    const [dogsByName, setDogsByName] = useState([])
    const [name, setName] = useState(undefined)
    useEffect(()=>{
        const getDogs = async() =>{
            try{ 
                const data={
                    name:name
                }
                const responce = await axios.post('/dog/name', data)
                setDogsByName(responce.data)
            }catch(error){
                console.log("Error", error)
            }
        }
        getDogs();
    }, [name])

    const DisplayDogs = () =>{
         return(
             dogsByName.map((dog)=>{
                 return <DogBlock _id={dog._id} name={dog.name}/>
             })
         )
    }

    return (
        <div key="nav">
                <div className="navbar__container">
                <div className="navbar__logo">
                    DOGINFO
                </div>

                <div className="navbar__Search">
                    <input type="text" placeholder="Search  by name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
             </div>
             <div className="DisplyDog__navbar__container">
                 {DisplayDogs()}
             </div>
        </div>
        
    )
}


export default Navbar