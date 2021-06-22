import react from 'react'
import AddDog from './components/AddDog'
import Navbar from './components/Navbar'
import DisplayDogsList from './components/DisplayDogsList'

const App = () =>{
    return(
        <div>
            <Navbar/>

            {/* <AddDog/>  */}
            <DisplayDogsList/>
        </div>
    )
}

export default App