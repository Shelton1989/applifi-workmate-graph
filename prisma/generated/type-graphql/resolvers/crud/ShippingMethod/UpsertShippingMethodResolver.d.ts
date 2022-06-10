import { GraphQLResolveInfo } from "graphql";
import { UpsertShippingMethodArgs } from "./args/UpsertShippingMethodArgs";
import { ShippingMethod } from "../../../models/ShippingMethod";
export declare class UpsertShippingMethodResolver {
    upsertShippingMethod(ctx: any, info: GraphQLResolveInfo, args: UpsertShippingMethodArgs): Promise<ShippingMethod>;
}
