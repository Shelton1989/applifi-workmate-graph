import { AggregateRating } from "../models/AggregateRating";
import { ExperienceAvailability } from "../models/ExperienceAvailability";
import { Features } from "../models/Features";
import { Location } from "../models/Location";
import { Post } from "../models/Post";
import { Price } from "../models/Price";
import { Tenant } from "../models/Tenant";
import { User } from "../models/User";
import { ExperienceCount } from "../resolvers/outputs/ExperienceCount";
export declare class Experience {
    id: string;
    Tenant?: Tenant;
    tenantId: string;
    productLink?: string | null;
    stripeProductId?: string | null;
    title?: string | null;
    description?: string | null;
    category?: "CAMPING" | null;
    Availability?: ExperienceAvailability[];
    photo?: string | null;
    gallery: string[];
    duration?: number | null;
    AggregateRating?: AggregateRating | null;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    LikedBy?: User[];
    likedByIds: string[];
    Locations?: Location[];
    Price?: Price | null;
    Posts?: Post[];
    Features?: Features[];
    createdAt: Date;
    updatedAt: Date;
    _count?: ExperienceCount | null;
}
