import React, { useState ,useEffect} from 'react';
import {Button,FormControl,InputLabel,Input,IconButton} from '@material-ui/core'
import Message from './Message'
import './App.css';
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import popcorn from "./popcorn.png";
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs
        .map(d=>
          ({id:d.id,data:d.data()})
        ))
    })
    
  }, [])

 
  useEffect(() => {
    const uname=prompt('Please Enter Your Name')
    setUsername(uname);
  }, []);

  const sendMessage=(event)=>{
    event.preventDefault();
    db.collection('messages')
    .add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    
    setInput('');
  }
  return (
    <div className="App">
      <section className="main__app">
      <div className="app_header">
       <img src={popcorn} className="app_imglogo"/>
       <h1 className="app_logoheader">Let's Chat</h1>
      </div>

      <div className="app_body">
        <form className="app__form">
          <FormControl className="app__formControls">
            
            <Input className="app__input" placeholder="Enter message..." value={input} onChange={e=>setInput(e.target.value)} />

            <IconButton className="app__iconButton" type="submit" onClick={sendMessage} disabled={!input}>
              <SendIcon />
            </IconButton>
          
          </FormControl>
        </form>

        <div   className="app_bodymsg">
            <FlipMove style={{innerHeight:"200px"}}>              
            {
              messages.map( ({id,data})=>(
                <Message key={id} message={data} username={username} />            
              ))
            }
          </FlipMove>
        </div>
        
      </div>
      </section>
    </div>
  );
}

export default App;
