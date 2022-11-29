"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsAvgAggregate_1 = require("../outputs/TopicListsAvgAggregate");
const TopicListsCountAggregate_1 = require("../outputs/TopicListsCountAggregate");
const TopicListsMaxAggregate_1 = require("../outputs/TopicListsMaxAggregate");
const TopicListsMinAggregate_1 = require("../outputs/TopicListsMinAggregate");
const TopicListsSumAggregate_1 = require("../outputs/TopicListsSumAggregate");
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let TopicListsGroupBy = class TopicListsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicListsGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsGroupBy.prototype, "lists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicListsGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsCountAggregate_1.TopicListsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsCountAggregate_1.TopicListsCountAggregate)
], TopicListsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsAvgAggregate_1.TopicListsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsAvgAggregate_1.TopicListsAvgAggregate)
], TopicListsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsSumAggregate_1.TopicListsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsSumAggregate_1.TopicListsSumAggregate)
], TopicListsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsMinAggregate_1.TopicListsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsMinAggregate_1.TopicListsMinAggregate)
], TopicListsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsMaxAggregate_1.TopicListsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsMaxAggregate_1.TopicListsMaxAggregate)
], TopicListsGroupBy.prototype, "_max", void 0);
TopicListsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicListsGroupBy", {
        isAbstract: true
    })
], TopicListsGroupBy);
exports.TopicListsGroupBy = TopicListsGroupBy;
