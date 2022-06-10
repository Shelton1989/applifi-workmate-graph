import { GraphQLResolveInfo } from "graphql";
import { CreateShippingMethodArgs } from "./args/CreateShippingMethodArgs";
import { ShippingMethod } from "../../../models/ShippingMethod";
export declare class CreateShippingMethodResolver {
    createShippingMethod(ctx: any, info: GraphQLResolveInfo, args: CreateShippingMethodArgs): Promise<ShippingMethod>;
}
