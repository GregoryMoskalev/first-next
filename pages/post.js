const Post = ({id}) => <h1>Post Page # {id}</h1>;

Post.getInitialProps = async ({query}) => {
  return query;
};

export default Post;

// import {withRouter} from "next/router";

// const Post = (props) => <h1>Post Page # {props.router.query.id}</h1>;

// export default withRouter(Post);
