import { Location } from "../../../models/Location";
import { Tenant } from "../../../models/Tenant";
export declare class LocationRelationsResolver {
    Tenant(location: Location, ctx: any): Promise<Tenant | null>;
}
