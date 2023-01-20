import { AggregateRating } from "../../../models/AggregateRating";
import { Experience } from "../../../models/Experience";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
import { Location } from "../../../models/Location";
import { Post } from "../../../models/Post";
import { Price } from "../../../models/Price";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { ExperienceAvailabilityArgs } from "./args/ExperienceAvailabilityArgs";
import { ExperienceLikedByArgs } from "./args/ExperienceLikedByArgs";
import { ExperienceLocationsArgs } from "./args/ExperienceLocationsArgs";
import { ExperiencePostsArgs } from "./args/ExperiencePostsArgs";
import { ExperiencePriceArgs } from "./args/ExperiencePriceArgs";
export declare class ExperienceRelationsResolver {
    Tenant(experience: Experience, ctx: any): Promise<Tenant>;
    Availability(experience: Experience, ctx: any, args: ExperienceAvailabilityArgs): Promise<ExperienceAvailability[]>;
    AggregateRating(experience: Experience, ctx: any): Promise<AggregateRating | null>;
    LikedBy(experience: Experience, ctx: any, args: ExperienceLikedByArgs): Promise<User[]>;
    Locations(experience: Experience, ctx: any, args: ExperienceLocationsArgs): Promise<Location[]>;
    Price(experience: Experience, ctx: any, args: ExperiencePriceArgs): Promise<Price[]>;
    Posts(experience: Experience, ctx: any, args: ExperiencePostsArgs): Promise<Post[]>;
}
