import { AddressCountAggregate } from "../outputs/AddressCountAggregate";
import { AddressMaxAggregate } from "../outputs/AddressMaxAggregate";
import { AddressMinAggregate } from "../outputs/AddressMinAggregate";
export declare class AddressGroupBy {
    id: string;
    type: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL";
    line1: string;
    line2: string;
    city: string;
    district: string;
    country: string;
    code: string;
    isDefault: boolean;
    userId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AddressCountAggregate | null;
    _min: AddressMinAggregate | null;
    _max: AddressMaxAggregate | null;
}
