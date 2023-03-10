import { MealAvailabilityOrderByWithRelationInput } from "../../../inputs/MealAvailabilityOrderByWithRelationInput";
import { MealAvailabilityWhereInput } from "../../../inputs/MealAvailabilityWhereInput";
import { MealAvailabilityWhereUniqueInput } from "../../../inputs/MealAvailabilityWhereUniqueInput";
export declare class AggregateMealAvailabilityArgs {
    where?: MealAvailabilityWhereInput | undefined;
    orderBy?: MealAvailabilityOrderByWithRelationInput[] | undefined;
    cursor?: MealAvailabilityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
