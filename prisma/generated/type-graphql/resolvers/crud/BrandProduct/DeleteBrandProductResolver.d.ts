import { GraphQLResolveInfo } from "graphql";
import { DeleteBrandProductArgs } from "./args/DeleteBrandProductArgs";
import { BrandProduct } from "../../../models/BrandProduct";
export declare class DeleteBrandProductResolver {
    deleteBrandProduct(ctx: any, info: GraphQLResolveInfo, args: DeleteBrandProductArgs): Promise<BrandProduct | null>;
}
