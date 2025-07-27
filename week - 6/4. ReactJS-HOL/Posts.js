import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }


  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An unexpected error occurred: " + error.message);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2>Error: {error}</h2>;
    }

    return (
      <div>
        <h2>All Blog Posts</h2>
        {posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
