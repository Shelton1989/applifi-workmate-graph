import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
export declare class ProductGroupBy {
    id: string;
    description: string | null;
    priceId: string | null;
    availableQuantity: number | null;
    photo: string | null;
    gallery: string[] | null;
    baseProductId: string | null;
    artworkIds: string[] | null;
    colorIds: string[] | null;
    sizeIds: string[] | null;
    likedByIds: string[] | null;
    inventoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregate | null;
    _avg: ProductAvgAggregate | null;
    _sum: ProductSumAggregate | null;
    _min: ProductMinAggregate | null;
    _max: ProductMaxAggregate | null;
}
