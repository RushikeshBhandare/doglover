import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import ('./style/dogBlock.css')

const DogBlock = ({_id, name}) =>{


    return(
        <Link to={`/detail/${_id}`} >
            <div className="DogBlock__Box">
                <div className="DogBox__image">
                <img src={`/dog/image/${_id}`}/>

                </div>
                <div className="DogBox__name">
                    <h1>{name}</h1>
                    
                </div>
            </div>
        </Link>
        
    )
}

export default DogBlock