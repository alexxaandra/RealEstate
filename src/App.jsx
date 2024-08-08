import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contact/Contact.jsx"
import GetStarted from "./components/GetStarted/GetStarted.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./App.css"
function App (){
    return (
        <div className="App">
            <Header/>
            <Hero />
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <GetStarted />
            <Footer />
        </div>
    );
}

export default App;
