import { Tenant } from "../models/Tenant";
import { User } from "../models/User";
export declare class Query {
    id: string;
    Tenant?: Tenant;
    tenantId: string;
    queryLink?: string | null;
    queryText?: string | null;
    createdAt: Date;
    updatedAt: Date;
    User?: User | null;
    userId?: string | null;
}
