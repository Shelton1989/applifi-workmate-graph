import { ColorCountAggregate } from "../outputs/ColorCountAggregate";
import { ColorMaxAggregate } from "../outputs/ColorMaxAggregate";
import { ColorMinAggregate } from "../outputs/ColorMinAggregate";
export declare class ColorGroupBy {
    id: string;
    name: string;
    hex: string;
    productIds: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ColorCountAggregate | null;
    _min: ColorMinAggregate | null;
    _max: ColorMaxAggregate | null;
}
