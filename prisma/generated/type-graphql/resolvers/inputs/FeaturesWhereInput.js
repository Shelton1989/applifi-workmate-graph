"use strict";
var FeaturesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const MealRelationFilter_1 = require("../inputs/MealRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let FeaturesWhereInput = FeaturesWhereInput_1 = class FeaturesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FeaturesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FeaturesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealRelationFilter_1.MealRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealRelationFilter_1.MealRelationFilter)
], FeaturesWhereInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FeaturesWhereInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FeaturesWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], FeaturesWhereInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FeaturesWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], FeaturesWhereInput.prototype, "updatedAt", void 0);
FeaturesWhereInput = FeaturesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesWhereInput", {
        isAbstract: true
    })
], FeaturesWhereInput);
exports.FeaturesWhereInput = FeaturesWhereInput;
