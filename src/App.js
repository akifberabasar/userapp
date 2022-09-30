
import React, { Component} from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';


class  App extends Component{
  

 deleteUser(id){
  let updatedUsers = this.state.users;

  updatedUsers = updatedUsers.filter(user => user.id !== id);

  this.setState({
    users: updatedUsers
  })
 }

 constructor(props) {
  super(props);

  this.state = {
    users: [
      {
        id : 1,
        name : "Mustafa Murat Coşkun",
        email: "coskun@gmail.com"
      }, 
      {
        id : 2,
        name : "Oğuz Artıran",
        email: "oguz@gmail.com"
      },
      {
        id : 3,
        name : "Tolgahan Gencer",
        email: "gencer@gmail.com"
      }
    ] 
  };
  this.deleteUser = this.deleteUser.bind(this);
  this.AddUser = this.AddUser.bind(this);
 }
  AddUser(newUser) {
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);

    this.setState({
      users: updatedUsers
    })
  }

  render() {
   return (
     <div className="container">
        <h4>User App</h4>
        <hr />
        <AddUser AddUser={this.AddUser} />
        <hr />
        <Users deleteUser = {this.deleteUser}     users = {this.state.users} />
       
      </div>
    );
   }
  
}

export default App;
