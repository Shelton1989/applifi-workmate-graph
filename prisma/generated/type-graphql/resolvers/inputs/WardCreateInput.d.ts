import { UserCreateNestedManyWithoutWardInput } from "../inputs/UserCreateNestedManyWithoutWardInput";
export declare class WardCreateInput {
    id?: string | undefined;
    number: number;
    name: string;
    description?: string | undefined;
    Users?: UserCreateNestedManyWithoutWardInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
