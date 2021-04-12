import s from './Post.module.css';

const Post = () => {
    return(
            <div className={s.item}>
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt=""/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
    )
}

export default Post;
