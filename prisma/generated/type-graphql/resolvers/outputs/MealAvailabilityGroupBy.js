"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCountAggregate_1 = require("../outputs/MealAvailabilityCountAggregate");
const MealAvailabilityMaxAggregate_1 = require("../outputs/MealAvailabilityMaxAggregate");
const MealAvailabilityMinAggregate_1 = require("../outputs/MealAvailabilityMinAggregate");
let MealAvailabilityGroupBy = class MealAvailabilityGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityGroupBy.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityGroupBy.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityGroupBy.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCountAggregate_1.MealAvailabilityCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCountAggregate_1.MealAvailabilityCountAggregate)
], MealAvailabilityGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityMinAggregate_1.MealAvailabilityMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityMinAggregate_1.MealAvailabilityMinAggregate)
], MealAvailabilityGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityMaxAggregate_1.MealAvailabilityMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityMaxAggregate_1.MealAvailabilityMaxAggregate)
], MealAvailabilityGroupBy.prototype, "_max", void 0);
MealAvailabilityGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealAvailabilityGroupBy", {
        isAbstract: true
    })
], MealAvailabilityGroupBy);
exports.MealAvailabilityGroupBy = MealAvailabilityGroupBy;
