import { ExperienceCreateManyTenantInputEnvelope } from "../inputs/ExperienceCreateManyTenantInputEnvelope";
import { ExperienceCreateOrConnectWithoutTenantInput } from "../inputs/ExperienceCreateOrConnectWithoutTenantInput";
import { ExperienceCreateWithoutTenantInput } from "../inputs/ExperienceCreateWithoutTenantInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedManyWithoutTenantInput {
    create?: ExperienceCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: ExperienceCreateManyTenantInputEnvelope | undefined;
    connect?: ExperienceWhereUniqueInput[] | undefined;
}
