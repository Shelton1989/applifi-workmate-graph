import { GraphQLResolveInfo } from "graphql";
import { UpdateDocumentArgs } from "./args/UpdateDocumentArgs";
import { Document } from "../../../models/Document";
export declare class UpdateDocumentResolver {
    updateDocument(ctx: any, info: GraphQLResolveInfo, args: UpdateDocumentArgs): Promise<Document | null>;
}
