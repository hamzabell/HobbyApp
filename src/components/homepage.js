import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {
    Form,Button,Container
 } from 'reactstrap';



class Homepage extends Component {
  render() {
    return (
       
     <Container>
          <br /> <br />
         <h1 className= "display-4"> Welcome to the Hobbinator </h1>
         <Form inline>
         <Button color ="light" type="submit" value="add hobby" size= "sm"  > <Link to="/login"> Login</Link>  </Button>
         <Button color ="light" type="submit" value="add hobby" size= "sm"  > <Link to="/register"> Signup</Link>  </Button>
         </Form>
     </Container>
    );
  }
}

export default Homepage;
