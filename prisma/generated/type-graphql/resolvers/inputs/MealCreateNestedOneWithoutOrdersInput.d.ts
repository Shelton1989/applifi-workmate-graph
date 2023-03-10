import { MealCreateOrConnectWithoutOrdersInput } from "../inputs/MealCreateOrConnectWithoutOrdersInput";
import { MealCreateWithoutOrdersInput } from "../inputs/MealCreateWithoutOrdersInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedOneWithoutOrdersInput {
    create?: MealCreateWithoutOrdersInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutOrdersInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
}
