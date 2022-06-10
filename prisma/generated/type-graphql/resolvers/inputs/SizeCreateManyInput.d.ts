import { SizeCreateproductIdsInput } from "../inputs/SizeCreateproductIdsInput";
export declare class SizeCreateManyInput {
    id?: string | undefined;
    value: string;
    region: "US" | "UK" | "EU" | "UNIVERSAL";
    productIds?: SizeCreateproductIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
