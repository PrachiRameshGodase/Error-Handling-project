import React, {useState} from 'react'
import Card from "../UI/Card"
import Button from "../UI/Button"
import classes from "./UserForm.module.css"
import ErrorModale from '../UI/ErrorModale';


function UserForm(props) {
    const [enteredUserName,setenteredUserName]=useState('');
    const [enteredAge,setenteredAge]=useState('');
    const [error, setError]=useState()

    const userNameChangeHandler=(event)=>{
        setenteredUserName(event.target.value)
    }

    const ageChangeHandler =(event)=>{
        setenteredAge(event.target.value)
    }

    const addSubmitHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0 ||enteredAge.trim().length===0){
          setError({
            title:"Invalid input",
            message:"Please enter a valid name and age (non-empty values)."
          })
         return; 
        }
        if(+enteredAge<1){
          setError({
            title:"Invalid age",
            message:"Please enter a valid age (>0)."
          })
         return;
        }

        props.onUserForm(enteredUserName,enteredAge);

        setenteredUserName("");
        setenteredAge("");
    }
    const errorHandler =()=>{
      setError(null)
    }
  return (
    <div>
    { error && <ErrorModale title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addSubmitHandler}> 
      <label htmlFor='username'>UserName</label>
        <input 
        type='text' 
        id="username"
        value={enteredUserName}
        onChange={userNameChangeHandler}
        />
        <label htmlFor='age'>Age(Years)</label>
        <input
         type='number'
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
    </div>
  )
}

export default UserForm
