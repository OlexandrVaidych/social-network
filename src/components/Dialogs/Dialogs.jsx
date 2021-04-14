import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        Sasha
                    </div>
                    <div className={s.dialog}>
                        Misha
                    </div>
                    <div className={s.dialog}>
                        Vasya
                    </div>
                    <div className={s.dialog}>
                        Bodya
                    </div>
                    <div className={s.dialog}>
                        Roma
                    </div>
                    <div className={s.dialog}>
                        Vanya
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
