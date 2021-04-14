import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {id: '1', post: 'Hello', likesCount: '5'},
        {id: '2', post: 'How are you?', likesCount: '72'},
    ]

    let postsElements =
        posts.map(p => (<Post post={p.post} likesCount={p.likesCount}/>))

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
