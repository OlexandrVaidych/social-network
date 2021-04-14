import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Vasya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Bodya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Roma</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Vanya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Chao</div>
            </div>
        </div>
    )
}

export default Dialogs;
