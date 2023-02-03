import { ExperienceCreateOrConnectWithoutReactionsInput } from "../inputs/ExperienceCreateOrConnectWithoutReactionsInput";
import { ExperienceCreateWithoutReactionsInput } from "../inputs/ExperienceCreateWithoutReactionsInput";
import { ExperienceUpdateWithoutReactionsInput } from "../inputs/ExperienceUpdateWithoutReactionsInput";
import { ExperienceUpsertWithoutReactionsInput } from "../inputs/ExperienceUpsertWithoutReactionsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneWithoutReactionsInput {
    create?: ExperienceCreateWithoutReactionsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: ExperienceUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutReactionsInput | undefined;
}
