import React, {useState} from "react"
import logo from "../images/logo.svg"


export default function Header(){
    return(
        <header>
            <div>
                <img src={logo} alt=''/>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}