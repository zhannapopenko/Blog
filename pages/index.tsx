import React from "react";
import Page from "../components/layouts/Page";
import PostsList from "../components/PostsList";
import { getAllPosts } from "../lib/api";
import { Post } from "../lib/post";
import { devices } from "../sizes";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  styled,
  Box,
} from "@mui/material";

const HomePageContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoCardContent = styled(CardContent)`
  width: 50em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  @media ${devices.laptopS} {
    width: 43.7em;
  }
  @media ${devices.tabletM} {
    width: 34.3em;
    padding: 0.5em;
    flex-direction: column;
  }
  @media ${devices.tabletS} {
    width: 26.2em;
  }
  @media ${devices.mobileM} {
    width: 18.7em;
  }
  @media ${devices.mobileS} {
    width: 15.6em;
  } ;
`;

const TypographyContainer = styled(Typography)`
  @media ${devices.tabletM} {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.2em;
  }
  @media ${devices.mobileS} {
    font-size: 1em;
  } ;
`;

const CreatePostButton = styled(Button)`
  margin: 0 1em;
  @media ${devices.laptopS} {
    margin: 0 0.3em;
  }
  @media ${devices.tabletM} {
    margin-top: 1em;
  } ;
`;

const PostListContainer = styled(Container)`
  width: 50em;
  margin: 1em auto;
  @media ${devices.laptopS} {
    width: 43.7em;
  }
  @media ${devices.tabletM} {
    width: 34.3em;
    margin: 0.5em auto;
  }
  @media ${devices.tabletS} {
    width: 26.2em;
  }
  @media ${devices.mobileM} {
    width: 18em;
  }
  @media ${devices.mobileS} {
    width: 15em;
  } ;
`;

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <Page title="Zhanna Popenko">
      <HomePageContainer>
        <Card>
          <InfoCardContent>
            <Box>
              <TypographyContainer variant="h4">Hi there</TypographyContainer>
              <TypographyContainer variant="h6" color="text.secondary">
                Here you can read various posts and write your own post
              </TypographyContainer>
            </Box>
            <CreatePostButton variant="contained" href="/posts/new">
              New post
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
