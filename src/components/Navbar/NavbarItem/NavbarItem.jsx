import s from './NavbarItem.module.css';
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (
            <div className={s.friend}>
                    <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
                    <div>
                        <NavLink to={path}>{props.nameFriend}</NavLink>
                    </div>
            </div>
    )
}

export default NavbarItem;
