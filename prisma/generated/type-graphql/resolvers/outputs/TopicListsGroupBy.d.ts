import { TopicListsAvgAggregate } from "../outputs/TopicListsAvgAggregate";
import { TopicListsCountAggregate } from "../outputs/TopicListsCountAggregate";
import { TopicListsMaxAggregate } from "../outputs/TopicListsMaxAggregate";
import { TopicListsMinAggregate } from "../outputs/TopicListsMinAggregate";
import { TopicListsSumAggregate } from "../outputs/TopicListsSumAggregate";
export declare class TopicListsGroupBy {
    id: string;
    type: "TRENDING" | "LATEST" | "POPULAR" | "FEATURED";
    title: string;
    lists: number[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TopicListsCountAggregate | null;
    _avg: TopicListsAvgAggregate | null;
    _sum: TopicListsSumAggregate | null;
    _min: TopicListsMinAggregate | null;
    _max: TopicListsMaxAggregate | null;
}
