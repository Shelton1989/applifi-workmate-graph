import { GraphQLResolveInfo } from "graphql";
import { DeleteShippingMethodArgs } from "./args/DeleteShippingMethodArgs";
import { ShippingMethod } from "../../../models/ShippingMethod";
export declare class DeleteShippingMethodResolver {
    deleteShippingMethod(ctx: any, info: GraphQLResolveInfo, args: DeleteShippingMethodArgs): Promise<ShippingMethod | null>;
}
