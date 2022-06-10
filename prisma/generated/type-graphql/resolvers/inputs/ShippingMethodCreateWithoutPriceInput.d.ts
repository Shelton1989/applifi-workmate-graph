import { OrderCreateNestedManyWithoutSelectedShippingMethodInput } from "../inputs/OrderCreateNestedManyWithoutSelectedShippingMethodInput";
export declare class ShippingMethodCreateWithoutPriceInput {
    id?: string | undefined;
    name: string;
    description: string;
    label: string;
    arrivalTimeInBusinessDays: number;
    arrivalTimeInBusinessDaysRang: string;
    arrivalTimeDescription: string;
    Orders?: OrderCreateNestedManyWithoutSelectedShippingMethodInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
