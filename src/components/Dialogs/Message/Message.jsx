import s from './../Dialogs.module.css';

const Message = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message;
