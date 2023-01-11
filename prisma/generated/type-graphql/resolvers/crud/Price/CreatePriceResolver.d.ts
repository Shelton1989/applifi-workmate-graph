import { GraphQLResolveInfo } from "graphql";
import { CreatePriceArgs } from "./args/CreatePriceArgs";
import { Price } from "../../../models/Price";
export declare class CreatePriceResolver {
    createPrice(ctx: any, info: GraphQLResolveInfo, args: CreatePriceArgs): Promise<Price>;
}
