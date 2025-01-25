import { BrowserRouter, Routes, Route } from "react-router-dom"
import First from './componets/First';
import Second from './componets/Second';
import Welcome from './componets/Welcome';
//import {New,New1,New2,New3}from './functional_componets/New';
//import Header from "./Myntra/Header";
//import Slider from "./Myntra/Slider";
//import Main from "./Myntra/Main";
//import Footer from "./Myntra/Footer";
import UseRef from "./componets/UseRef";
import { Mycontext } from "./componets/Mycontext";
import Product from "./componets/Product";
import Third from "./componets/Third";
import Box from "./componets/Box";
import Navbar from "./componets/Navbar";
import Child from "./componets/Child"
import UseState from "./componets/UseState"

function App() {
  let detail = {
    name: "Anshuman",
    age: 20,
    city: "Delhi",
    weight: "60 kg",
    height: "180 cm"
  }
  let arr = ["Anshuman", "Yash", "Harsh", "Tyagi"];
  return (
    <>
     <UseState></UseState>
      {/* <Mycontext.Provider value={{ detail, arr }}>
        <BrowserRouter>
          <Navbar></Navbar>
         
          <Routes>
            <Route index element={<Product />} />
            <Route path="first" element={<First />}></Route>
            <Route path="second" element={<Second detail={detail} />}></Route>
            <Route path="third" element={<Third value={{ detail, arr }} />}></Route>
            <Route path="welcome" element={<Welcome />}></Route>
            <Route path="box" element={<Box />}></Route>
            <Route path="child" element={<Child />}></Route>
            <Route path="useref" element={<UseRef />}></Route>
          </Routes>
        </BrowserRouter>
      </Mycontext.Provider> */}
    </>)

  { /* <New></New>
      <New1></New1>
      <New2></New2>
      <New3></New3>
      <First></First>
      <Welcome></Welcome>
      <Second detail={detail}></Second>
      <Header></Header>
      <Slider></Slider>
      <Main></Main>
      <Footer></Footer>
      <UseRef></UseRef>
      <Navbar></Navbar>
      <Mycontext.Provider value={{detail,arr}}>
      <Third></Third>
      </Mycontext.Provider>
      <Product></Product>*/}
}

export default App;
