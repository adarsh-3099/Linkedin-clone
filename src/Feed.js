import React, { useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOptions from './InputOptions'
import Post from './Post';
import { useState } from 'react';
import firebase from 'firebase'

import FlipMove from 'react-flip-move';

import { db } from './firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {

    const user = useSelector(selectUser)

    const [input,setInput] = useState("")
    const [posts,setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
        .orderBy('timeStamp','desc')
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = (event) =>{
        event.preventDefault();

        db.collection('posts')
        .add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

    console.log(input)

    return (
        <div className="feed">
            <div className="input__Container">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={sendPost}>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onSubmit={sendPost} type="submit">Send</button>
                    </form>
                </div>    
                <div className="input__Options">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Article" color="75c1ce" />
                </div>
            </div>

            <FlipMove>
            {
                posts.map(( { id,data : { name,description,message,photoUrl }} ) =>(
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))
            }
            </FlipMove>
        </div>
    )
}

export default Feed
