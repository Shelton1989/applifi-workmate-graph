import { GraphQLResolveInfo } from "graphql";
import { DeleteTenantArgs } from "./args/DeleteTenantArgs";
import { Tenant } from "../../../models/Tenant";
export declare class DeleteTenantResolver {
    deleteTenant(ctx: any, info: GraphQLResolveInfo, args: DeleteTenantArgs): Promise<Tenant | null>;
}
