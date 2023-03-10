import { LocationAvgAggregate } from "../outputs/LocationAvgAggregate";
import { LocationCountAggregate } from "../outputs/LocationCountAggregate";
import { LocationMaxAggregate } from "../outputs/LocationMaxAggregate";
import { LocationMinAggregate } from "../outputs/LocationMinAggregate";
import { LocationSumAggregate } from "../outputs/LocationSumAggregate";
export declare class LocationGroupBy {
    id: string;
    description: string | null;
    longitude: number | null;
    latitude: number | null;
    googleMapsUrl: string | null;
    googlePlacesId: string | null;
    type: "PHYSICAL" | "POSTAL" | null;
    line1: string | null;
    line2: string | null;
    city: string | null;
    district: string | null;
    country: string | null;
    code: string | null;
    isDefault: boolean;
    tenantId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LocationCountAggregate | null;
    _avg: LocationAvgAggregate | null;
    _sum: LocationSumAggregate | null;
    _min: LocationMinAggregate | null;
    _max: LocationMaxAggregate | null;
}
