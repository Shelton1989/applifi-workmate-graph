import { MealCreateOrConnectWithoutReactionsInput } from "../inputs/MealCreateOrConnectWithoutReactionsInput";
import { MealCreateWithoutReactionsInput } from "../inputs/MealCreateWithoutReactionsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedOneWithoutReactionsInput {
    create?: MealCreateWithoutReactionsInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutReactionsInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
}
