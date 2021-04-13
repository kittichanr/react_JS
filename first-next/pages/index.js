import axios from 'axios'
import Link from 'next/link'

const Index = ({ posts }) => (
    <div>
        <h1>Our index page</h1>
        {posts.map(post => {
            return (
                <li key={post.id}>
                    <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })}
    </div>
)

// run in server side
Index.getInitialProps = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const { data } = res
    return { posts: data }
}


export default Index