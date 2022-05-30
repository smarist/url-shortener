import React, {useState, useEffect} from 'react'
import bgMobile from '../images/bg-shorten-mobile.svg'
import bgDesktop from '../images/bg-shorten-desktop.svg'

//https://api.shrtco.de/v2/shorten?url=${urlText}`
export default function Shortener(){
    
    const [text, setText] = useState('')
    const [links, setLinks] = useState([])
    const [buttonText, setButtonText] = useState("Copy")

    
    function handleSubmit(e){
        e.preventDefault()
        if(!text){
            alert("input is empty")
        } else{
            //check for whether its a valid link
            const shortenLink= async () => {
            const res = await fetch (`https://api.shrtco.de/v2/shorten?url=${text}`)
            const data = await res.json()
            let my = data.result
            setLinks(prev => [my, ...prev])
            console.log(links)
            console.log(my)
            setText('')
            }
            shortenLink()
        }
    }

    function handleCopy(){
        navigator.clipboard.writeText(links.full_short_link)
        setButtonText("Copied")
    }

   

    const linkElem = 
        links.map((link, index) => {
            return(
                <div key={index}>
            <article>
                <h6>{link.original_link}</h6>
            </article>
            <article>
               <li>{link.full_short_link}</li>
               <li><button onClick={handleCopy}>{buttonText}</button></li>
            </article>
        </div>
            )
        })
    
   
    return(
        <section className='shortener'>
            <picture>
                <source media= "(min-width: 760px)" srcSet={bgDesktop}/>
                <img src={bgMobile} alt=''/>
            </picture>
            <form className='form'onSubmit={handleSubmit}>
                <div className='form-input'>
                    <input 
                    type="url"
                    placeholder='Shorten a link here'
                    value={text}
                    onChange={(e)=> setText(e.target.value)}/>
                    <button 
                    type='submit'
                    onClick={handleSubmit}>Shorten It!</button>
                </div>
            </form>
        
         {linkElem}
            
        </section>
    )
}