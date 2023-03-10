import { MealCreateOrConnectWithoutAggregateRatingInput } from "../inputs/MealCreateOrConnectWithoutAggregateRatingInput";
import { MealCreateWithoutAggregateRatingInput } from "../inputs/MealCreateWithoutAggregateRatingInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedOneWithoutAggregateRatingInput {
    create?: MealCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutAggregateRatingInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
}
