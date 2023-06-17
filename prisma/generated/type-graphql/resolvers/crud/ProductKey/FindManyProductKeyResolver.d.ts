import { GraphQLResolveInfo } from "graphql";
import { FindManyProductKeyArgs } from "./args/FindManyProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
export declare class FindManyProductKeyResolver {
    productKeys(ctx: any, info: GraphQLResolveInfo, args: FindManyProductKeyArgs): Promise<ProductKey[]>;
}
