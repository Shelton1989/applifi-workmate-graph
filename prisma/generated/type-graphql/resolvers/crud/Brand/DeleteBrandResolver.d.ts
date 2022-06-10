import { GraphQLResolveInfo } from "graphql";
import { DeleteBrandArgs } from "./args/DeleteBrandArgs";
import { Brand } from "../../../models/Brand";
export declare class DeleteBrandResolver {
    deleteBrand(ctx: any, info: GraphQLResolveInfo, args: DeleteBrandArgs): Promise<Brand | null>;
}
