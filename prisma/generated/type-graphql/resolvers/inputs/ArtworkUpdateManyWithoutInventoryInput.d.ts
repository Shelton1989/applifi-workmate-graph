import { ArtworkCreateManyInventoryInputEnvelope } from "../inputs/ArtworkCreateManyInventoryInputEnvelope";
import { ArtworkCreateOrConnectWithoutInventoryInput } from "../inputs/ArtworkCreateOrConnectWithoutInventoryInput";
import { ArtworkCreateWithoutInventoryInput } from "../inputs/ArtworkCreateWithoutInventoryInput";
import { ArtworkScalarWhereInput } from "../inputs/ArtworkScalarWhereInput";
import { ArtworkUpdateManyWithWhereWithoutInventoryInput } from "../inputs/ArtworkUpdateManyWithWhereWithoutInventoryInput";
import { ArtworkUpdateWithWhereUniqueWithoutInventoryInput } from "../inputs/ArtworkUpdateWithWhereUniqueWithoutInventoryInput";
import { ArtworkUpsertWithWhereUniqueWithoutInventoryInput } from "../inputs/ArtworkUpsertWithWhereUniqueWithoutInventoryInput";
import { ArtworkWhereUniqueInput } from "../inputs/ArtworkWhereUniqueInput";
export declare class ArtworkUpdateManyWithoutInventoryInput {
    create?: ArtworkCreateWithoutInventoryInput[] | undefined;
    connectOrCreate?: ArtworkCreateOrConnectWithoutInventoryInput[] | undefined;
    upsert?: ArtworkUpsertWithWhereUniqueWithoutInventoryInput[] | undefined;
    createMany?: ArtworkCreateManyInventoryInputEnvelope | undefined;
    set?: ArtworkWhereUniqueInput[] | undefined;
    disconnect?: ArtworkWhereUniqueInput[] | undefined;
    delete?: ArtworkWhereUniqueInput[] | undefined;
    connect?: ArtworkWhereUniqueInput[] | undefined;
    update?: ArtworkUpdateWithWhereUniqueWithoutInventoryInput[] | undefined;
    updateMany?: ArtworkUpdateManyWithWhereWithoutInventoryInput[] | undefined;
    deleteMany?: ArtworkScalarWhereInput[] | undefined;
}
