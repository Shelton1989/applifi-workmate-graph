import { ProductOrderByWithRelationInput } from "../../../inputs/ProductOrderByWithRelationInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
export declare class BrandProductProductsArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByWithRelationInput[] | undefined;
    cursor?: ProductWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "publishStatus" | "description" | "priceId" | "availableQuantity" | "photo" | "gallery" | "baseProductId" | "artworkIds" | "colorIds" | "sizeIds" | "likedByIds" | "inventoryId" | "createdAt" | "updatedAt"> | undefined;
}
