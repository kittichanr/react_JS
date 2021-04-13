import axios from 'axios';
import { withRouter } from 'next/router'

const Post = ({ router, comments }) => {
    const { id } = router.query
    return (
        <div>
            <h1>You are looking at post #{id}</h1>
            {comments.map(comment => {
                return <Comment {...comment} key={comment.idÎ} />
            })}
        </div>
    )
}

const Comment = ({ email, body }) => (
    <div>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
)

// run in server side
Post.getInitialProps = async ({ query }) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
    const { data } = res
    return { ...query, comments: data }
}


export default withRouter(Post)