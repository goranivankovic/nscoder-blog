import React, { Component } from 'react'
import {Navbar,NavDropdown,Button,Container,Offcanvas,Nav,Form,FormControl,FormGroup } from 'react-bootstrap'
import Link from 'next/link'
import router from 'next/router'
import navStyle from '../../styles/Nav/Nav.module.css'


export default class Navic extends Component {
    constructor(props){
        super(props)

        this.state={
            num:1,
         
        }
        this.getNumber=this.getNumber.bind(this)
        this.submitNumber=this.submitNumber.bind(this)

    }
 async   getNumber(a){

     await   this.setState({
            num:a.target.value
        })
    
      

    }

   async submitNumber(b){

       try{
           b.preventDefault()
  
         router.push(`/blog/${this.state.num}`)


       }catch(err){
           console.log(err);
       }

   
   }



    render() {
 
        return (
            <div className={navStyle.nav}>


<Navbar bg='dark' variant="dark" expand={false}>
  <Container fluid>
 <Navbar.Brand><Link href="/"><span className={navStyle.headline}>Next.js Blog </span></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
    
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-5 pe-3">
        
          <NavDropdown title="Menu" className={navStyle.navitems}>
    
  
    <NavDropdown.Item> <Link href="/"><span className={navStyle.navitems}> Home</span></Link></NavDropdown.Item>
    <NavDropdown.Divider />

    <NavDropdown.Item> <Link href="/blog/developers"><span className={navStyle.navitems}>For Developors</span></Link></NavDropdown.Item>

    <NavDropdown.Divider />

          <NavDropdown.Item><Link href="/blog/1"><span className={navStyle.navitems}>First Place</span></Link> </NavDropdown.Item>
            <NavDropdown.Divider />
    
            <NavDropdown.Item><Link href="/blog/2"><span className={navStyle.navitems}>Second Place</span></Link></NavDropdown.Item>
            <NavDropdown.Divider /> 
         
    
           <NavDropdown.Item><Link href="/blog/3"><span className={navStyle.navitems}>Third Place</span></Link> </NavDropdown.Item>
 
            <NavDropdown.Divider />

            <NavDropdown.Item><Link href="/blog/top5"><span className={navStyle.navitems}> Top Five Ranking</span></Link>  </NavDropdown.Item>
            <NavDropdown.Divider />
     
            <NavDropdown.Item ><Link href="/blog/top10"><span className={navStyle.navitems}> Top Ten Ranking</span></Link>  </NavDropdown.Item> 
         
          </NavDropdown>
        </Nav>
        <br></br>
        <Form className="d-flex" onSubmit={this.submitNumber}>
            <FormGroup>
      
          <FormControl
            type="number"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            
            max={10}
            min={1}
            
            onChange={this.getNumber}
          />
        
          <Form.Text className={navStyle.searchText}>Select footballer betwen number 1 -10</Form.Text>
       
          <br></br>
          <Form.Text></Form.Text>
          <br></br>
          <button className={navStyle.button} type="submit">Search</button>
          </FormGroup>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
                
            </div>
        )
    }
}
