
import {Navbar,NavDropdown,Button,Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import footerStyles from '../../styles/Footer/Footer.module.css'






function Footer() {
  return (
    <div className={footerStyles.main}>

         <a href="https://gomadesign.netlify.app" target="_blank" rel="noreferrer" >All rights reserved || ma-go</a>


    </div>
  )
}

export default Footer




