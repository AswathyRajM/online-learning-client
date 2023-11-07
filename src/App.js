import { BrowserRouter } from 'react-router-dom';
import Pages from './pages';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
