import { TenantCreateOrConnectWithoutMealsInput } from "../inputs/TenantCreateOrConnectWithoutMealsInput";
import { TenantCreateWithoutMealsInput } from "../inputs/TenantCreateWithoutMealsInput";
import { TenantUpdateWithoutMealsInput } from "../inputs/TenantUpdateWithoutMealsInput";
import { TenantUpsertWithoutMealsInput } from "../inputs/TenantUpsertWithoutMealsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneRequiredWithoutMealsInput {
    create?: TenantCreateWithoutMealsInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutMealsInput | undefined;
    upsert?: TenantUpsertWithoutMealsInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutMealsInput | undefined;
}
