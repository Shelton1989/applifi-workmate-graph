import { BrandCountAggregate } from "../outputs/BrandCountAggregate";
import { BrandMaxAggregate } from "../outputs/BrandMaxAggregate";
import { BrandMinAggregate } from "../outputs/BrandMinAggregate";
export declare class AggregateBrand {
    _count: BrandCountAggregate | null;
    _min: BrandMinAggregate | null;
    _max: BrandMaxAggregate | null;
}
