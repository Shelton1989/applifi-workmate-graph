import { TenantCreateOrConnectWithoutMealsInput } from "../inputs/TenantCreateOrConnectWithoutMealsInput";
import { TenantCreateWithoutMealsInput } from "../inputs/TenantCreateWithoutMealsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutMealsInput {
    create?: TenantCreateWithoutMealsInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutMealsInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
