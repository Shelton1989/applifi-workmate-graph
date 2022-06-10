import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBrandProductArgs } from "./args/FindUniqueBrandProductArgs";
import { BrandProduct } from "../../../models/BrandProduct";
export declare class FindUniqueBrandProductResolver {
    brandProduct(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBrandProductArgs): Promise<BrandProduct | null>;
}
