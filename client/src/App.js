import react from 'react'
import AddDog from './components/AddDog'
import Navbar from './components/Navbar'
import DisplayDogsList from './components/DisplayDogsList'
import {Route, BrowserRouter} from 'react-router-dom'
import FullInfo from './components/FullInfo'

const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Route path="/add" exact component={AddDog}/>
                <Route path="/" exact component={DisplayDogsList}/>           
                <Route path="/detail/:_id"  component={FullInfo}/>
            </BrowserRouter>
            
        </div>
    )
}

export default App