import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";
import styled from "styled-components";

export default function Home({ posts }) {
  return (
    <Wrapper>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </Wrapper>
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
  margin: auto;
  background-color: grey;
`;
