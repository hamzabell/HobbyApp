import React, { Component } from 'react';
import Hobby from './hobby';
import {Redirect,Link } from 'react-router-dom';
import {
    Form, FormGroup,Input, Label,Button,Container
 } from 'reactstrap';

class Loginform extends Component {
    constructor(){
        super();
        this.state ={
            isLoggedin  : false,
            userId : "",
            move : false
        }

    }


    handleSubmit(e){
        let username = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        const self = this;
        fetch('/members/login',{
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body:JSON.stringify({
                name : username,
                password : password
            }) 
        }).then(res => res.json())
        .then(function (data){
           if (data.success === true){   
               console.log(data.name);
               localStorage.setItem('userId',data.userId);
               self.setState({move:!self.state.move});
           }else{
               console.log(data.message);
           }
        });
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
      <Label for="exampleEmail"> Username </Label><br/>
      <Input type="text" id="name" />
      </FormGroup> 

       <FormGroup>
       <Label for="examplePassword"> Password </Label><br/>
      <Input type="password" id="password"  />
      </FormGroup>

      <FormGroup>
      <Button color ="danger" type="submit" value="Log in"  > Log in </Button>
      </FormGroup>
    </Form>
    <p className="mb4">Dont have an account ? <Link to="/register"> signup</Link></p>
      </Container>
    );
  }
}

export default Loginform;