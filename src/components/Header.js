import React, {useState} from "react"
import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'





export default function Header(){
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:  959px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 960px)' })
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header className="header">
            <div className="flex">
                <img src={logo} alt='' className="logo"/>
                {isOpen &&
                <div className="div-nav">
                    <nav>
                        <ul>
                            <li className="text-red-600">Features</li>
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

               {isBigScreen &&
                <div className="div-nav">
                    <nav>
                        <ul>
                            <li className="">Features</li>
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

               

                <div className="menu">
                <FontAwesomeIcon
                icon={isOpen? faTimes : faBars}
                className="nav-icon"
                onClick={()=> setIsOpen(!isOpen)}
                />
                </div>
                
            </div>
        </header>
    )
}