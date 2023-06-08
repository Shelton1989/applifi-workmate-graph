import { Comment } from "../models/Comment";
import { Document } from "../models/Document";
import { LLMQuery } from "../models/LLMQuery";
import { Notification } from "../models/Notification";
import { NotificationSettings } from "../models/NotificationSettings";
import { Reaction } from "../models/Reaction";
import { Reply } from "../models/Reply";
import { Request } from "../models/Request";
import { Tenant } from "../models/Tenant";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    Tenant?: Tenant | null;
    tenantId?: string | null;
    uid: string;
    uuid?: string | null;
    id: string;
    username: string;
    email: string;
    roles: Array<"SUPER_ADMIN" | "ADMIN" | "USER" | "WORKSPACE_OWNER" | "WORKSPACE_ADMIN" | "WORKSPACE_USER">;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    hasAcceptedTerms?: boolean | null;
    isFirstTimeUser?: boolean | null;
    isVerified?: boolean | null;
    isActive?: boolean | null;
    NotificationSettings?: NotificationSettings | null;
    Notifications?: Notification[];
    Activity?: Notification[];
    Queries?: LLMQuery[];
    Requests?: Request[];
    Comments?: Comment[];
    Replies?: Reply[];
    Reactions?: Reaction[];
    CreatedDocuments?: Document[];
    createdAt: Date;
    updatedAt: Date;
    _count?: UserCount | null;
}
