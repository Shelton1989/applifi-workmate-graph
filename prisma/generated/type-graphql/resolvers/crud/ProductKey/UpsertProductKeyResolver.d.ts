import { GraphQLResolveInfo } from "graphql";
import { UpsertProductKeyArgs } from "./args/UpsertProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
export declare class UpsertProductKeyResolver {
    upsertProductKey(ctx: any, info: GraphQLResolveInfo, args: UpsertProductKeyArgs): Promise<ProductKey>;
}
