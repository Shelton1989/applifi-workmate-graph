import { GraphQLResolveInfo } from "graphql";
import { DeleteProductKeyArgs } from "./args/DeleteProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
export declare class DeleteProductKeyResolver {
    deleteProductKey(ctx: any, info: GraphQLResolveInfo, args: DeleteProductKeyArgs): Promise<ProductKey | null>;
}
