import { ExperienceCreateOrConnectWithoutAggregatedRatingInput } from "../inputs/ExperienceCreateOrConnectWithoutAggregatedRatingInput";
import { ExperienceCreateWithoutAggregatedRatingInput } from "../inputs/ExperienceCreateWithoutAggregatedRatingInput";
import { ExperienceUpdateWithoutAggregatedRatingInput } from "../inputs/ExperienceUpdateWithoutAggregatedRatingInput";
import { ExperienceUpsertWithoutAggregatedRatingInput } from "../inputs/ExperienceUpsertWithoutAggregatedRatingInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneWithoutAggregatedRatingInput {
    create?: ExperienceCreateWithoutAggregatedRatingInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutAggregatedRatingInput | undefined;
    upsert?: ExperienceUpsertWithoutAggregatedRatingInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutAggregatedRatingInput | undefined;
}
