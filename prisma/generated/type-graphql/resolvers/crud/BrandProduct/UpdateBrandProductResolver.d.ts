import { GraphQLResolveInfo } from "graphql";
import { UpdateBrandProductArgs } from "./args/UpdateBrandProductArgs";
import { BrandProduct } from "../../../models/BrandProduct";
export declare class UpdateBrandProductResolver {
    updateBrandProduct(ctx: any, info: GraphQLResolveInfo, args: UpdateBrandProductArgs): Promise<BrandProduct | null>;
}
