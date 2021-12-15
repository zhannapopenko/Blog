import React from "react";
import { useRouter } from "next/router";
import Page from "../../components/layouts/Page";
import { createComment, getPost } from "../../lib/api";
import { Post } from "../../lib/post";
import { Comment } from "../../lib/comment";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  TextField,
  Typography,
} from "@mui/material";


 const PostContainer = styled(Container)`
//   min-width: 80%;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 2em;
 `;

const NewCommentContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1em;
`;

const NewCommentButtonContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  margin-top: 0.5em;
`;

const TitleContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const TitleTypography = styled(Typography)`
  width: 100%;
  height: 100%;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  text-align: center;
  font-size: 2.22222em;
  color: #2f313d;
  font-weight: 700;
  line-height: 1.2;
  text-rendering: optimizeLegibility;
`;

const CommentsTypography = styled(Typography)`
  width: 100%;
  height: 100%;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: #2f313d;
  font-weight: 700;
  line-height: 1.2;
  text-rendering: optimizeLegibility;
`;

const PostBodyTypography = styled(Typography)`
  width: 100%;
  min-height: 6em;
  max-height:100%;
  text-align: center;
  line-height: 1.9em;
  color: #535358;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 112.5%;
  font-weight: 400;
`;

const CustomizedDivider = styled(Divider)`
  margin: 1em 0;
`;

interface CommentsFormFields {
  newComment: string;
}

const PostItem = () => {
  const router = useRouter();
  const postId = router.query.postId! as string;
  if (!postId) {
    return null;
  }
  const [post, setPost] = React.useState<Post>();

  React.useEffect(() => {
    getPost(postId).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <Page title={post ? post.title : "Post"}>
      <PostContainer>
        <Card sx={{ minWidth: "80%" }}>
          <CardContent>
            <TitleContainer>
              <Button variant="outlined" href="/">
                <Icon color="primary">arrow_back</Icon>
              </Button>
              <TitleTypography variant="h2">{post?.title}</TitleTypography>
            </TitleContainer>
            <CustomizedDivider />
            <PostBodyTypography variant="body1" color="text.secondary">
              {post?.body}
            </PostBodyTypography>
            <CustomizedDivider />
            <CommentsTypography variant="h6">
              Comments: {post?.comments?.length}
            </CommentsTypography>
            <Formik
              initialValues={{
                newComment: "",
              }}
              onSubmit={(
                values: CommentsFormFields,
                { setSubmitting, resetForm }: FormikHelpers<CommentsFormFields>
              ) => {
                if (post && values.newComment) {
                  const comment = new Comment();
                  comment.body = values.newComment;
                  comment.postId = post?.id;

                 createComment(comment).then(() => {
                    getPost(postId).then((response) => {
                      setPost(response.data);
                    });
                  });
                  setSubmitting(false);
                  resetForm( values = "");
                } else {
                  console.log("Post or comment not found.");
                }
              }}>
              <Form>
                <NewCommentContainer>
                  <Field
                    id="newComment"
                    name="newComment"
                    label="Add Comment"
                    multiline
                    rows={3}
                    as={TextField}
                    placeholder="Add Comment"
                  />
                  <NewCommentButtonContainer>
                    <Button type="submit" variant="contained">
                      Send
                    </Button>
                  </NewCommentButtonContainer>
                </NewCommentContainer>
              </Form>
            </Formik>
            <List>
              <Divider />
              {post?.comments.map((comment) => {
                return (
                  <Box key={post.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemButton component="p">
                        <ListItemText primary={comment.body} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </Box>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </PostContainer>
    </Page>
  );
};

export default PostItem;
