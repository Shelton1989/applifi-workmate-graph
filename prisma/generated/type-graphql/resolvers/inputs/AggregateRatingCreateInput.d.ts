import { ExperienceCreateNestedOneWithoutAggregatedRatingInput } from "../inputs/ExperienceCreateNestedOneWithoutAggregatedRatingInput";
export declare class AggregateRatingCreateInput {
    id?: string | undefined;
    ratingValue: number;
    countedPosts?: number | undefined;
    allPosts?: number | undefined;
    ratingCount?: number | undefined;
    Experience?: ExperienceCreateNestedOneWithoutAggregatedRatingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
