import { BookingOrder } from "../../../models/BookingOrder";
import { Experience } from "../../../models/Experience";
import { Location } from "../../../models/Location";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { TenantBookingOrdersArgs } from "./args/TenantBookingOrdersArgs";
import { TenantExperiencesArgs } from "./args/TenantExperiencesArgs";
import { TenantLocationsArgs } from "./args/TenantLocationsArgs";
import { TenantUsersArgs } from "./args/TenantUsersArgs";
export declare class TenantRelationsResolver {
    Users(tenant: Tenant, ctx: any, args: TenantUsersArgs): Promise<User[]>;
    Experiences(tenant: Tenant, ctx: any, args: TenantExperiencesArgs): Promise<Experience[]>;
    BookingOrders(tenant: Tenant, ctx: any, args: TenantBookingOrdersArgs): Promise<BookingOrder[]>;
    Locations(tenant: Tenant, ctx: any, args: TenantLocationsArgs): Promise<Location[]>;
}
