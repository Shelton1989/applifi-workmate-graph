import { FeaturesCreateInput } from "../../../inputs/FeaturesCreateInput";
import { FeaturesUpdateInput } from "../../../inputs/FeaturesUpdateInput";
import { FeaturesWhereUniqueInput } from "../../../inputs/FeaturesWhereUniqueInput";
export declare class UpsertFeaturesArgs {
    where: FeaturesWhereUniqueInput;
    create: FeaturesCreateInput;
    update: FeaturesUpdateInput;
}
