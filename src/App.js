import React, {useState} from 'react'
import UserForm from './Compoents/Users/UserForm';
import UserList from './Compoents/Users/UserList';

function App() {
  const [userList, setUsersList]=useState([])
  const addUserHandler=((userName,userAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:userName,age:userAge,id:Math.random().toString()}]
    })
  })
  return (
    <div>
      <UserForm onUserForm={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
