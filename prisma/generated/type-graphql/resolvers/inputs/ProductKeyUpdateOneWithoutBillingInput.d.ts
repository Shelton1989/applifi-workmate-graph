import { ProductKeyCreateOrConnectWithoutBillingInput } from "../inputs/ProductKeyCreateOrConnectWithoutBillingInput";
import { ProductKeyCreateWithoutBillingInput } from "../inputs/ProductKeyCreateWithoutBillingInput";
import { ProductKeyUpdateWithoutBillingInput } from "../inputs/ProductKeyUpdateWithoutBillingInput";
import { ProductKeyUpsertWithoutBillingInput } from "../inputs/ProductKeyUpsertWithoutBillingInput";
import { ProductKeyWhereUniqueInput } from "../inputs/ProductKeyWhereUniqueInput";
export declare class ProductKeyUpdateOneWithoutBillingInput {
    create?: ProductKeyCreateWithoutBillingInput | undefined;
    connectOrCreate?: ProductKeyCreateOrConnectWithoutBillingInput | undefined;
    upsert?: ProductKeyUpsertWithoutBillingInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ProductKeyWhereUniqueInput | undefined;
    update?: ProductKeyUpdateWithoutBillingInput | undefined;
}
