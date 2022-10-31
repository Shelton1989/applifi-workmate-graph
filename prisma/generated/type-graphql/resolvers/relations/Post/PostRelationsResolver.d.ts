import { Comment } from "../../../models/Comment";
import { Episode } from "../../../models/Episode";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { SeasonSeries } from "../../../models/SeasonSeries";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostReactionsArgs } from "./args/PostReactionsArgs";
export declare class PostRelationsResolver {
    Author(post: Post, ctx: any): Promise<User>;
    Comments(post: Post, ctx: any, args: PostCommentsArgs): Promise<Comment[]>;
    Reactions(post: Post, ctx: any, args: PostReactionsArgs): Promise<Reaction[]>;
    Topic(post: Post, ctx: any): Promise<Topic | null>;
    SeasonSeries(post: Post, ctx: any): Promise<SeasonSeries | null>;
    Episode(post: Post, ctx: any): Promise<Episode | null>;
}
