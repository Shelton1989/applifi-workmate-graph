import { ExperienceCreateOrConnectWithoutPostsInput } from "../inputs/ExperienceCreateOrConnectWithoutPostsInput";
import { ExperienceCreateWithoutPostsInput } from "../inputs/ExperienceCreateWithoutPostsInput";
import { ExperienceUpdateWithoutPostsInput } from "../inputs/ExperienceUpdateWithoutPostsInput";
import { ExperienceUpsertWithoutPostsInput } from "../inputs/ExperienceUpsertWithoutPostsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneWithoutPostsInput {
    create?: ExperienceCreateWithoutPostsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutPostsInput | undefined;
    upsert?: ExperienceUpsertWithoutPostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutPostsInput | undefined;
}
