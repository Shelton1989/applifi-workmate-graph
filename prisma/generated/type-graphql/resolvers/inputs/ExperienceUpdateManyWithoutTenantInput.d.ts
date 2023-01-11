import { ExperienceCreateManyTenantInputEnvelope } from "../inputs/ExperienceCreateManyTenantInputEnvelope";
import { ExperienceCreateOrConnectWithoutTenantInput } from "../inputs/ExperienceCreateOrConnectWithoutTenantInput";
import { ExperienceCreateWithoutTenantInput } from "../inputs/ExperienceCreateWithoutTenantInput";
import { ExperienceScalarWhereInput } from "../inputs/ExperienceScalarWhereInput";
import { ExperienceUpdateManyWithWhereWithoutTenantInput } from "../inputs/ExperienceUpdateManyWithWhereWithoutTenantInput";
import { ExperienceUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/ExperienceUpdateWithWhereUniqueWithoutTenantInput";
import { ExperienceUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/ExperienceUpsertWithWhereUniqueWithoutTenantInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateManyWithoutTenantInput {
    create?: ExperienceCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: ExperienceUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: ExperienceCreateManyTenantInputEnvelope | undefined;
    set?: ExperienceWhereUniqueInput[] | undefined;
    disconnect?: ExperienceWhereUniqueInput[] | undefined;
    delete?: ExperienceWhereUniqueInput[] | undefined;
    connect?: ExperienceWhereUniqueInput[] | undefined;
    update?: ExperienceUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: ExperienceUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: ExperienceScalarWhereInput[] | undefined;
}
