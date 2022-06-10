import { GraphQLResolveInfo } from "graphql";
import { FindFirstShippingMethodArgs } from "./args/FindFirstShippingMethodArgs";
import { ShippingMethod } from "../../../models/ShippingMethod";
export declare class FindFirstShippingMethodResolver {
    findFirstShippingMethod(ctx: any, info: GraphQLResolveInfo, args: FindFirstShippingMethodArgs): Promise<ShippingMethod | null>;
}
