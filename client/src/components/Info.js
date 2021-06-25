import React from 'react'

const Info = ({FieldName, disc}) =>{
    return(
        <div key={FieldName} className="fullinfo__info">
           <h2 className="price">{FieldName}</h2> <span>{disc}</span> 
        </div>
    )
}

export default Info 