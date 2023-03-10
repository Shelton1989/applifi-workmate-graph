import { AggregateRatingCreateOrConnectWithoutMealInput } from "../inputs/AggregateRatingCreateOrConnectWithoutMealInput";
import { AggregateRatingCreateWithoutMealInput } from "../inputs/AggregateRatingCreateWithoutMealInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingCreateNestedOneWithoutMealInput {
    create?: AggregateRatingCreateWithoutMealInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutMealInput | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
}
