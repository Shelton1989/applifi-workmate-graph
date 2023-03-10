import { MealCreateOrConnectWithoutFeaturesInput } from "../inputs/MealCreateOrConnectWithoutFeaturesInput";
import { MealCreateWithoutFeaturesInput } from "../inputs/MealCreateWithoutFeaturesInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedOneWithoutFeaturesInput {
    create?: MealCreateWithoutFeaturesInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutFeaturesInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
}
