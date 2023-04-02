import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import LoginScreen from './components/Login Screen/LoginScreen';
import AboutUsNew from './components/AboutUsNew/Introducing/AboutUsNew';
import CreateAnAccount from './components/CreateAnAccountOne/CreateAnAccount';
import SignUpTwo from './components/SignUpTwo/SignUpTwo';
import SignUpThree from './components/SignUpThree/SignUpThree';
import RealContactUs from './components/RealContactUs/RealContactUs';
import FAQs from './components/FAQs/FAQs';
import DashboardOne from './components/DashboardOne/DashboardOne';
import Deal from './components/Deals/Deal';
import Message from './components/Messages/Message';


function App() {
  return (
    <div >
        <div className='display'>
   <Router basename='/'>
    {/* <LandingPage /> */}
      <Routes>
    <Route path='/work-cx' element={ <LandingPage />} />
    <Route path='/LogIn' element={<LoginScreen />} />
    <Route path='/aboutus' element={<AboutUsNew />} />
    <Route path='/SignUp' element={<CreateAnAccount />} />
    <Route path='/signuptwo' element={<SignUpTwo />} />
    <Route path='/signupthree' element={<SignUpThree />} />
    <Route path='/contactus' element={<RealContactUs />} />
    <Route path='/faqs' element= {<FAQs/>} />
    <Route path='/dashboardone' element= {<DashboardOne/>} />
    <Route path= '/deals' element= { <Deal /> } />
    <Route path='/message' element= {<Message />} />

      </Routes>
    </Router>
   </div>
    <div className='hide' >
    This website is not available for you use a larger screen i.e. Laptop, Desktop e.t.c.
    </div>
    </div>
  );
}

export default App;
