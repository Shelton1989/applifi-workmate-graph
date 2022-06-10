import { PriceCreateNestedOneWithoutShippingMethodsInput } from "../inputs/PriceCreateNestedOneWithoutShippingMethodsInput";
export declare class ShippingMethodCreateWithoutOrdersInput {
    id?: string | undefined;
    name: string;
    description: string;
    label: string;
    arrivalTimeInBusinessDays: number;
    arrivalTimeInBusinessDaysRang: string;
    arrivalTimeDescription: string;
    price: PriceCreateNestedOneWithoutShippingMethodsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
