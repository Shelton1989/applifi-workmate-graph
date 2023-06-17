import { GraphQLResolveInfo } from "graphql";
import { CreateProductKeyArgs } from "./args/CreateProductKeyArgs";
import { ProductKey } from "../../../models/ProductKey";
export declare class CreateProductKeyResolver {
    createProductKey(ctx: any, info: GraphQLResolveInfo, args: CreateProductKeyArgs): Promise<ProductKey>;
}
