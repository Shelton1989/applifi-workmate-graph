import { AggregateRatingCreateOrConnectWithoutExperienceInput } from "../inputs/AggregateRatingCreateOrConnectWithoutExperienceInput";
import { AggregateRatingCreateWithoutExperienceInput } from "../inputs/AggregateRatingCreateWithoutExperienceInput";
import { AggregateRatingUpdateWithoutExperienceInput } from "../inputs/AggregateRatingUpdateWithoutExperienceInput";
import { AggregateRatingUpsertWithoutExperienceInput } from "../inputs/AggregateRatingUpsertWithoutExperienceInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingUpdateOneWithoutExperienceInput {
    create?: AggregateRatingCreateWithoutExperienceInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutExperienceInput | undefined;
    upsert?: AggregateRatingUpsertWithoutExperienceInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
    update?: AggregateRatingUpdateWithoutExperienceInput | undefined;
}
