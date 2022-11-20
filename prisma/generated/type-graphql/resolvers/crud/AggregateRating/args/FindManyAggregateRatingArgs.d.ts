import { AggregateRatingOrderByWithRelationInput } from "../../../inputs/AggregateRatingOrderByWithRelationInput";
import { AggregateRatingWhereInput } from "../../../inputs/AggregateRatingWhereInput";
import { AggregateRatingWhereUniqueInput } from "../../../inputs/AggregateRatingWhereUniqueInput";
export declare class FindManyAggregateRatingArgs {
    where?: AggregateRatingWhereInput | undefined;
    orderBy?: AggregateRatingOrderByWithRelationInput[] | undefined;
    cursor?: AggregateRatingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "ratingValue" | "countedPosts" | "allPosts" | "ratingCount" | "createdAt" | "updatedAt"> | undefined;
}
