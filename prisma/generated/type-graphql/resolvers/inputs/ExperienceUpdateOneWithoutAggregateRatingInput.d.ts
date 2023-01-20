import { ExperienceCreateOrConnectWithoutAggregateRatingInput } from "../inputs/ExperienceCreateOrConnectWithoutAggregateRatingInput";
import { ExperienceCreateWithoutAggregateRatingInput } from "../inputs/ExperienceCreateWithoutAggregateRatingInput";
import { ExperienceUpdateWithoutAggregateRatingInput } from "../inputs/ExperienceUpdateWithoutAggregateRatingInput";
import { ExperienceUpsertWithoutAggregateRatingInput } from "../inputs/ExperienceUpsertWithoutAggregateRatingInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneWithoutAggregateRatingInput {
    create?: ExperienceCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutAggregateRatingInput | undefined;
    upsert?: ExperienceUpsertWithoutAggregateRatingInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutAggregateRatingInput | undefined;
}
