import { GraphQLResolveInfo } from "graphql";
import { UpdateTenantArgs } from "./args/UpdateTenantArgs";
import { Tenant } from "../../../models/Tenant";
export declare class UpdateTenantResolver {
    updateTenant(ctx: any, info: GraphQLResolveInfo, args: UpdateTenantArgs): Promise<Tenant | null>;
}
