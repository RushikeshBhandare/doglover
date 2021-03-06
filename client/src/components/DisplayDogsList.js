import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DogBlock from './DogBlock'

import ('./style/displayDogList.css')

const DisplayDogsList = () =>{
    
    const [dogList, setDogList] = useState([])
    useEffect(()=>{
        const GetDogs = async() =>{
            try{
                const responce = await axios.get('/dog/all')
                setDogList(responce.data)
            }catch (error){
                console.log(error)
            }
        }

        GetDogs();

    },[])

    const DisplayDogs = () =>{
        return (
            dogList.map((dog)=>{
                return <DogBlock key={dog._id} _id={dog._id} name={dog.name}/>
            })
        )
    }

    return(
        <div className="DisplayDogList_container">

          {DisplayDogs()}
        </div>
    )
}

export default DisplayDogsList