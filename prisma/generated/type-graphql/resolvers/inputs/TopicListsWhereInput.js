"use strict";
var TopicListsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumLIST_TYPEFilter_1 = require("../inputs/EnumLIST_TYPEFilter");
const IntNullableListFilter_1 = require("../inputs/IntNullableListFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TopicListsWhereInput = TopicListsWhereInput_1 = class TopicListsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TopicListsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicListsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TopicListsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLIST_TYPEFilter_1.EnumLIST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLIST_TYPEFilter_1.EnumLIST_TYPEFilter)
], TopicListsWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TopicListsWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableListFilter_1.IntNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableListFilter_1.IntNullableListFilter)
], TopicListsWhereInput.prototype, "lists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TopicListsWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TopicListsWhereInput.prototype, "updatedAt", void 0);
TopicListsWhereInput = TopicListsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsWhereInput", {
        isAbstract: true
    })
], TopicListsWhereInput);
exports.TopicListsWhereInput = TopicListsWhereInput;
