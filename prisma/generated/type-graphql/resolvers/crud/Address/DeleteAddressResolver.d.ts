import { GraphQLResolveInfo } from "graphql";
import { DeleteAddressArgs } from "./args/DeleteAddressArgs";
import { Address } from "../../../models/Address";
export declare class DeleteAddressResolver {
    deleteAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteAddressArgs): Promise<Address | null>;
}
