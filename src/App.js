import { BrowserRouter } from 'react-router-dom';
import Pages from './pages';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
