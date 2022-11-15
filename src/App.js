import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from './page/loginPage'
import DashBoard from './page/DashBoard'
import HomePage from './page/HomePage'
import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/LoginPage' element={<LoginPage/>}></Route>
          <Route exact path='/DashBoard' element={<DashBoard/>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
