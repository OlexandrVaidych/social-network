import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='How are you?' likesCount='5' />
                <Post message='What do you do?' likesCount='72' />
            </div>
        </div>
    )
}

export default MyPosts;
