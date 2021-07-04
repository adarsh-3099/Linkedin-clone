import React,{ forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';

import InputOptions from './InputOptions';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef(({ name,description,message,photoUrl },ref) => {

    const user = useSelector(selectUser)

    return (
        <div ref={ref} className="post">
            <div className="post__Header">
                <Avatar src={photoUrl}/>
                <div className="post__Info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__Body">
                <p>{message}</p>
            </div>

            <div className="post__Buttons">
                <InputOptions Icon={ThumbUpAltIcon} title="Like" color="Gray" />
                <InputOptions Icon={CommentIcon} title="Comment" color="Gray" />
                <InputOptions Icon={ShareIcon} title="Share" color="Gray" />
                <InputOptions Icon={SendIcon} title="Send" color="Gray" />
            </div>
        </div>
    )
})

export default Post
