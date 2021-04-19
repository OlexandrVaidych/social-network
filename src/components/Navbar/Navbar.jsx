import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavbarItem from "./NavbarItem/NavbarItem";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Navbar = (props) => {
    let navbarElements =
        props.state.friends.map(d => (<NavbarItem id={d.id} nameFriend={d.friend}/>))

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={`${s.item} ${s.settings}`}>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <div className={s.item_friends}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
            </div>
            <div className={s.friends}>
                {navbarElements}
            </div>
        </div>
    </nav>
}

export default Navbar;
