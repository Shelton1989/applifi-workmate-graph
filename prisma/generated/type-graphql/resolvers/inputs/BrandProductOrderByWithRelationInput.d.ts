import { BrandOrderByWithRelationInput } from "../inputs/BrandOrderByWithRelationInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
export declare class BrandProductOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    releaseYear?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    brand?: BrandOrderByWithRelationInput | undefined;
    brandId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    Products?: ProductOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
