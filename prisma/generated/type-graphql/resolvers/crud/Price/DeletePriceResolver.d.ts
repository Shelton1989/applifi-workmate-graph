import { GraphQLResolveInfo } from "graphql";
import { DeletePriceArgs } from "./args/DeletePriceArgs";
import { Price } from "../../../models/Price";
export declare class DeletePriceResolver {
    deletePrice(ctx: any, info: GraphQLResolveInfo, args: DeletePriceArgs): Promise<Price | null>;
}
