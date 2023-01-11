import { Comment } from "../models/Comment";
import { Experience } from "../models/Experience";
import { Reaction } from "../models/Reaction";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";
export declare class Post {
    id: string;
    type: "IMAGE" | "CAROUSEL" | "VIDEO";
    caption?: string | null;
    mediaUrl: string[];
    rating: number;
    isCommentsEnabled: boolean;
    canBeCounted: boolean;
    Author?: User;
    authorId: string;
    Experience?: Experience | null;
    experienceId?: string | null;
    Comments?: Comment[];
    Reactions?: Reaction[];
    postLink?: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count?: PostCount | null;
}
