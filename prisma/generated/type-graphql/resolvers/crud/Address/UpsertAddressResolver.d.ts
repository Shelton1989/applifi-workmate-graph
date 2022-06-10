import { GraphQLResolveInfo } from "graphql";
import { UpsertAddressArgs } from "./args/UpsertAddressArgs";
import { Address } from "../../../models/Address";
export declare class UpsertAddressResolver {
    upsertAddress(ctx: any, info: GraphQLResolveInfo, args: UpsertAddressArgs): Promise<Address>;
}
