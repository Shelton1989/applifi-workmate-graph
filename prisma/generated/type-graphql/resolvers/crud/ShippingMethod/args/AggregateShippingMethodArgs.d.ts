import { ShippingMethodOrderByWithRelationInput } from "../../../inputs/ShippingMethodOrderByWithRelationInput";
import { ShippingMethodWhereInput } from "../../../inputs/ShippingMethodWhereInput";
import { ShippingMethodWhereUniqueInput } from "../../../inputs/ShippingMethodWhereUniqueInput";
export declare class AggregateShippingMethodArgs {
    where?: ShippingMethodWhereInput | undefined;
    orderBy?: ShippingMethodOrderByWithRelationInput[] | undefined;
    cursor?: ShippingMethodWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
