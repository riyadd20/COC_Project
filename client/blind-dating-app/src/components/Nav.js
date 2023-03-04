import whiteLogo from '../images/coc-logo2.png'
import colorLogo from '../images/coc-logo1.jpg'

const Nav = ({minimal, authToken}) =>{



    return(
        <nav>

            <div className="logo-container">
                <img className="logo" src= {minimal ? colorLogo: whiteLogo}/>
            </div>

            { !authToken && !minimal && <button className="nav-button" >Log in</button>}
        </nav>
    )
}

export default Nav