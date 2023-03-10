"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCountAggregate_1 = require("../outputs/MealItemCountAggregate");
const MealItemMaxAggregate_1 = require("../outputs/MealItemMaxAggregate");
const MealItemMinAggregate_1 = require("../outputs/MealItemMinAggregate");
let MealItemGroupBy = class MealItemGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemGroupBy.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemGroupBy.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCountAggregate_1.MealItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCountAggregate_1.MealItemCountAggregate)
], MealItemGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemMinAggregate_1.MealItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemMinAggregate_1.MealItemMinAggregate)
], MealItemGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemMaxAggregate_1.MealItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemMaxAggregate_1.MealItemMaxAggregate)
], MealItemGroupBy.prototype, "_max", void 0);
MealItemGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealItemGroupBy", {
        isAbstract: true
    })
], MealItemGroupBy);
exports.MealItemGroupBy = MealItemGroupBy;
