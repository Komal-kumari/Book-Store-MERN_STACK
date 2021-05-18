import React from 'react'
import './AboutScreen.css'

const AboutScreen = () => {
    return(
        <div style={{textAlign:"center"}} className="aboutstyl">
            <h2 >Welcome to Fliker Book Store!</h2><p></p>
            <p >This Bookstore is an online bookstore with a mission to financially support local, independent bookstores.</p>
            <p></p>
            <p >We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover
                 new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also anchors for our downtowns 
                 and communities. As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your 
                 books and support bookstores at the same time.</p>
                <p></p>
            <p >
            Do you have questions? Any Book you want to be Added. <a href="/contact"> Contact Us.</a>
            </p>
        </div>
    )
}

export default AboutScreen