import { GraphQLResolveInfo } from "graphql";
import { CreateTenantArgs } from "./args/CreateTenantArgs";
import { Tenant } from "../../../models/Tenant";
export declare class CreateTenantResolver {
    createTenant(ctx: any, info: GraphQLResolveInfo, args: CreateTenantArgs): Promise<Tenant>;
}
