import { BookingOrder } from "../models/BookingOrder";
import { Experience } from "../models/Experience";
import { Location } from "../models/Location";
import { User } from "../models/User";
import { TenantCount } from "../resolvers/outputs/TenantCount";
export declare class Tenant {
    id: string;
    name: string;
    slug: string;
    avatar?: string | null;
    coverImage?: string | null;
    experienceImages: string[];
    Users?: User[];
    Experiences?: Experience[];
    BookingOrders?: BookingOrder[];
    Locations?: Location[];
    createdAt: Date;
    updatedAt: Date;
    _count?: TenantCount | null;
}
