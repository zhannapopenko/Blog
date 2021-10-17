import { AxiosResponse } from "axios";
import http from "./http-common";
import { Post } from "./post";
import { Comment } from "./comment";

export function getAllPosts(): Promise<AxiosResponse<Post[], any>> {
  return http.get("/posts");
}

export function getPost(id: string): Promise<AxiosResponse<Post, any>> {
  return http.get(`/posts/${id}?_embed=comments`);
}

export function createPost(post: Post): Promise<AxiosResponse<Post, any>> {
    return http.post('/posts', post);
}

export function createComment(comment: Comment): Promise<AxiosResponse<Comment, any>> {
    return http.post('/comments', comment);
}
