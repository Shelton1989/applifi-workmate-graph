import { Comment } from "../models/Comment";
import { Episode } from "../models/Episode";
import { Post } from "../models/Post";
import { Reply } from "../models/Reply";
import { SeasonSeries } from "../models/SeasonSeries";
import { Topic } from "../models/Topic";
import { User } from "../models/User";
export declare class Reaction {
    id: string;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Post?: Post | null;
    postId?: string | null;
    Comment?: Comment | null;
    commentId?: string | null;
    Reply?: Reply | null;
    replyId?: string | null;
    Author?: User;
    authorId: string;
    Topic?: Topic | null;
    topicId?: string | null;
    SeasonSeries?: SeasonSeries | null;
    seasonSeriesId?: string | null;
    Episode?: Episode | null;
    episodeId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
