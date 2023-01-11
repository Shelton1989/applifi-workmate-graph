import { Experience } from "../models/Experience";
export declare class AggregateRating {
    id: string;
    ratingValue: number;
    countedPosts?: number | null;
    allPosts?: number | null;
    ratingCount?: number | null;
    Experience?: Experience | null;
    experienceId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
