import { MealCreateOrConnectWithoutFeaturesInput } from "../inputs/MealCreateOrConnectWithoutFeaturesInput";
import { MealCreateWithoutFeaturesInput } from "../inputs/MealCreateWithoutFeaturesInput";
import { MealUpdateWithoutFeaturesInput } from "../inputs/MealUpdateWithoutFeaturesInput";
import { MealUpsertWithoutFeaturesInput } from "../inputs/MealUpsertWithoutFeaturesInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateOneRequiredWithoutFeaturesInput {
    create?: MealCreateWithoutFeaturesInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutFeaturesInput | undefined;
    upsert?: MealUpsertWithoutFeaturesInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
    update?: MealUpdateWithoutFeaturesInput | undefined;
}
