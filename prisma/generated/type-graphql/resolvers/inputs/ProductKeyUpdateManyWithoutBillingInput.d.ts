import { ProductKeyCreateManyBillingInputEnvelope } from "../inputs/ProductKeyCreateManyBillingInputEnvelope";
import { ProductKeyCreateOrConnectWithoutBillingInput } from "../inputs/ProductKeyCreateOrConnectWithoutBillingInput";
import { ProductKeyCreateWithoutBillingInput } from "../inputs/ProductKeyCreateWithoutBillingInput";
import { ProductKeyScalarWhereInput } from "../inputs/ProductKeyScalarWhereInput";
import { ProductKeyUpdateManyWithWhereWithoutBillingInput } from "../inputs/ProductKeyUpdateManyWithWhereWithoutBillingInput";
import { ProductKeyUpdateWithWhereUniqueWithoutBillingInput } from "../inputs/ProductKeyUpdateWithWhereUniqueWithoutBillingInput";
import { ProductKeyUpsertWithWhereUniqueWithoutBillingInput } from "../inputs/ProductKeyUpsertWithWhereUniqueWithoutBillingInput";
import { ProductKeyWhereUniqueInput } from "../inputs/ProductKeyWhereUniqueInput";
export declare class ProductKeyUpdateManyWithoutBillingInput {
    create?: ProductKeyCreateWithoutBillingInput[] | undefined;
    connectOrCreate?: ProductKeyCreateOrConnectWithoutBillingInput[] | undefined;
    upsert?: ProductKeyUpsertWithWhereUniqueWithoutBillingInput[] | undefined;
    createMany?: ProductKeyCreateManyBillingInputEnvelope | undefined;
    set?: ProductKeyWhereUniqueInput[] | undefined;
    disconnect?: ProductKeyWhereUniqueInput[] | undefined;
    delete?: ProductKeyWhereUniqueInput[] | undefined;
    connect?: ProductKeyWhereUniqueInput[] | undefined;
    update?: ProductKeyUpdateWithWhereUniqueWithoutBillingInput[] | undefined;
    updateMany?: ProductKeyUpdateManyWithWhereWithoutBillingInput[] | undefined;
    deleteMany?: ProductKeyScalarWhereInput[] | undefined;
}
