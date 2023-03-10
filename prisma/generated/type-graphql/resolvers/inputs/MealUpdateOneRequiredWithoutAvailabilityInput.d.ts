import { MealCreateOrConnectWithoutAvailabilityInput } from "../inputs/MealCreateOrConnectWithoutAvailabilityInput";
import { MealCreateWithoutAvailabilityInput } from "../inputs/MealCreateWithoutAvailabilityInput";
import { MealUpdateWithoutAvailabilityInput } from "../inputs/MealUpdateWithoutAvailabilityInput";
import { MealUpsertWithoutAvailabilityInput } from "../inputs/MealUpsertWithoutAvailabilityInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateOneRequiredWithoutAvailabilityInput {
    create?: MealCreateWithoutAvailabilityInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutAvailabilityInput | undefined;
    upsert?: MealUpsertWithoutAvailabilityInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
    update?: MealUpdateWithoutAvailabilityInput | undefined;
}
