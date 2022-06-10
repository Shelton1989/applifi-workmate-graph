import { ColorCreateproductIdsInput } from "../inputs/ColorCreateproductIdsInput";
export declare class ColorCreateManyInput {
    id?: string | undefined;
    name: string;
    hex: string;
    productIds?: ColorCreateproductIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
