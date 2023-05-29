import { Billing } from "../../../models/Billing";
import { Document } from "../../../models/Document";
import { LLMQuery } from "../../../models/LLMQuery";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { TenantDocumentsArgs } from "./args/TenantDocumentsArgs";
import { TenantQueriesArgs } from "./args/TenantQueriesArgs";
import { TenantUsersArgs } from "./args/TenantUsersArgs";
export declare class TenantRelationsResolver {
    Users(tenant: Tenant, ctx: any, args: TenantUsersArgs): Promise<User[]>;
    Queries(tenant: Tenant, ctx: any, args: TenantQueriesArgs): Promise<LLMQuery[]>;
    Documents(tenant: Tenant, ctx: any, args: TenantDocumentsArgs): Promise<Document[]>;
    Billing(tenant: Tenant, ctx: any): Promise<Billing | null>;
}
