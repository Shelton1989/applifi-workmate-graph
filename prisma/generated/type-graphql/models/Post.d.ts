import { Comment } from "../models/Comment";
import { Reaction } from "../models/Reaction";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";
export declare class Post {
    id: string;
    type: "SHORT_VIDEO" | "IMAGE" | "CAROUSEL";
    caption?: string | null;
    mediaUrl: string[];
    isCommentsEnabled: boolean;
    Author?: User;
    authorId: string;
    Comments?: Comment[];
    Reactions?: Reaction[];
    productLink?: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count?: PostCount | null;
}
