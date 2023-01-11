import { GraphQLResolveInfo } from "graphql";
import { FindManyPriceArgs } from "./args/FindManyPriceArgs";
import { Price } from "../../../models/Price";
export declare class FindManyPriceResolver {
    prices(ctx: any, info: GraphQLResolveInfo, args: FindManyPriceArgs): Promise<Price[]>;
}
