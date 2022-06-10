import { ArtworkCountAggregate } from "../outputs/ArtworkCountAggregate";
import { ArtworkMaxAggregate } from "../outputs/ArtworkMaxAggregate";
import { ArtworkMinAggregate } from "../outputs/ArtworkMinAggregate";
export declare class ArtworkGroupBy {
    id: string;
    title: string;
    description: string;
    caption: string;
    url: string;
    productIds: string[] | null;
    inventoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ArtworkCountAggregate | null;
    _min: ArtworkMinAggregate | null;
    _max: ArtworkMaxAggregate | null;
}
