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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Sasha'/>
                <DialogItem id='2' name='Misha'/>
                <DialogItem id='3' name='Vasya'/>
                <DialogItem id='4' name='Bodya'/>
                <DialogItem id='5' name='Roma'/>
                <DialogItem id='6' name='Vanya'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='How are you?'/>
                <Message message='Chao'/>
            </div>
        </div>
    )
}

export default Dialogs;
