import { GraphQLResolveInfo } from "graphql";
import { FindUniquePriceArgs } from "./args/FindUniquePriceArgs";
import { Price } from "../../../models/Price";
export declare class FindUniquePriceResolver {
    price(ctx: any, info: GraphQLResolveInfo, args: FindUniquePriceArgs): Promise<Price | null>;
}
