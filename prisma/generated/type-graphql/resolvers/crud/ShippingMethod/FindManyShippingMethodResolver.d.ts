import { GraphQLResolveInfo } from "graphql";
import { FindManyShippingMethodArgs } from "./args/FindManyShippingMethodArgs";
import { ShippingMethod } from "../../../models/ShippingMethod";
export declare class FindManyShippingMethodResolver {
    shippingMethods(ctx: any, info: GraphQLResolveInfo, args: FindManyShippingMethodArgs): Promise<ShippingMethod[]>;
}
