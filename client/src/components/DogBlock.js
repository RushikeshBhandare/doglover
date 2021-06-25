import React from 'react'
import { Link } from 'react-router-dom';

import ('./style/dogBlock.css')

const DogBlock = ({_id, name}) =>{


    return(
        <div key={_id}>    
            <Link to={`/detail/${_id}`} >
                <div className="DogBlock__Box">
                    <div className="DogBox__image">
                    <img alt={name} src={`/dog/image/${_id}`}/>

                    </div>
                    <div className="DogBox__name">
                        <h1>{name}</h1>
                        
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DogBlock