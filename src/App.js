// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import aboutus from './components/aboutus';



function App() {
  return (
    <>
      
      <Navbar tittle= "myweb" aboutHead="info"/>
      <div className="container">

        {/* <TextForm header = "Enter any text : " /> */}

      </div>
      
      <aboutus/>
   
    </>

  );
}

export default App;
