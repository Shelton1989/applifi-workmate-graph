import { GraphQLResolveInfo } from "graphql";
import { CreateDocumentArgs } from "./args/CreateDocumentArgs";
import { Document } from "../../../models/Document";
export declare class CreateDocumentResolver {
    createDocument(ctx: any, info: GraphQLResolveInfo, args: CreateDocumentArgs): Promise<Document>;
}
