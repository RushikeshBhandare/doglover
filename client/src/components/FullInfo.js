import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Info from './Info'

import ('./style/fullInfo.css')

const FullInfo = (props) =>{

    const [name, setName] = useState('')
    const [information, setInformation] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [oneYearMaintainCostMale, setOneYearMaintainCostMale] = useState('')
    const [oneYearMaintainCostFemale, setOneYearMaintainCostFemale] = useState('')
    const [maleDiet, setMaleDiet] = useState('')
    const [femailDiet, setFemailDiet] = useState('')
    const [birthCount, setBirthCount] = useState('')
    const [femailMatingSeason, setFemailMatingSeason] = useState('')
    const [care, setCare] = useState('')
    const [vacccination, setVacccination] = useState('')
    const [ailments, setAliments] = useState('')

    useEffect(()=>{
        const getInfo = async() =>{
            try{    
                const {data} = await axios.get(`/dog/fullinfo/${props.match.params._id}`)
                console.log("Responce ", data)
                setName(data.name);
                setInformation(data.information);
                setSize(data.size);
                setPrice(data.price);
                setOneYearMaintainCostMale(data.oneYearMaintainCostMale);
                setOneYearMaintainCostFemale(data.oneYearMaintainCostFemale);
                setFemailDiet(data.femalediet);
                setMaleDiet(data.malediet);
                setBirthCount(data.birthCount);
                setFemailMatingSeason(data.femailMatingSeason);
                setCare(data.care);
                setVacccination(data.vacccination);
                setAliments(data.ailments);
            }catch(error){
                console.log("error", error)
            }
        }
        getInfo()
        
    },[props])

    return(
        <div>
            <div className="fullinfo__image">
                <img alt={name} src={`/dog/image/${props.match.params._id}`}/>
            </div>
            <Info FieldName="Price" disc = {`Rs ${price}`}/>
            <Info FieldName="Name" disc = {name}/>
            <Info FieldName="Information" disc = {information}/>
            <Info FieldName="Size" disc = {`${size} inch `}/>
            <Info FieldName="Care" disc = {care}/>
            <Info FieldName="Male Diet" disc = {maleDiet}/>
            <Info FieldName="Femail Diet" disc = {femailDiet}/>
            <Info FieldName="Maintain Cost male" disc = {oneYearMaintainCostMale}/>
            <Info FieldName="Maintain Cost male" disc = {oneYearMaintainCostFemale}/>
            <Info FieldName="Female Mating Season" disc = {femailMatingSeason}/>
            <Info FieldName="Birth Count" disc = {birthCount}/>
            <Info FieldName="Vaccination" disc = {vacccination}/>
            <Info FieldName="Aliments" disc = {ailments}/>

        </div>

    )
}

export default FullInfo