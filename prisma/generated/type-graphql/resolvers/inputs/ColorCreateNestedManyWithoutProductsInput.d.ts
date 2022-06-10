import { ColorCreateOrConnectWithoutProductsInput } from "../inputs/ColorCreateOrConnectWithoutProductsInput";
import { ColorCreateWithoutProductsInput } from "../inputs/ColorCreateWithoutProductsInput";
import { ColorWhereUniqueInput } from "../inputs/ColorWhereUniqueInput";
export declare class ColorCreateNestedManyWithoutProductsInput {
    create?: ColorCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput[] | undefined;
    connect?: ColorWhereUniqueInput[] | undefined;
}
