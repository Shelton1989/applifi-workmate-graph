import { ArtworkCreateNestedManyWithoutInventoryInput } from "../inputs/ArtworkCreateNestedManyWithoutInventoryInput";
import { ProductCreateNestedManyWithoutInventoryInput } from "../inputs/ProductCreateNestedManyWithoutInventoryInput";
import { UserCreateNestedOneWithoutInventoryInput } from "../inputs/UserCreateNestedOneWithoutInventoryInput";
export declare class InventoryCreateInput {
    id?: string | undefined;
    Products?: ProductCreateNestedManyWithoutInventoryInput | undefined;
    Artwork?: ArtworkCreateNestedManyWithoutInventoryInput | undefined;
    User: UserCreateNestedOneWithoutInventoryInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
