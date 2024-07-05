import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/News/Navbar';
import News from './Components//News/News';
import Footer from './Components/News/Footer';

function App() {
  let PageSize = 9;
  // let [Category,setCategory] = useState("general");
  let [Country, setCountry] = useState("in");
  let [Pageid,setPageid] = useState(1);


  return (
    <>
      <BrowserRouter>
        <div className='select-none'>
          <Navbar></Navbar>
          <Routes>

            <Route path={`/`} element={<News PageSize={PageSize} Pageid={Pageid} Category={"general"} Country={Country}></News>}></Route>

            <Route path={`/Business`} element={<News PageSize={PageSize} Pageid={Pageid} Category={"business"} Country={Country}></News>}></Route>

            <Route path={`/Entertainment`} element={<News PageSize={PageSize} Pageid={Pageid} Category={"entertainment"} Country={Country}></News>}></Route>

            <Route path={`/Health`} element={<News PageSize={PageSize} Pageid={Pageid} Category={"health"} Country={Country}></News>}></Route>

            <Route path={`/Science`} element={<News PageSize={PageSize} Pageid={Pageid} Category={"science"} Country={Country}></News>}></Route>

            <Route path={`/Sports`} element={<News PageSize={PageSize} Pageid={Pageid} Category={"sports"} Country={Country}></News>}></Route>

            <Route path={`/Technology`} element={<News PageSize={PageSize} Pageid={Pageid} Category={"technology"} Country={Country}></News>}></Route>
            
          </Routes>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
