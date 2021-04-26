import axios from "axios";

const Post = ({id, comments}) => (
  <div>
    <h1>Comments for post #{id}</h1>
    {comments.map((comment) => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);
const Comment = ({email, body}) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ({query}) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`);
  return {...query, comments: res.data};
};

export default Post;

// import {withRouter} from "next/router";

// const Post = (props) => <h1>Post Page # {props.router.query.id}</h1>;

// export default withRouter(Post);
