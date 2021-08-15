import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import About from '../About'
import Cars from '../Cars'
import ContactUs from '../ContactUs'
import Home from '../Home'
import NoMatchFound from '../NoMatchFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'


const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Router>
            <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
            <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cars" component={Cars} />
                <Route path="/about" component={About} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path='*' component={NoMatchFound} />
            </Switch>
        </Router >
    )
}

export default LandingPage
