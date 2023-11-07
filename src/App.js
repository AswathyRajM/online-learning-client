import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/PagesRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='max-w-screen-2xl md:py-7 md:px-20 py-4 px-5 mx-auto'>
        <Pages />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
