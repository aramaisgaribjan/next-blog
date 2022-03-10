import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <>
      <Wrapper>
        Í<h1>My Blog</h1>
        <p>Lorem Ipsum…</p>
        <h2>Posts</h2>
        <PostList posts={posts} />
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
