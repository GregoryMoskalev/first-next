import axios from "axios";

const Index = ({posts}) => {
  return (
    <div>
      <h1>Our Index Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {posts: res.data};
};

// import React, {Component} from "react";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static async getInitialProps() {
//     console.log("fetching your data in getInitialProps");
//     return {};
//   }
//   render() {
//     return (
//       <div>
//         <h1>Our Index Page</h1>
//       </div>
//     );
//   }
// }

export default Index;
