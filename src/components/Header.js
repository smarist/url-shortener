import React, {useState} from "react"
import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'



export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header>
            <div className="flex">
                <img src={logo} alt=''/>
                {isOpen &&
                <div>
                    <nav>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Resources</li>
                        </ul>

                        <ul>
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul>
                    </nav>
                </div>
                }

                <button>
                <FontAwesomeIcon
                icon={isOpen? faBars : faTimes}
                className="nav-icon1"
                onClick={()=> setIsOpen(!isOpen)}
                />
                </button>
                
            </div>
        </header>
    )
}