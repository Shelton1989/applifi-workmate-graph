import { OrderCreateNestedManyWithoutSelectedShippingAddressInput } from "../inputs/OrderCreateNestedManyWithoutSelectedShippingAddressInput";
import { UserCreateNestedOneWithoutAddressesInput } from "../inputs/UserCreateNestedOneWithoutAddressesInput";
export declare class AddressCreateInput {
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
    Orders?: OrderCreateNestedManyWithoutSelectedShippingAddressInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
