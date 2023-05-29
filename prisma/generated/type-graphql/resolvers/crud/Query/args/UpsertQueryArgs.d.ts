import { QueryCreateInput } from "../../../inputs/QueryCreateInput";
import { QueryUpdateInput } from "../../../inputs/QueryUpdateInput";
import { QueryWhereUniqueInput } from "../../../inputs/QueryWhereUniqueInput";
export declare class UpsertQueryArgs {
    where: QueryWhereUniqueInput;
    create: QueryCreateInput;
    update: QueryUpdateInput;
}
