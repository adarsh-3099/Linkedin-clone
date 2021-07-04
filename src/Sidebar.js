import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <p className="sidebar__statNumber">#</p>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://scontent.fccu19-1.fna.fbcdn.net/v/t1.6435-9/123548345_185434316454884_76501156758401712_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=PtvuC07rLd0AX8IarHQ&_nc_oc=AQkM5R3ozS3ASFv0kIr59j9IBfb0ZF3m3erMuRTQEKVhGEeh4NdVgKIJCTtVbiyto8M&_nc_ht=scontent.fccu19-1.fna&oh=aa976155478019d23a56eef1528ad748&oe=60E14AE7" />
                <Avatar className="sidebar__avatar" src={user.photoUrl}/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">400</p>
                </div>
                <div className="sidebar__stat">
                    <p>Viewes On Post</p>
                    <p className="sidebar__statNumber">1000</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React Js')}
                {recentItem('Data Science')}
                {recentItem('BlockChain')}
                {recentItem('Artificail Intelligence')}
            </div>
        </div>
    )
}


export default Sidebar
