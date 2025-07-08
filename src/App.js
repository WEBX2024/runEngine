import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <div>
        <Toaster
          position='center'
          toastOptions={{
            success:{
              theme:{
                primary:"#00396e"
              }
            }
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route> 
          <Route path='/editor/:roomid' element={<EditorPage/>}></Route> 
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
