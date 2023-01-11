import { GraphQLResolveInfo } from "graphql";
import { UpsertPriceArgs } from "./args/UpsertPriceArgs";
import { Price } from "../../../models/Price";
export declare class UpsertPriceResolver {
    upsertPrice(ctx: any, info: GraphQLResolveInfo, args: UpsertPriceArgs): Promise<Price>;
}
