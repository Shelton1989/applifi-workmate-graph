import { GraphQLResolveInfo } from "graphql";
import { UpdateProductKeyArgs } from "./args/UpdateProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
export declare class UpdateProductKeyResolver {
    updateProductKey(ctx: any, info: GraphQLResolveInfo, args: UpdateProductKeyArgs): Promise<ProductKey | null>;
}
