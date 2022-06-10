import { AddressCreateManyUserInputEnvelope } from "../inputs/AddressCreateManyUserInputEnvelope";
import { AddressCreateOrConnectWithoutUserInput } from "../inputs/AddressCreateOrConnectWithoutUserInput";
import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressScalarWhereInput } from "../inputs/AddressScalarWhereInput";
import { AddressUpdateManyWithWhereWithoutUserInput } from "../inputs/AddressUpdateManyWithWhereWithoutUserInput";
import { AddressUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AddressUpdateWithWhereUniqueWithoutUserInput";
import { AddressUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AddressUpsertWithWhereUniqueWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateManyWithoutUserInput {
    create?: AddressCreateWithoutUserInput[] | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: AddressCreateManyUserInputEnvelope | undefined;
    set?: AddressWhereUniqueInput[] | undefined;
    disconnect?: AddressWhereUniqueInput[] | undefined;
    delete?: AddressWhereUniqueInput[] | undefined;
    connect?: AddressWhereUniqueInput[] | undefined;
    update?: AddressUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: AddressScalarWhereInput[] | undefined;
}
