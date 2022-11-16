import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from './page/loginPage'
import Main from './page/main'
import HomePage from './page/HomePage'
import { AuthProvider } from './components/Auth'

function App() {
  // hello
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/LoginPdage' element={<LoginPage/>}></Route>
          <Route exact path='/Main' element={<Main/>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
