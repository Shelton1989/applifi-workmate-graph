"use strict";
var MealAvailabilityWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const MealRelationFilter_1 = require("../inputs/MealRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let MealAvailabilityWhereInput = MealAvailabilityWhereInput_1 = class MealAvailabilityWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealAvailabilityWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealRelationFilter_1.MealRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealRelationFilter_1.MealRelationFilter)
], MealAvailabilityWhereInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealAvailabilityWhereInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], MealAvailabilityWhereInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], MealAvailabilityWhereInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealAvailabilityWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealAvailabilityWhereInput.prototype, "updatedAt", void 0);
MealAvailabilityWhereInput = MealAvailabilityWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityWhereInput", {
        isAbstract: true
    })
], MealAvailabilityWhereInput);
exports.MealAvailabilityWhereInput = MealAvailabilityWhereInput;
