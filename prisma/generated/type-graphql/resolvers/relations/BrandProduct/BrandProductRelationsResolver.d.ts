import { Brand } from "../../../models/Brand";
import { BrandProduct } from "../../../models/BrandProduct";
import { Product } from "../../../models/Product";
import { BrandProductProductsArgs } from "./args/BrandProductProductsArgs";
export declare class BrandProductRelationsResolver {
    brand(brandProduct: BrandProduct, ctx: any): Promise<Brand>;
    Products(brandProduct: BrandProduct, ctx: any, args: BrandProductProductsArgs): Promise<Product[]>;
}
