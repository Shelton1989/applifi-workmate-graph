import { LocationAvgAggregate } from "../outputs/LocationAvgAggregate";
import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
import { LocationSumAggregate } from "../outputs/LocationSumAggregate";
export declare class LocationGroupBy {
    id: string;
    longitude: number;
    latitude: number;
    googleMapsUrl: string;
    googlePlacesId: string;
    type: "PHYSICAL" | "POSTAL";
    line1: string;
    line2: string;
    city: string;
    district: string;
    country: string;
    code: string;
    isDefault: boolean;
    experienceId: string | null;
    tenantId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LocationCountAggregate | null;
    _avg: LocationAvgAggregate | null;
    _sum: LocationSumAggregate | null;
    _min: LocationMinAggregate | null;
    _max: LocationMaxAggregate | null;
}
