import { Location } from "../models/Location";
import { Meal } from "../models/Meal";
import { Order } from "../models/Order";
import { User } from "../models/User";
import { TenantCount } from "../resolvers/outputs/TenantCount";
export declare class Tenant {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    logoImage?: string | null;
    avatar?: string | null;
    coverImage?: string | null;
    MealImages: string[];
    Users?: User[];
    Meals?: Meal[];
    Orders?: Order[];
    Locations?: Location[];
    acceptedUserEmailDomains: string[];
    createdAt: Date;
    updatedAt: Date;
    _count?: TenantCount | null;
}
