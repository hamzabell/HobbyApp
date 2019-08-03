import React, { Component } from 'react';
import {
  Table,
  Button,
  Form
} from 'reactstrap';



class App extends Component {
  handleDelete(id){
    fetch('/members/delete',{
      method : 'POST',
      headers : {"Content-Type": "application/json"},
      body:JSON.stringify({
          id : id
      }) 
    }).then(res => res.json())
  .then(function (data){
  
  })
  window.location.reload();
  }

  render() {
    let hobbyItem;
    if (this.props.hobby){
      hobbyItem = this.props.hobby.map(hobby =>{
        console.log(hobby.hobbies);
        return <tr key={hobby.hobbies}><td> {hobby.hobbies} </td>
        <Form inline>
        <Button onClick={this.handleDelete.bind(this,hobby.id)} color="danger">Delete</Button>
        </Form>
        </tr>
      })

    }
    return (
      <div className="App">
      <br />
      <Table > 
        <thead>
          <th scope ="row">
            <tr sm={{offset: 3}}> Hobbies Addded </tr>
          </th>
        </thead>
        <tbody>
        {hobbyItem}
        </tbody>
      </Table>
      
      </div>
    );
  }
}

export default App;