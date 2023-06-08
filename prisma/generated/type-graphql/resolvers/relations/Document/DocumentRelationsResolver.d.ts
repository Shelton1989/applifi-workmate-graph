import { Comment } from "../../../models/Comment";
import { Document } from "../../../models/Document";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { DocumentCommentsArgs } from "./args/DocumentCommentsArgs";
export declare class DocumentRelationsResolver {
    Tenant(document: Document, ctx: any): Promise<Tenant>;
    Comments(document: Document, ctx: any, args: DocumentCommentsArgs): Promise<Comment[]>;
    CreatedBy(document: Document, ctx: any): Promise<User | null>;
}
