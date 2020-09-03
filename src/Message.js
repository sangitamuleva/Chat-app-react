import React,{forwardRef} from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import './Message.css';

const Message= forwardRef(({message,username},ref)=> {
    const isUser= username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
          
            {/* <Card className={isUser?"message_usercard":"message_guestcard"}>
                <CardContent>
                <Typography  color="textSecondary" componant="h5">
                {!isUser && `${message.username || 'Unknown user'} :`}{message.message}
                </Typography>
                
                </CardContent>
            </Card> */}
            
            <div className="message__username">
                    <span> {!isUser && `${message.username || 'Unknown user'} `}</span>
                   
            </div>
            <div  className={isUser?"message_usercard":"message_guestcard"}>
                {message.message}
            </div>
        </div>
    )
})

export default Message
