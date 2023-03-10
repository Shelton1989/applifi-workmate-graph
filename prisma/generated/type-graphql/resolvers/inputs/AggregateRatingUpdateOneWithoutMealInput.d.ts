import { AggregateRatingCreateOrConnectWithoutMealInput } from "../inputs/AggregateRatingCreateOrConnectWithoutMealInput";
import { AggregateRatingCreateWithoutMealInput } from "../inputs/AggregateRatingCreateWithoutMealInput";
import { AggregateRatingUpdateWithoutMealInput } from "../inputs/AggregateRatingUpdateWithoutMealInput";
import { AggregateRatingUpsertWithoutMealInput } from "../inputs/AggregateRatingUpsertWithoutMealInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingUpdateOneWithoutMealInput {
    create?: AggregateRatingCreateWithoutMealInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutMealInput | undefined;
    upsert?: AggregateRatingUpsertWithoutMealInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
    update?: AggregateRatingUpdateWithoutMealInput | undefined;
}
