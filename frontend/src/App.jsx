import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import CreateClient from './pages/CreateClientPage';
import UpdateClient from './pages/UpdateClient';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';
import store from './Store';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <Provider store={store}>
      <Router> 
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup/>} />
            <Route exact path='/activate/:uid/:token' element={<Activate />} />
            <Route exact path='/reset-password' element={<ResetPassword />} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/clients/:clientID' element={<ClientPage />} />
            <Route exact path='/sections/addclient/' element={<CreateClient />} />
            <Route exact path='/clients/:clientID/update' element={<UpdateClient />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
