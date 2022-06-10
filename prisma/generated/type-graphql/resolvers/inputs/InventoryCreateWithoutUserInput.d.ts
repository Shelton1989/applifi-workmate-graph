import { ArtworkCreateNestedManyWithoutInventoryInput } from "../inputs/ArtworkCreateNestedManyWithoutInventoryInput";
import { ProductCreateNestedManyWithoutInventoryInput } from "../inputs/ProductCreateNestedManyWithoutInventoryInput";
export declare class InventoryCreateWithoutUserInput {
    id?: string | undefined;
    Products?: ProductCreateNestedManyWithoutInventoryInput | undefined;
    Artwork?: ArtworkCreateNestedManyWithoutInventoryInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
