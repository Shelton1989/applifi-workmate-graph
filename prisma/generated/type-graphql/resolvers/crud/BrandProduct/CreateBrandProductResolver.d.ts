import { GraphQLResolveInfo } from "graphql";
import { CreateBrandProductArgs } from "./args/CreateBrandProductArgs";
import { BrandProduct } from "../../../models/BrandProduct";
export declare class CreateBrandProductResolver {
    createBrandProduct(ctx: any, info: GraphQLResolveInfo, args: CreateBrandProductArgs): Promise<BrandProduct>;
}
