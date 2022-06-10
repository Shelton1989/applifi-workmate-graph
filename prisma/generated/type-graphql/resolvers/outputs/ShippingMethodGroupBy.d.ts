import { ShippingMethodAvgAggregate } from "../outputs/ShippingMethodAvgAggregate";
import { ShippingMethodCountAggregate } from "../outputs/ShippingMethodCountAggregate";
import { ShippingMethodMaxAggregate } from "../outputs/ShippingMethodMaxAggregate";
import { ShippingMethodMinAggregate } from "../outputs/ShippingMethodMinAggregate";
import { ShippingMethodSumAggregate } from "../outputs/ShippingMethodSumAggregate";
export declare class ShippingMethodGroupBy {
    id: string;
    name: string;
    description: string;
    label: string;
    arrivalTimeInBusinessDays: number;
    arrivalTimeInBusinessDaysRang: string;
    arrivalTimeDescription: string;
    priceId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ShippingMethodCountAggregate | null;
    _avg: ShippingMethodAvgAggregate | null;
    _sum: ShippingMethodSumAggregate | null;
    _min: ShippingMethodMinAggregate | null;
    _max: ShippingMethodMaxAggregate | null;
}
