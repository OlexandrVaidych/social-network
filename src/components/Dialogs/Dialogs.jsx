import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = [
        {id: '1', name: 'Sasha'},
        {id: '2', name: 'Misha'},
        {id: '3', name: 'Vasya'},
        {id: '4', name: 'Bodya'},
        {id: '5', name: 'Roma'},
        {id: '6', name: 'Vanya'},
    ]

    let messages = [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Chao'},
    ]

    let dialogsElements =
        dialogs.map(d => (<DialogItem id={d.id} name={d.name}/>))

    let messagesElements =
        messages.map(m => (<Message message={m.message}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
