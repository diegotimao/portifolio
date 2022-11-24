import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './global.css';
import { AuthProvider } from './provider/auth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
}

export default App;
