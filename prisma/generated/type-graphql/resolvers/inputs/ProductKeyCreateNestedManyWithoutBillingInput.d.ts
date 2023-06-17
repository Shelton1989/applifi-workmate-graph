import { ProductKeyCreateManyBillingInputEnvelope } from "../inputs/ProductKeyCreateManyBillingInputEnvelope";
import { ProductKeyCreateOrConnectWithoutBillingInput } from "../inputs/ProductKeyCreateOrConnectWithoutBillingInput";
import { ProductKeyCreateWithoutBillingInput } from "../inputs/ProductKeyCreateWithoutBillingInput";
import { ProductKeyWhereUniqueInput } from "../inputs/ProductKeyWhereUniqueInput";
export declare class ProductKeyCreateNestedManyWithoutBillingInput {
    create?: ProductKeyCreateWithoutBillingInput[] | undefined;
    connectOrCreate?: ProductKeyCreateOrConnectWithoutBillingInput[] | undefined;
    createMany?: ProductKeyCreateManyBillingInputEnvelope | undefined;
    connect?: ProductKeyWhereUniqueInput[] | undefined;
}
