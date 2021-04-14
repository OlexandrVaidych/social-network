import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    const dialogsData = [
        {id: '1', name: 'Sasha'},
        {id: '2', name: 'Misha'},
        {id: '3', name: 'Vasya'},
        {id: '4', name: 'Bodya'},
        {id: '5', name: 'Roma'},
        {id: '6', name: 'Vanya'},
    ]

    const messagesData = [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Chao'},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;
