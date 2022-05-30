import React from "react"
import bgMobile from "../images/bg-boost-mobile.svg"
import bgDesktop from "../images/bg-boost-desktop.svg"

export default function Boost(){
    return(
        <section className="boost">
            <picture>
                <source media="(min-width: 768px)" srcSet={bgDesktop} />
                <img src={bgMobile} alt=""/>
            </picture>

            <div className="flex-col boost-inner"> 
               <h3>Boost your links today</h3>
               <button className="button">Get started</button>
            </div>
        </section>
    )


}

