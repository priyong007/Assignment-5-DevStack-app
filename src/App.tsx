

import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Technologies from './components/technologies/Technologies';
import type { ITechType } from './type/TechnologyType';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';





const technologiesPromise = async(): Promise<ITechType[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}
function App() {
 


  return (
    <>
    <Nav/>
    <Banner/>
    <ToastContainer/>

    <Suspense fallback={<h2> loding...</h2>}>

    <Technologies technologiesPromise={technologiesPromise ()} />

    </Suspense>

    <Footer/>


    

    </>
  )
}

export default App
