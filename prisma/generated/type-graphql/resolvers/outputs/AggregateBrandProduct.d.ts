import { BrandProductCountAggregate } from "../outputs/BrandProductCountAggregate";
import { BrandProductMaxAggregate } from "../outputs/BrandProductMaxAggregate";
import { BrandProductMinAggregate } from "../outputs/BrandProductMinAggregate";
export declare class AggregateBrandProduct {
    _count: BrandProductCountAggregate | null;
    _min: BrandProductMinAggregate | null;
    _max: BrandProductMaxAggregate | null;
}
