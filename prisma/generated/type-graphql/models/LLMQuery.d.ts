import { Tenant } from "../models/Tenant";
import { User } from "../models/User";
export declare class LLMQuery {
    id: string;
    Tenant?: Tenant;
    tenantId: string;
    queryLink?: string | null;
    question?: string | null;
    response?: string | null;
    createdAt: Date;
    updatedAt: Date;
    User?: User | null;
    userId?: string | null;
}
