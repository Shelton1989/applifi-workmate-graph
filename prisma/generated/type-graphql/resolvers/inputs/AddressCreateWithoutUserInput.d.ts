import { OrderCreateNestedManyWithoutSelectedShippingAddressInput } from "../inputs/OrderCreateNestedManyWithoutSelectedShippingAddressInput";
export declare class AddressCreateWithoutUserInput {
    id?: string | undefined;
    type: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL";
    line1: string;
    line2: string;
    city: string;
    district: string;
    country: string;
    code: string;
    isDefault?: boolean | undefined;
    Orders?: OrderCreateNestedManyWithoutSelectedShippingAddressInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
