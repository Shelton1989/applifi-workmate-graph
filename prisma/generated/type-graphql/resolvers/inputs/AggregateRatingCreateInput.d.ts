import { ExperienceCreateNestedOneWithoutAggregateRatingInput } from "../inputs/ExperienceCreateNestedOneWithoutAggregateRatingInput";
export declare class AggregateRatingCreateInput {
    id?: string | undefined;
    ratingValue: number;
    countedPosts?: number | undefined;
    allPosts?: number | undefined;
    ratingCount?: number | undefined;
    Experience?: ExperienceCreateNestedOneWithoutAggregateRatingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
