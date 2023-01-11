import { ExperienceCreateInput } from "../../../inputs/ExperienceCreateInput";
import { ExperienceUpdateInput } from "../../../inputs/ExperienceUpdateInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";
export declare class UpsertExperienceArgs {
    where: ExperienceWhereUniqueInput;
    create: ExperienceCreateInput;
    update: ExperienceUpdateInput;
}
