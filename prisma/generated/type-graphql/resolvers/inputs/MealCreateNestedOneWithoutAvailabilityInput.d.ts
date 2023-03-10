import { MealCreateOrConnectWithoutAvailabilityInput } from "../inputs/MealCreateOrConnectWithoutAvailabilityInput";
import { MealCreateWithoutAvailabilityInput } from "../inputs/MealCreateWithoutAvailabilityInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedOneWithoutAvailabilityInput {
    create?: MealCreateWithoutAvailabilityInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutAvailabilityInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
}
