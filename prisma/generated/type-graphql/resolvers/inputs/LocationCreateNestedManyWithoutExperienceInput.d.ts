import { LocationCreateManyExperienceInputEnvelope } from "../inputs/LocationCreateManyExperienceInputEnvelope";
import { LocationCreateOrConnectWithoutExperienceInput } from "../inputs/LocationCreateOrConnectWithoutExperienceInput";
import { LocationCreateWithoutExperienceInput } from "../inputs/LocationCreateWithoutExperienceInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationCreateNestedManyWithoutExperienceInput {
    create?: LocationCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutExperienceInput[] | undefined;
    createMany?: LocationCreateManyExperienceInputEnvelope | undefined;
    connect?: LocationWhereUniqueInput[] | undefined;
}
