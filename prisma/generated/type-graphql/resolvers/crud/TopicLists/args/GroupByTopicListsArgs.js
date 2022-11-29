"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsOrderByWithAggregationInput_1 = require("../../../inputs/TopicListsOrderByWithAggregationInput");
const TopicListsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TopicListsScalarWhereWithAggregatesInput");
const TopicListsWhereInput_1 = require("../../../inputs/TopicListsWhereInput");
const TopicListsScalarFieldEnum_1 = require("../../../../enums/TopicListsScalarFieldEnum");
let GroupByTopicListsArgs = class GroupByTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereInput_1.TopicListsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsWhereInput_1.TopicListsWhereInput)
], GroupByTopicListsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsOrderByWithAggregationInput_1.TopicListsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTopicListsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsScalarFieldEnum_1.TopicListsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTopicListsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsScalarWhereWithAggregatesInput_1.TopicListsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsScalarWhereWithAggregatesInput_1.TopicListsScalarWhereWithAggregatesInput)
], GroupByTopicListsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTopicListsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTopicListsArgs.prototype, "skip", void 0);
GroupByTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTopicListsArgs);
exports.GroupByTopicListsArgs = GroupByTopicListsArgs;
