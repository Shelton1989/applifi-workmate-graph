import { GraphQLResolveInfo } from "graphql";
import { UpdateAddressArgs } from "./args/UpdateAddressArgs";
import { Address } from "../../../models/Address";
export declare class UpdateAddressResolver {
    updateAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateAddressArgs): Promise<Address | null>;
}
