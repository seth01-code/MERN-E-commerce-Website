import { useEffect } from "react";
import Aos from "aos";
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/Pagenotfound'
import Policy from './pages/Policy'

function App() {
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "TCMÉTIER STORE";
    // setLoading(true);
    setTimeout(() => {
      // setLoading(false);
    }, 6000);

    Aos.init();
  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/policy" element={<Policy/>} />
    </Routes>
     
    </>
  );
}

export default App;
