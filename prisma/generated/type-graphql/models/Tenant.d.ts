import { Billing } from "../models/Billing";
import { Document } from "../models/Document";
import { LLMQuery } from "../models/LLMQuery";
import { User } from "../models/User";
import { TenantCount } from "../resolvers/outputs/TenantCount";
export declare class Tenant {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    logoImage?: string | null;
    avatar?: string | null;
    Users?: User[];
    Queries?: LLMQuery[];
    Documents?: Document[];
    Billing?: Billing | null;
    acceptedUserEmailDomains: string[];
    createdAt: Date;
    updatedAt: Date;
    _count?: TenantCount | null;
}
