import React from "react";
import Page from "../components/layouts/Page";
import PostsList from "../components/PostsList";
import { getAllPosts } from "../lib/api";
import { Post } from "../lib/post";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  styled,
} from "@mui/material";

const HomePageContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InfoCardContent = styled(CardContent)`
  width: 50em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

const CreatePostButton = styled(Button)`
  margin-left: 3em;
`;

const PostListContainer = styled(Container)`
  width: 50em;
  margin-top: 2em;
`;

interface Props {
  posts: Post[];
};

const Home = ({ posts }: Props) => {

  return (
    <Page title="Zhanna Popenko">
      <HomePageContainer>
        <Card>
          <InfoCardContent>
            <div>
              <Typography variant="h4" component="div">
              Hi there
              </Typography>
              <Typography variant="h6" color="text.secondary">
              Here you can read various posts and write your own post
              </Typography>
            </div>
            <CreatePostButton variant="contained" href="/posts/new">
              Create new post
            </CreatePostButton>
          </InfoCardContent>
        </Card>

        <PostListContainer>
          <PostsList posts={posts as Post[]} />
        </PostListContainer>
      </HomePageContainer>
    </Page>
  );
};

export default Home;

export async function getStaticProps(context: any) {
  const res = await getAllPosts();
  const posts = res.data?.reverse();
  return {
    props: { posts },
  };
}