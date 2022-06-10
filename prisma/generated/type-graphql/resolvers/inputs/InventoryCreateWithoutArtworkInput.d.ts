import { ProductCreateNestedManyWithoutInventoryInput } from "../inputs/ProductCreateNestedManyWithoutInventoryInput";
import { UserCreateNestedOneWithoutInventoryInput } from "../inputs/UserCreateNestedOneWithoutInventoryInput";
export declare class InventoryCreateWithoutArtworkInput {
    id?: string | undefined;
    Products?: ProductCreateNestedManyWithoutInventoryInput | undefined;
    User: UserCreateNestedOneWithoutInventoryInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
