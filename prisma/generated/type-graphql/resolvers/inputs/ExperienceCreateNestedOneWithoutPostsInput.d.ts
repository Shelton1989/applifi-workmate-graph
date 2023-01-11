import { ExperienceCreateOrConnectWithoutPostsInput } from "../inputs/ExperienceCreateOrConnectWithoutPostsInput";
import { ExperienceCreateWithoutPostsInput } from "../inputs/ExperienceCreateWithoutPostsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutPostsInput {
    create?: ExperienceCreateWithoutPostsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutPostsInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
