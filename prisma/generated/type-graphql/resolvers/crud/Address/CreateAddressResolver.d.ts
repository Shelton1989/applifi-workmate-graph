import { GraphQLResolveInfo } from "graphql";
import { CreateAddressArgs } from "./args/CreateAddressArgs";
import { Address } from "../../../models/Address";
export declare class CreateAddressResolver {
    createAddress(ctx: any, info: GraphQLResolveInfo, args: CreateAddressArgs): Promise<Address>;
}
