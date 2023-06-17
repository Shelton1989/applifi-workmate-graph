import { ProductKeyCountAggregate } from "../outputs/ProductKeyCountAggregate";
import { ProductKeyMaxAggregate } from "../outputs/ProductKeyMaxAggregate";
import { ProductKeyMinAggregate } from "../outputs/ProductKeyMinAggregate";
export declare class ProductKeyGroupBy {
    id: string;
    billingId: string | null;
    createdBy: string | null;
    key: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductKeyCountAggregate | null;
    _min: ProductKeyMinAggregate | null;
    _max: ProductKeyMaxAggregate | null;
}
