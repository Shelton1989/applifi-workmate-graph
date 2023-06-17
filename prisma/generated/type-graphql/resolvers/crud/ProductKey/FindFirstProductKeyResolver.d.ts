import { GraphQLResolveInfo } from "graphql";
import { FindFirstProductKeyArgs } from "./args/FindFirstProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
export declare class FindFirstProductKeyResolver {
    findFirstProductKey(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductKeyArgs): Promise<ProductKey | null>;
}
