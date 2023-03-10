import { MealCreateOrConnectWithoutAggregateRatingInput } from "../inputs/MealCreateOrConnectWithoutAggregateRatingInput";
import { MealCreateWithoutAggregateRatingInput } from "../inputs/MealCreateWithoutAggregateRatingInput";
import { MealUpdateWithoutAggregateRatingInput } from "../inputs/MealUpdateWithoutAggregateRatingInput";
import { MealUpsertWithoutAggregateRatingInput } from "../inputs/MealUpsertWithoutAggregateRatingInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateOneWithoutAggregateRatingInput {
    create?: MealCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutAggregateRatingInput | undefined;
    upsert?: MealUpsertWithoutAggregateRatingInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: MealWhereUniqueInput | undefined;
    update?: MealUpdateWithoutAggregateRatingInput | undefined;
}
