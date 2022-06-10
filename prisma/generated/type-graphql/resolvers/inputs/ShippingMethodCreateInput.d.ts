import { OrderCreateNestedManyWithoutSelectedShippingMethodInput } from "../inputs/OrderCreateNestedManyWithoutSelectedShippingMethodInput";
import { PriceCreateNestedOneWithoutShippingMethodsInput } from "../inputs/PriceCreateNestedOneWithoutShippingMethodsInput";
export declare class ShippingMethodCreateInput {
    id?: string | undefined;
    name: string;
    description: string;
    label: string;
    arrivalTimeInBusinessDays: number;
    arrivalTimeInBusinessDaysRang: string;
    arrivalTimeDescription: string;
    price: PriceCreateNestedOneWithoutShippingMethodsInput;
    Orders?: OrderCreateNestedManyWithoutSelectedShippingMethodInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
