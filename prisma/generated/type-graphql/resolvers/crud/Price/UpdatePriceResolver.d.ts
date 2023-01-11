import { GraphQLResolveInfo } from "graphql";
import { UpdatePriceArgs } from "./args/UpdatePriceArgs";
import { Price } from "../../../models/Price";
export declare class UpdatePriceResolver {
    updatePrice(ctx: any, info: GraphQLResolveInfo, args: UpdatePriceArgs): Promise<Price | null>;
}
