import { Location } from "../../../models/Location";
import { Meal } from "../../../models/Meal";
import { Order } from "../../../models/Order";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { TenantLocationsArgs } from "./args/TenantLocationsArgs";
import { TenantMealsArgs } from "./args/TenantMealsArgs";
import { TenantOrdersArgs } from "./args/TenantOrdersArgs";
import { TenantUsersArgs } from "./args/TenantUsersArgs";
export declare class TenantRelationsResolver {
    Users(tenant: Tenant, ctx: any, args: TenantUsersArgs): Promise<User[]>;
    Meals(tenant: Tenant, ctx: any, args: TenantMealsArgs): Promise<Meal[]>;
    Orders(tenant: Tenant, ctx: any, args: TenantOrdersArgs): Promise<Order[]>;
    Locations(tenant: Tenant, ctx: any, args: TenantLocationsArgs): Promise<Location[]>;
}
