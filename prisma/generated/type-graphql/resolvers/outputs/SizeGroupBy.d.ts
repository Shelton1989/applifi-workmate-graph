import { SizeCountAggregate } from "../outputs/SizeCountAggregate";
import { SizeMaxAggregate } from "../outputs/SizeMaxAggregate";
import { SizeMinAggregate } from "../outputs/SizeMinAggregate";
export declare class SizeGroupBy {
    id: string;
    value: string;
    region: "US" | "UK" | "EU" | "UNIVERSAL";
    productIds: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SizeCountAggregate | null;
    _min: SizeMinAggregate | null;
    _max: SizeMaxAggregate | null;
}
