import { ArtworkCountAggregate } from "../outputs/ArtworkCountAggregate";
import { ArtworkMaxAggregate } from "../outputs/ArtworkMaxAggregate";
import { ArtworkMinAggregate } from "../outputs/ArtworkMinAggregate";
export declare class AggregateArtwork {
    _count: ArtworkCountAggregate | null;
    _min: ArtworkMinAggregate | null;
    _max: ArtworkMaxAggregate | null;
}
