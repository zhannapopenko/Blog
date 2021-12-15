import React from "react";
import { Post } from "../lib/post";
import {
  Button,
  Divider,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";


const PostItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.55556rem;
  color: #2f313d;
  text-align: left;
  font-weight: 700;
  line-height: 1.2;
  padding: 0.5rem;
  text-rendering: optimizeLegibility;
`;

const TitleTypography = styled(Typography)`
  width: 100%;
  height: 100%;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.55556rem;
  color: #2f313d;
  text-align: left;
  font-weight: 700;
  line-height: 1.2;
  text-rendering: optimizeLegibility;
  margin: 0.5em 0;
  a:hover {
    color: grey;
  };
`;

const PostBodyTypography = styled(Typography)`
  width: 100%;
  height: 100%;
  line-height: 1.9em;
  color: #535358;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.8em;
  font-weight: 400;
  height: 4em;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0.3em;
`;

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  if (!posts) {
    return <p>There are no posts here.</p>;
  }

  return (
    <List>
      <Divider />
      { posts.filter(post => post.title && post.body).map((post) => {
        return (
          <div key={post.id}>
            <PostItem >
              <TitleTypography>
                <a href={"/posts/" + post.id}>{post.title}</a>
              </TitleTypography>
              <PostBodyTypography>{post.body}</PostBodyTypography>
              <ReadButtonContainer>
                <Button variant="outlined" href={"/posts/" + post.id}>
                  Continue Reading
                </Button>
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
