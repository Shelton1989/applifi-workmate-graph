import { DocumentCreateOrConnectWithoutCommentsInput } from "../inputs/DocumentCreateOrConnectWithoutCommentsInput";
import { DocumentCreateWithoutCommentsInput } from "../inputs/DocumentCreateWithoutCommentsInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentCreateNestedOneWithoutCommentsInput {
    create?: DocumentCreateWithoutCommentsInput | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentsInput | undefined;
    connect?: DocumentWhereUniqueInput | undefined;
}
