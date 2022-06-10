import { ArtworkCreateNestedManyWithoutInventoryInput } from "../inputs/ArtworkCreateNestedManyWithoutInventoryInput";
import { UserCreateNestedOneWithoutInventoryInput } from "../inputs/UserCreateNestedOneWithoutInventoryInput";
export declare class InventoryCreateWithoutProductsInput {
    id?: string | undefined;
    Artwork?: ArtworkCreateNestedManyWithoutInventoryInput | undefined;
    User: UserCreateNestedOneWithoutInventoryInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
