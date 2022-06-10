import { BrandProductOrderByRelationAggregateInput } from "../inputs/BrandProductOrderByRelationAggregateInput";
export declare class BrandOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    tagline?: "asc" | "desc" | undefined;
    BrandProducts?: BrandProductOrderByRelationAggregateInput | undefined;
    status?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
