import type { NextPage } from "next";
import React from "react";
import Page from "../components/layouts/Page";
import PostsList from "../components/PostsList";
import { getAllPosts } from "../lib/api";
import { Post } from "../lib/post";
import {
  Card,
  CardContent,
  Typography,
  Link,
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

const Home: NextPage = () => {
  const [posts, setPosts] = React.useState<Post[]>();

  React.useEffect(() => {
    getAllPosts().then((response) => {
      setPosts(response.data?.reverse());
    });
  }, []);

  return (
    <Page title="Zhanna Popenko">
      <HomePageContainer>
        <Card>
          <InfoCardContent>
            <div>
              <Typography variant="h3" component="div">
                Hi, I am Zhanna
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Front-End Developer
              </Typography>
            </div>
            <CreatePostButton variant="contained" href="/posts/new">
              Create new post
            </CreatePostButton>
          </InfoCardContent>
        </Card>

        <PostListContainer>
          <PostsList posts={posts} />
        </PostListContainer>
      </HomePageContainer>
    </Page>
  );
};

export default Home;
