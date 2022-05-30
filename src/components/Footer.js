import React from "react"
import logo from "../images/logo.svg"
import instagram from "../images/icon-instagram.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import facebook from "../images/icon-facebook.svg"



export default function Footer() {
    return(
        <footer className="footer" >
            <section className="f-div center">
                <article>
                    <img src={logo} alt=""/>
                </article>
            </section>
            <article className="f-div1 center">
                <h3>Features</h3>
                <ul className="flex-col">
                    <li>Link shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </article>

            <article className="f-div2 center">
                <h4>Resources</h4>
                <ul className="flex-col">
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </article>

            <article className="f-div3 center">
                <h4>Company</h4>
                <ul className="flex-col">
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </article>

            <article className="f-div4 center">
                <ul className="flex">
                    <li><img src={facebook} alt=""/></li>
                    <li><img src={twitter} alt=""/></li>
                    <li><img src={pinterest} alt=""/></li>
                    <li><img src={instagram} alt=""/></li>
                </ul>
            </article>
        </footer>
    )
 }