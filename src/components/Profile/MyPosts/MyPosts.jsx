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
                <Post message='How are you?' count='5' />
                <Post message='What do you do?' count='7' />
            </div>
        </div>
    )
}

export default MyPosts;
