import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import Susbcription from './Components/Susbcription';
import Free from './Components/Free';
import Premium from './Components/Premium';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chooseplan' element={<Susbcription/>}/>
        <Route path='/free' element={<Free/>}/>
        <Route path='/premium' element={<Premium/>}/>


        <Route path='/admin' element={<Form/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
