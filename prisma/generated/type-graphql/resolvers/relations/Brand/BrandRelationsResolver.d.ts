import { Brand } from "../../../models/Brand";
import { BrandProduct } from "../../../models/BrandProduct";
import { BrandBrandProductsArgs } from "./args/BrandBrandProductsArgs";
export declare class BrandRelationsResolver {
    BrandProducts(brand: Brand, ctx: any, args: BrandBrandProductsArgs): Promise<BrandProduct[]>;
}
