import { UserCreateNestedOneWithoutAddressesInput } from "../inputs/UserCreateNestedOneWithoutAddressesInput";
export declare class AddressCreateWithoutOrdersInput {
    id?: string | undefined;
    type: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL";
    line1: string;
    line2: string;
    city: string;
    district: string;
    country: string;
    code: string;
    isDefault?: boolean | undefined;
    User?: UserCreateNestedOneWithoutAddressesInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
