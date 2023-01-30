import { ExperienceCreateNestedOneWithoutFeaturesInput } from "../inputs/ExperienceCreateNestedOneWithoutFeaturesInput";
export declare class FeaturesCreateInput {
    id?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutFeaturesInput;
    title: string;
    shortDescription: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
