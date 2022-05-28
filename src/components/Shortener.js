import React, {useState, useEffect} from 'react'
import bgMobile from '../images/bg-shorten-mobile.svg'
import bgDesktop from '../images/bg-shorten-desktop.svg'

//https://api.shrtco.de/v2/shorten?url=${urlText}`
export default function Shortener(){
    const [text, setText] = useState('')
    const [links, setLinks] = useState([])
    const [start, setStart] = useState(false)

    
    function handleSubmit(e){
        e.preventDefault()
        if(!text){
            alert("input is empty")
        } else{
            //check for whether its a valid link
            const shortenLink= async () => {
            const res = await fetch (`https://api.shrtco.de/v2/shorten?url=${text}`)
            const data = await res.json()
            setLinks(data.result)
            setText('')
            }
            shortenLink()
        }
    }

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
                    onSubmit={handleSubmit}>Shorten It!</button>
                </div>
            </form>

            <div>
                <article>
                    <h6>{links.original_link}</h6>
                </article>
                <article>
                   <li><button>{links.full_short_link}</button></li>
                   <li><button>Copy</button></li>
                </article>
            </div>
        </section>
    )
}