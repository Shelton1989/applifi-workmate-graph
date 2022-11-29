"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopicLists = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsAvgAggregate_1 = require("../outputs/TopicListsAvgAggregate");
const TopicListsCountAggregate_1 = require("../outputs/TopicListsCountAggregate");
const TopicListsMaxAggregate_1 = require("../outputs/TopicListsMaxAggregate");
const TopicListsMinAggregate_1 = require("../outputs/TopicListsMinAggregate");
const TopicListsSumAggregate_1 = require("../outputs/TopicListsSumAggregate");
let AggregateTopicLists = class AggregateTopicLists {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsCountAggregate_1.TopicListsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsCountAggregate_1.TopicListsCountAggregate)
], AggregateTopicLists.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsAvgAggregate_1.TopicListsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsAvgAggregate_1.TopicListsAvgAggregate)
], AggregateTopicLists.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsSumAggregate_1.TopicListsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsSumAggregate_1.TopicListsSumAggregate)
], AggregateTopicLists.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsMinAggregate_1.TopicListsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsMinAggregate_1.TopicListsMinAggregate)
], AggregateTopicLists.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsMaxAggregate_1.TopicListsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsMaxAggregate_1.TopicListsMaxAggregate)
], AggregateTopicLists.prototype, "_max", void 0);
AggregateTopicLists = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTopicLists", {
        isAbstract: true
    })
], AggregateTopicLists);
exports.AggregateTopicLists = AggregateTopicLists;
