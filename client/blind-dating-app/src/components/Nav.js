import whiteLogo from '../images/coc-logo2.png'
import colorLogo from '../images/coc-logo1.jpg'

const Nav = ({minimal, setShowModal,showModal,setIsSignUp}) =>{

    const handleClick=()=>{
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken=false

    return(
        <nav >

            <div className="logo-container">
                <img className="logo" src= {minimal ? colorLogo: whiteLogo}/>
            </div>
            
            <ul className="nav-items">
                <li>
                    Profile
                </li>
                <li>
                    Events
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Contact Us
                </li>
            </ul>

            { !authToken && !minimal && <button className="nav-button" onClick={handleClick} disabled={showModal}>Login</button>}
        </nav>
    )
}

export default Nav