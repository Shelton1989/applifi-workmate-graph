import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductKeyArgs } from "./args/FindUniqueProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
export declare class FindUniqueProductKeyResolver {
    productKey(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductKeyArgs): Promise<ProductKey | null>;
}
