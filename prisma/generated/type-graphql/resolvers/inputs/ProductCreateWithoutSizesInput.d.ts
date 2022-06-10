import { ArtworkCreateNestedManyWithoutProductsInput } from "../inputs/ArtworkCreateNestedManyWithoutProductsInput";
import { BrandProductCreateNestedOneWithoutProductsInput } from "../inputs/BrandProductCreateNestedOneWithoutProductsInput";
import { ColorCreateNestedManyWithoutProductsInput } from "../inputs/ColorCreateNestedManyWithoutProductsInput";
import { InventoryCreateNestedOneWithoutProductsInput } from "../inputs/InventoryCreateNestedOneWithoutProductsInput";
import { OrderLineItemCreateNestedManyWithoutSelectedProductInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedProductInput";
import { PriceCreateNestedOneWithoutProductsInput } from "../inputs/PriceCreateNestedOneWithoutProductsInput";
import { ProductCreateartworkIdsInput } from "../inputs/ProductCreateartworkIdsInput";
import { ProductCreatecolorIdsInput } from "../inputs/ProductCreatecolorIdsInput";
import { ProductCreategalleryInput } from "../inputs/ProductCreategalleryInput";
import { ProductCreatelikedByIdsInput } from "../inputs/ProductCreatelikedByIdsInput";
import { ProductCreatesizeIdsInput } from "../inputs/ProductCreatesizeIdsInput";
import { UserCreateNestedManyWithoutLikedProductsInput } from "../inputs/UserCreateNestedManyWithoutLikedProductsInput";
export declare class ProductCreateWithoutSizesInput {
    id?: string | undefined;
    description: string;
    price: PriceCreateNestedOneWithoutProductsInput;
    availableQuantity: number;
    photo: string;
    gallery?: ProductCreategalleryInput | undefined;
    BaseProduct: BrandProductCreateNestedOneWithoutProductsInput;
    Artwork?: ArtworkCreateNestedManyWithoutProductsInput | undefined;
    artworkIds?: ProductCreateartworkIdsInput | undefined;
    Colors?: ColorCreateNestedManyWithoutProductsInput | undefined;
    colorIds?: ProductCreatecolorIdsInput | undefined;
    sizeIds?: ProductCreatesizeIdsInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedProductInput | undefined;
    LikedBy?: UserCreateNestedManyWithoutLikedProductsInput | undefined;
    likedByIds?: ProductCreatelikedByIdsInput | undefined;
    Inventory: InventoryCreateNestedOneWithoutProductsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
