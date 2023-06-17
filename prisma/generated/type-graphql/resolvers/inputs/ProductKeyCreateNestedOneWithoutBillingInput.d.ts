import { ProductKeyCreateOrConnectWithoutBillingInput } from "../inputs/ProductKeyCreateOrConnectWithoutBillingInput";
import { ProductKeyCreateWithoutBillingInput } from "../inputs/ProductKeyCreateWithoutBillingInput";
import { ProductKeyWhereUniqueInput } from "../inputs/ProductKeyWhereUniqueInput";
export declare class ProductKeyCreateNestedOneWithoutBillingInput {
    create?: ProductKeyCreateWithoutBillingInput | undefined;
    connectOrCreate?: ProductKeyCreateOrConnectWithoutBillingInput | undefined;
    connect?: ProductKeyWhereUniqueInput | undefined;
}
