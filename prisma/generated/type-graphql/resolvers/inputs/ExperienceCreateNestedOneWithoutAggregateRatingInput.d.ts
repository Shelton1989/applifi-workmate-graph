import { ExperienceCreateOrConnectWithoutAggregateRatingInput } from "../inputs/ExperienceCreateOrConnectWithoutAggregateRatingInput";
import { ExperienceCreateWithoutAggregateRatingInput } from "../inputs/ExperienceCreateWithoutAggregateRatingInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutAggregateRatingInput {
    create?: ExperienceCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutAggregateRatingInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
