import { Experience } from "../../../models/Experience";
import { Location } from "../../../models/Location";
import { Tenant } from "../../../models/Tenant";
export declare class LocationRelationsResolver {
    Experience(location: Location, ctx: any): Promise<Experience | null>;
    Tenant(location: Location, ctx: any): Promise<Tenant | null>;
}
