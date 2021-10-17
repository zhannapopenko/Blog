import { Comment } from "./comment";

export class Post {
  public id!: number;
  public title!: string;
  public body!: string;
  public comments!: Comment[];
}
