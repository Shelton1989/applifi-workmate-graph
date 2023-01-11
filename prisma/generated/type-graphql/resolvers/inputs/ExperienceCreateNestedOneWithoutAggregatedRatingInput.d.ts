import { ExperienceCreateOrConnectWithoutAggregatedRatingInput } from "../inputs/ExperienceCreateOrConnectWithoutAggregatedRatingInput";
import { ExperienceCreateWithoutAggregatedRatingInput } from "../inputs/ExperienceCreateWithoutAggregatedRatingInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutAggregatedRatingInput {
    create?: ExperienceCreateWithoutAggregatedRatingInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutAggregatedRatingInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
