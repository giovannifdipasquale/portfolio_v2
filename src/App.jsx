import Home from "src/pages/Home/Home";
import Projects from "src/pages/Projects/Projects";
import Contacts from "src/pages/Contacts/Contacts";
import AboutMe from "src/pages/AboutMe/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about_me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
