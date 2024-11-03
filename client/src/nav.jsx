import {BrowserRouter as Router, Link} from 'react-router-dom'
import './nav.css'
export default function Nav(){
    return(
        <>
        <Router>
         <nav>
                <ul>
                    <li><Link to={'/Signup'} style={{color:"white",textDecoration:"none"}}>Home</Link></li>
                    <li><Link to={'/Signup'} style={{color:"white",textDecoration:"none"}}>About</Link></li>
                    <li><Link to={'/Signup'} style={{color:"white",textDecoration:"none"}}>Sign-up</Link></li>

                </ul>
            </nav>
            
            </Router>
        </>
    )
}