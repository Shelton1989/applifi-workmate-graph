import { Comment } from "../../../models/Comment";
import { Episode } from "../../../models/Episode";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { SeasonSeries } from "../../../models/SeasonSeries";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
export declare class ReactionRelationsResolver {
    Post(reaction: Reaction, ctx: any): Promise<Post | null>;
    Comment(reaction: Reaction, ctx: any): Promise<Comment | null>;
    Reply(reaction: Reaction, ctx: any): Promise<Reply | null>;
    Author(reaction: Reaction, ctx: any): Promise<User>;
    Topic(reaction: Reaction, ctx: any): Promise<Topic | null>;
    SeasonSeries(reaction: Reaction, ctx: any): Promise<SeasonSeries | null>;
    Episode(reaction: Reaction, ctx: any): Promise<Episode | null>;
}
