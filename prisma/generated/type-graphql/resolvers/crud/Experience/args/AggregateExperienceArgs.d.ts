import { ExperienceOrderByWithRelationInput } from "../../../inputs/ExperienceOrderByWithRelationInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";
export declare class AggregateExperienceArgs {
    where?: ExperienceWhereInput | undefined;
    orderBy?: ExperienceOrderByWithRelationInput[] | undefined;
    cursor?: ExperienceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
