const Post = ({id}) => <h1>Post Page # {id}</h1>;

Post.getInitialProps = async ({query}) => {
  console.log(query);
  return query;
};

export default Post;
