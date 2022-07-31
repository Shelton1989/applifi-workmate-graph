"use strict";
var NotificationScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let NotificationScalarWhereInput = NotificationScalarWhereInput_1 = class NotificationScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NotificationScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NotificationScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], NotificationScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], NotificationScalarWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationScalarWhereInput.prototype, "actorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NotificationScalarWhereInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], NotificationScalarWhereInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], NotificationScalarWhereInput.prototype, "updatedAt", void 0);
NotificationScalarWhereInput = NotificationScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationScalarWhereInput", {
        isAbstract: true
    })
], NotificationScalarWhereInput);
exports.NotificationScalarWhereInput = NotificationScalarWhereInput;
