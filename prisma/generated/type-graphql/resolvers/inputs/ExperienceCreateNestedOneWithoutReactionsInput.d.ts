import { ExperienceCreateOrConnectWithoutReactionsInput } from "../inputs/ExperienceCreateOrConnectWithoutReactionsInput";
import { ExperienceCreateWithoutReactionsInput } from "../inputs/ExperienceCreateWithoutReactionsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutReactionsInput {
    create?: ExperienceCreateWithoutReactionsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutReactionsInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
