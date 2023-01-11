import { TenantCreateOrConnectWithoutExperiencesInput } from "../inputs/TenantCreateOrConnectWithoutExperiencesInput";
import { TenantCreateWithoutExperiencesInput } from "../inputs/TenantCreateWithoutExperiencesInput";
import { TenantUpdateWithoutExperiencesInput } from "../inputs/TenantUpdateWithoutExperiencesInput";
import { TenantUpsertWithoutExperiencesInput } from "../inputs/TenantUpsertWithoutExperiencesInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneRequiredWithoutExperiencesInput {
    create?: TenantCreateWithoutExperiencesInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutExperiencesInput | undefined;
    upsert?: TenantUpsertWithoutExperiencesInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutExperiencesInput | undefined;
}
