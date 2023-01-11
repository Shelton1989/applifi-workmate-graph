import { GraphQLResolveInfo } from "graphql";
import { FindFirstPriceArgs } from "./args/FindFirstPriceArgs";
import { Price } from "../../../models/Price";
export declare class FindFirstPriceResolver {
    findFirstPrice(ctx: any, info: GraphQLResolveInfo, args: FindFirstPriceArgs): Promise<Price | null>;
}
