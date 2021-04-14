import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postData = [
        {id: '1', post: 'Hello', likesCount:'5'},
        {id: '2', post: 'How are you?', likesCount:'72'},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].post} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].post} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;
