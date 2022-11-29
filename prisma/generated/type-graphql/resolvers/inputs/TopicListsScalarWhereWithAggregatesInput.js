"use strict";
var TopicListsScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumLIST_TYPEWithAggregatesFilter_1 = require("../inputs/EnumLIST_TYPEWithAggregatesFilter");
const IntNullableListFilter_1 = require("../inputs/IntNullableListFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let TopicListsScalarWhereWithAggregatesInput = TopicListsScalarWhereWithAggregatesInput_1 = class TopicListsScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TopicListsScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLIST_TYPEWithAggregatesFilter_1.EnumLIST_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLIST_TYPEWithAggregatesFilter_1.EnumLIST_TYPEWithAggregatesFilter)
], TopicListsScalarWhereWithAggregatesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TopicListsScalarWhereWithAggregatesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableListFilter_1.IntNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableListFilter_1.IntNullableListFilter)
], TopicListsScalarWhereWithAggregatesInput.prototype, "lists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], TopicListsScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], TopicListsScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
TopicListsScalarWhereWithAggregatesInput = TopicListsScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], TopicListsScalarWhereWithAggregatesInput);
exports.TopicListsScalarWhereWithAggregatesInput = TopicListsScalarWhereWithAggregatesInput;
