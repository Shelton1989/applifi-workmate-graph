import { AddressCreateManyUserInputEnvelope } from "../inputs/AddressCreateManyUserInputEnvelope";
import { AddressCreateOrConnectWithoutUserInput } from "../inputs/AddressCreateOrConnectWithoutUserInput";
import { AddressCreateWithoutUserInput } from "../inputs/AddressCreateWithoutUserInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressCreateNestedManyWithoutUserInput {
    create?: AddressCreateWithoutUserInput[] | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: AddressCreateManyUserInputEnvelope | undefined;
    connect?: AddressWhereUniqueInput[] | undefined;
}
