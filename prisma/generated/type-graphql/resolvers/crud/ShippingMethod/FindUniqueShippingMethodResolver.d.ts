import { GraphQLResolveInfo } from "graphql";
import { FindUniqueShippingMethodArgs } from "./args/FindUniqueShippingMethodArgs";
import { ShippingMethod } from "../../../models/ShippingMethod";
export declare class FindUniqueShippingMethodResolver {
    shippingMethod(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShippingMethodArgs): Promise<ShippingMethod | null>;
}
