import { MealCreateOrConnectWithoutItemsInput } from "../inputs/MealCreateOrConnectWithoutItemsInput";
import { MealCreateWithoutItemsInput } from "../inputs/MealCreateWithoutItemsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedManyWithoutItemsInput {
    create?: MealCreateWithoutItemsInput[] | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutItemsInput[] | undefined;
    connect?: MealWhereUniqueInput[] | undefined;
}
