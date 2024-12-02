export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const posts = await res.json();

  return { props: { posts } };
}

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
