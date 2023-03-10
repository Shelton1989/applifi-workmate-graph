import { Features } from "../../../models/Features";
import { Meal } from "../../../models/Meal";
export declare class FeaturesRelationsResolver {
    Meal(features: Features, ctx: any): Promise<Meal>;
}
