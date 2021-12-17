import React from "react";
import { Post } from "../lib/post";
import { devices } from "../sizes";
import {
  Button,
  Divider,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const NoPostsTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1.2em;
`;

const PostItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.5em;
  color: #2f313d;
  text-align: left;
  font-weight: 700;
  line-height: 1.2em;
  padding: 0.5em;
  text-rendering: optimizeLegibility;
`;

const TitleTypography = styled(Typography)`
  width: 100%;
  height: 100%;
  font-size: 1.2em;
  color: black;
  text-align: left;
  font-weight: 700;
  line-height: 1em;
  text-rendering: optimizeLegibility;
  margin: 0.5em 0;
  a:hover {
    color: grey;
  }
  @media ${devices.tabletM} {
    font-weight: 500;
  }
  @media ${devices.mobileM} {
    font-weight: 400;
    font-size: 0.9em;
  } ;
`;

const PostBodyTypography = styled(Typography)`
  width: 100%;
  height: 100%;
  line-height: 1.8em;
  color: #535358;
  font-size: 0.8em;
  font-weight: 400;
  height: 4em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${devices.tabletM} {
    font-weight: 300;
    line-height: 1.3em;
    -webkit-line-clamp: 3;
  }
  @media ${devices.mobileM} {
    font-size: 0.7em;
  } ;
`;

const ReadButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0.3em;
`;

const ContinueReadingButton = styled(Button)`
  font-size: 0.6em;
  @media ${devices.tabletS} {
    font-size: 0.5em;
  }
  @media ${devices.mobileM} {
    font-size: 0.4em;
  } ;
`;

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  if (!posts) {
    return <NoPostsTypography>There are no posts here.</NoPostsTypography>;
  }

  return (
    <List>
      <Divider />
      {posts
        .filter((post) => post.title && post.body)
        .map((post) => {
          return (
            <div key={post.id}>
              <PostItem>
                <TitleTypography>
                  <a href={"/posts/" + post.id}>{post.title}</a>
                </TitleTypography>
                <PostBodyTypography>{post.body}</PostBodyTypography>
                <ReadButtonContainer>
                  <ContinueReadingButton
                    variant="outlined"
                    href={"/posts/" + post.id}
                  >
                    Continue Reading
                  </ContinueReadingButton>
                </ReadButtonContainer>
              </PostItem>
              <Divider />
            </div>
          );
        })}
    </List>
  );
};

export default PostsList;
