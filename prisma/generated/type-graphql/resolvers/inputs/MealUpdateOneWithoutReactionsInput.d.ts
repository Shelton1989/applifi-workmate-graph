import { MealCreateOrConnectWithoutReactionsInput } from "../inputs/MealCreateOrConnectWithoutReactionsInput";
import { MealCreateWithoutReactionsInput } from "../inputs/MealCreateWithoutReactionsInput";
import { MealUpdateWithoutReactionsInput } from "../inputs/MealUpdateWithoutReactionsInput";
import { MealUpsertWithoutReactionsInput } from "../inputs/MealUpsertWithoutReactionsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateOneWithoutReactionsInput {
    create?: MealCreateWithoutReactionsInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: MealUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: MealWhereUniqueInput | undefined;
    update?: MealUpdateWithoutReactionsInput | undefined;
}
