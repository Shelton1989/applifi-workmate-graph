import { GraphQLResolveInfo } from "graphql";
import { UpsertTenantArgs } from "./args/UpsertTenantArgs";
import { Tenant } from "../../../models/Tenant";
export declare class UpsertTenantResolver {
    upsertTenant(ctx: any, info: GraphQLResolveInfo, args: UpsertTenantArgs): Promise<Tenant>;
}
