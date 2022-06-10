import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { User } from "../../../models/User";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostReactionsArgs } from "./args/PostReactionsArgs";
export declare class PostRelationsResolver {
    Author(post: Post, ctx: any): Promise<User>;
    Comments(post: Post, ctx: any, args: PostCommentsArgs): Promise<Comment[]>;
    Reactions(post: Post, ctx: any, args: PostReactionsArgs): Promise<Reaction[]>;
}
