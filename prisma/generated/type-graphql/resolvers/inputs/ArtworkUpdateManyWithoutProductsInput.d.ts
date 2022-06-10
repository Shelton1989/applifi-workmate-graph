import { ArtworkCreateOrConnectWithoutProductsInput } from "../inputs/ArtworkCreateOrConnectWithoutProductsInput";
import { ArtworkCreateWithoutProductsInput } from "../inputs/ArtworkCreateWithoutProductsInput";
import { ArtworkScalarWhereInput } from "../inputs/ArtworkScalarWhereInput";
import { ArtworkUpdateManyWithWhereWithoutProductsInput } from "../inputs/ArtworkUpdateManyWithWhereWithoutProductsInput";
import { ArtworkUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/ArtworkUpdateWithWhereUniqueWithoutProductsInput";
import { ArtworkUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/ArtworkUpsertWithWhereUniqueWithoutProductsInput";
import { ArtworkWhereUniqueInput } from "../inputs/ArtworkWhereUniqueInput";
export declare class ArtworkUpdateManyWithoutProductsInput {
    create?: ArtworkCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: ArtworkCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: ArtworkUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    set?: ArtworkWhereUniqueInput[] | undefined;
    disconnect?: ArtworkWhereUniqueInput[] | undefined;
    delete?: ArtworkWhereUniqueInput[] | undefined;
    connect?: ArtworkWhereUniqueInput[] | undefined;
    update?: ArtworkUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: ArtworkUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: ArtworkScalarWhereInput[] | undefined;
}
