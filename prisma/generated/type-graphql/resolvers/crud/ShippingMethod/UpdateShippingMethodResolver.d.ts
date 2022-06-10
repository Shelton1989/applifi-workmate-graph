import { GraphQLResolveInfo } from "graphql";
import { UpdateShippingMethodArgs } from "./args/UpdateShippingMethodArgs";
import { ShippingMethod } from "../../../models/ShippingMethod";
export declare class UpdateShippingMethodResolver {
    updateShippingMethod(ctx: any, info: GraphQLResolveInfo, args: UpdateShippingMethodArgs): Promise<ShippingMethod | null>;
}
