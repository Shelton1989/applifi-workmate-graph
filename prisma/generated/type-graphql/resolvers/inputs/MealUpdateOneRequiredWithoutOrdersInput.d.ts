import { MealCreateOrConnectWithoutOrdersInput } from "../inputs/MealCreateOrConnectWithoutOrdersInput";
import { MealCreateWithoutOrdersInput } from "../inputs/MealCreateWithoutOrdersInput";
import { MealUpdateWithoutOrdersInput } from "../inputs/MealUpdateWithoutOrdersInput";
import { MealUpsertWithoutOrdersInput } from "../inputs/MealUpsertWithoutOrdersInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateOneRequiredWithoutOrdersInput {
    create?: MealCreateWithoutOrdersInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: MealUpsertWithoutOrdersInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
    update?: MealUpdateWithoutOrdersInput | undefined;
}
