"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCountAggregate_1 = require("../outputs/MealItemOptionCountAggregate");
const MealItemOptionMaxAggregate_1 = require("../outputs/MealItemOptionMaxAggregate");
const MealItemOptionMinAggregate_1 = require("../outputs/MealItemOptionMinAggregate");
let MealItemOptionGroupBy = class MealItemOptionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionGroupBy.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionGroupBy.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCountAggregate_1.MealItemOptionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCountAggregate_1.MealItemOptionCountAggregate)
], MealItemOptionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionMinAggregate_1.MealItemOptionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionMinAggregate_1.MealItemOptionMinAggregate)
], MealItemOptionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionMaxAggregate_1.MealItemOptionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionMaxAggregate_1.MealItemOptionMaxAggregate)
], MealItemOptionGroupBy.prototype, "_max", void 0);
MealItemOptionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealItemOptionGroupBy", {
        isAbstract: true
    })
], MealItemOptionGroupBy);
exports.MealItemOptionGroupBy = MealItemOptionGroupBy;
