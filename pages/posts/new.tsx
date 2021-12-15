import * as React from "react";
import Router from "next/router";
import { Formik, Field, Form, FormikHelpers } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Icon,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Page from "../../components/layouts/Page";
import { createPost } from "../../lib/api";
import { Post } from "../../lib/post";

interface Values {
  title: string;
  body: string;
}

const PostContainer = styled(Container)`
  min-width: 80%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
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

const CustomizedDivider = styled(Divider)`
  margin: 1em 0 1em 0;
`;

const ButtonsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewPost = () => {
  return (
    <Page title="Create new post">
      <PostContainer>
        <Card sx={{ minWidth: "80%" }}>
          <CardContent>
            <TitleContainer>
              <Button variant="outlined" href="/">
                <Icon color="primary">arrow_back</Icon>
              </Button>
              <TitleTypography variant="h1">Create new post</TitleTypography>
            </TitleContainer>
            <CustomizedDivider />
            <Formik
              initialValues={{
                title: "",
                body: "",
              }}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                if (values.title) {
                  const newPost = new Post();
                  newPost.title = values.title;
                  newPost.body = values.body;

                  createPost(newPost).then(() => {
                    newPost.title = "";
                    newPost.body = "";
                    Router.push("/");
                  });
                } else {
                  alert("Title not entered.");
                }

                setSubmitting(false);
              }}>
              <Form>
                <Container>
                  <PostContainer>
                    <Field
                      sx={{ marginBottom: "1em", minWidth: "70%" }}
                      id="title"
                      name="title"
                      label="Title"
                      as={TextField}
                      placeholder="Title"
                    />

                    <Field
                      sx={{ marginBottom: "1em", minWidth: "70%" }}
                      id="body"
                      name="body"
                      label="Content"
                      multiline
                      rows={4}
                      as={TextField}
                      placeholder="Content"
                    />
                  </PostContainer>

                  <ButtonsContainer>
                    <Button type="submit">Create</Button>
                    <Button href="/">Cancel</Button>
                  </ButtonsContainer>
                </Container>
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </PostContainer>
    </Page>
  );
};

export default NewPost;
