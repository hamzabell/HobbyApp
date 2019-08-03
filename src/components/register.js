import React, { Component } from 'react';
import {Redirect,Link } from 'react-router-dom';
import Hobby from './hobby';
import {
    Form, FormGroup,Input, Label,Button,Container
 } from 'reactstrap';



class Register extends Component {
    state = {
        userId  : "",
        move : false
    }
    handleSubmit(e){
        let username = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let number = document.getElementById('number').value;
        const self = this;

        fetch("/members/create",{
            method : "POST",
            header : {"Content-Type" : "application/json"},
            body : JSON.stringify({
                name : username,
                password : password,
                email : email,
                number : number
            })
        })
        .then ((res)=> (res.json()))
        .then (function(data){
            if (data.success){
                console.log(data.name);
                localStorage.setItem('userId',data.userId);
                self.setState({move:!self.state.move})
                console.log("User Account Created");
            }else {
                console.log("Somthing is Wrong");
            }
        })
        e.preventDefault();

    }
  render() {
    if(this.state.move === true){
        return(
          <Redirect onLoad = {window.location.reload()} to= {{
              pathname :"/hobby",
              state : {userId : this.state.userId}
          }} component ={Hobby}  />
        ); 
          
    }
    return (
      <Container>
      <br /><br />
      <Form onSubmit ={this.handleSubmit.bind(this)}> 
      <FormGroup>
      <Label for="exampleEmail"> Username </Label><br />
      <Input type="text" id="name" />
      </FormGroup> 

       <FormGroup>
       <Label for="examplePassword"> Password </Label><br />
      <Input type="password" id="password"  />
      </FormGroup>

       <FormGroup>
       <Label for="examplePassword"> E-mail </Label><br />
      <Input type="email" id="email"  />
      </FormGroup>

       <FormGroup>
       <Label for="examplePassword">Phone Number </Label><br />
      <Input type="number" id="number"  />
      </FormGroup>

      <FormGroup>
      <Button color ="danger" type="submit" value="Log in"  > Sign up </Button>
      </FormGroup>
      <p className="mb4">Already have an account ? <Link to="/login"> Login</Link></p>
    </Form>
      </Container>
    );
  }
}

export default Register;
