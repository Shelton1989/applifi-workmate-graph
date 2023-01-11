import { AggregateRatingCreateOrConnectWithoutExperienceInput } from "../inputs/AggregateRatingCreateOrConnectWithoutExperienceInput";
import { AggregateRatingCreateWithoutExperienceInput } from "../inputs/AggregateRatingCreateWithoutExperienceInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingCreateNestedOneWithoutExperienceInput {
    create?: AggregateRatingCreateWithoutExperienceInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutExperienceInput | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
}
