import { MealAvailabilityCreateManyMealInputEnvelope } from "../inputs/MealAvailabilityCreateManyMealInputEnvelope";
import { MealAvailabilityCreateOrConnectWithoutMealInput } from "../inputs/MealAvailabilityCreateOrConnectWithoutMealInput";
import { MealAvailabilityCreateWithoutMealInput } from "../inputs/MealAvailabilityCreateWithoutMealInput";
import { MealAvailabilityWhereUniqueInput } from "../inputs/MealAvailabilityWhereUniqueInput";
export declare class MealAvailabilityCreateNestedManyWithoutMealInput {
    create?: MealAvailabilityCreateWithoutMealInput[] | undefined;
    connectOrCreate?: MealAvailabilityCreateOrConnectWithoutMealInput[] | undefined;
    createMany?: MealAvailabilityCreateManyMealInputEnvelope | undefined;
    connect?: MealAvailabilityWhereUniqueInput[] | undefined;
}
