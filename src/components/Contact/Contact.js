import { useState } from 'react'
import './Contact.css'
function Contact(props){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')

    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const phoneHandler=(event)=>{
        setPhone(event.target.value)
    }
    async function formSubmit(event){
        event.preventDefault()
        const movie={
            name:name,
            email:email,
            phone:phone
        }
        
        const response=await fetch('https://hris-9fdcd-default-rtdb.firebaseio.com/contacts.json',{
            method:'POST',
            body:JSON.stringify(movie)
        })
        const data= await response.json()
        console.log(data)
    }
    
    return(
        <form className="form" onSubmit={formSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" onChange={nameHandler} value={name}></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={emailHandler} value={email}></input>
            <label htmlFor="phone">Phone</label>
            <input id='phone' type='number' onChange={phoneHandler} value={phone}></input>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Contact
