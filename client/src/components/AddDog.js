import React, { useState } from 'react'
import './style/addDog.css'
import axios from 'axios'

const AddDog = () =>{

    const [image, setImage] = useState(null)
    const [name, setName] = useState('');
    const [information, setInformation] = useState('');
    const [size, setSize] = useState('');
    const [malediet, setMalediet] = useState('');
    const [femalediet, setFemailDiet] = useState('');
    const [oneYearMaintainCostMale, setOneYearMaintainCostMale] = useState('');
    const [oneYearMaintainCostFemale, setOneYearMaintainCostFemale] = useState('');
    const [femailMatingSeason, setFemailmatingSeason] = useState('');
    const [birthCount, setBirthCount] = useState(undefined);
    const [care, setCare] = useState('');
    const [ailments, setAilments] = useState('');
    const [vacccination, setVaccination] = useState('');
    const [price, setPrice] = useState('');

    // Submit Form 
    const onFormSubmit = async(e) =>{
      try{
            
        e.preventDefault();
        // const data = {
        //         image,
        //         name,
        //         information,
        //         size,
        //         malediet,
        //         femalediet,
        //         oneYearMaintainCostMale,
        //         oneYearMaintainCostFemale,
        //         femailMatingSeason,
        //         birthCount,
        //         care,
        //         ailments,
        //         vacccination,
        //         price
        // }

        const formData = new FormData();

        formData.append("image", image)
        formData.append("name", name)
        formData.append("information", information)
        formData.append("size", size)
        formData.append("malediet", malediet)
        formData.append("femalediet", femalediet)
        formData.append("oneYearMaintainCostMale", oneYearMaintainCostMale)
        formData.append("oneYearMaintainCostFemale", oneYearMaintainCostFemale)
        formData.append("femailMatingSeason", femailMatingSeason)
        formData.append("birthCount", birthCount)
        formData.append("care", care)
        formData.append("ailments", ailments)
        formData.append("vacccination", vacccination)
        formData.append("price", price)


        //Send Post Request 
         await axios.post('/dog/add', formData)
        alert('dog Added Success!S')
      }catch (error){
         console.log("error is ", error)
      }
    }

    const onChangeFile = (e) =>{
        setImage(e.target.files[0])
    }

    return(
        <div key="add" className="AddDog_Container">
            <form onSubmit={onFormSubmit} className="AddDog__form" encType="multipart/form-data">
                {/* Imaegs */}
                
                <lable>Add an image </lable>
                <input type="file" filename="image" onChange={onChangeFile}/>


                {/* Name */}
                <label>Name Of Dog </label>
                <input required type="text" placeholder="Dog Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>

                 {/* information */}
                 <label> Dog information </label>
                <input required type="text" placeholder="Information" value={information} onChange={(e)=>{setInformation(e.target.value)}}/>

                {/* size */}   
                <label>size </label>
                <input required type="text" placeholder="size in inch" value={size} onChange={(e)=>{setSize(e.target.value)}}/>

                 {/* malediet */}
                 <label>Male Diet </label>
                <input required type="text" value={malediet} placeholder="Mail Diet" onChange={(e)=>{setMalediet(e.target.value)}}/>

                 {/* femalediet */}
                 <label>Female Diet </label>
                <input required type="text" value={femalediet} placeholder="Femail Diet" onChange={(e)=>{setFemailDiet(e.target.value)}}/>

                 {/* oneYearMaintainCostMale */}
                 <label>One year maintain cost male </label>
                <input required type="text" value={oneYearMaintainCostMale} placeholder="Maintain Cost " onChange={(e)=>{setOneYearMaintainCostMale(e.target.value)}}/>

                 {/* oneYearMaintainCostFemale */}
                 <label>One year maintain cost femail </label>
                <input required type="text" value={oneYearMaintainCostFemale}  placeholder="Maintain Cost "  onChange={(e)=>{setOneYearMaintainCostFemale(e.target.value)}}/>

                 {/* femailMatingSeason */}
                 <label>Femail mating season </label>
                <input required type="text" value={femailMatingSeason}  placeholder="Mating Seson" onChange={(e)=>{setFemailmatingSeason(e.target.value)}}/>

                 {/* birthCount */}
                 <label>Give Puppy  </label>
                <input required type="number" value={birthCount}  placeholder="Birth count" onChange={(e)=>{setBirthCount(e.target.value)}}/>

                 {/* care */}
                 <label>Care </label>
                <input required type="text" value={care}  placeholder="How We Care " onChange={(e)=>{setCare(e.target.value)}}/>

                 {/* ailments */}
                 <label>Ailments </label>
                <input required type="text" value={ailments}  placeholder="Ailments" onChange={(e)=>{setAilments(e.target.value)}}/>

                 {/* vacccination */}
                 <label>Vaccination </label>
                <input required type="text" value={vacccination}  placeholder="Vaccination" onChange={(e)=>{setVaccination(e.target.value)}}/>

                 {/* price */}
                 <label>Price </label>
                <input required type="text" value={price}  placeholder="Price in RS" onChange={(e)=>{setPrice(e.target.value)}}/>

                <button className="AddDog__Button"  type="submit">Add Dog</button>

            </form>
         </div>
    )
}

export default AddDog
