import React, { Component } from 'react';
import HobbyItem from './hobbyItem';
import {
  Form, FormGroup,Input,Button,Container,Row,Col
} from 'reactstrap';
import {Link } from 'react-router-dom';


class Hobby extends Component {
  constructor(){
    super();
    this.state = {
      hobbies : []
    }
  }

  componentWillMount(){
    let userId = localStorage.getItem('userId');

    const self = this;
    if (userId == ""){

    }else{
      const self = this;
      fetch('/members/gethobby',{
          method : "POST",
          headers : {"Content-Type": "application/json"},
          body:JSON.stringify({
                  userId : userId   
          })
          } 
      ).then((res)=> (res.json()))
      .then(function(data){
        self.setState({hobbies : data.hobbies });
      });
    }
    }
  
   handleLogout(e){
    localStorage.setItem('userId',"");
    e.preventDefault();
  }

  handleSubmit(e){
    let hobby = document.getElementById('hobby').value;
    let userId = localStorage.getItem('userId');
    if (userId===""){

    }else{
      if (hobby==="") window.location.reload();
      fetch('/hobbies/addHobby',{
        method : "POST",
        headers : {"Content-Type": "application/json"},
              body:JSON.stringify({
                title : hobby,
                userId : userId   
              })
      })
      .then((res)=> (res.json()))
      .then(function(data){
        if (data.success == false){
          return(
            <Redirect onLoad = {window.location.reload()} to= {{
                pathname :"/"
            }} component ={Hobby}  />
          ); 
        }
      }); 
      window.location.reload();
      e.preventDefault();
    }



    }


    
  render() {  
    return (
      <Container>
      <br /> <br />
      
      <Row>
      <Button color ="dark" type="submit" value="add hobby" size= "sm" onClick={this.handleLogout}  > <Link to="/"> Logout</Link> </Button>
        <Col sm={{size: 'auto', offset :3 }} xs="4">
          <Form  inline onSubmit ={this.handleSubmit.bind(this)} > 
          <FormGroup inline>
          <Input placeholder="Input a new Hobby" type="text" id="hobby" />
          </FormGroup>
          <FormGroup>
          <Button color ="primary" type="submit" value="add hobby" size= "sm"  > Add Hobby </Button>
          </FormGroup>
          </Form>
        </Col>
      
     </Row>
    <HobbyItem hobby= {this.state.hobbies}/>
      </Container>
    
    )
  }
}


export default Hobby;