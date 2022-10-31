"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicOrderByWithAggregationInput_1 = require("../../../inputs/TopicOrderByWithAggregationInput");
const TopicScalarWhereWithAggregatesInput_1 = require("../../../inputs/TopicScalarWhereWithAggregatesInput");
const TopicWhereInput_1 = require("../../../inputs/TopicWhereInput");
const TopicScalarFieldEnum_1 = require("../../../../enums/TopicScalarFieldEnum");
let GroupByTopicArgs = class GroupByTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], GroupByTopicArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicOrderByWithAggregationInput_1.TopicOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTopicArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicScalarFieldEnum_1.TopicScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTopicArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicScalarWhereWithAggregatesInput_1.TopicScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicScalarWhereWithAggregatesInput_1.TopicScalarWhereWithAggregatesInput)
], GroupByTopicArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTopicArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTopicArgs.prototype, "skip", void 0);
GroupByTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTopicArgs);
exports.GroupByTopicArgs = GroupByTopicArgs;
