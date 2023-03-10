"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealAvailability = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCountAggregate_1 = require("../outputs/MealAvailabilityCountAggregate");
const MealAvailabilityMaxAggregate_1 = require("../outputs/MealAvailabilityMaxAggregate");
const MealAvailabilityMinAggregate_1 = require("../outputs/MealAvailabilityMinAggregate");
let AggregateMealAvailability = class AggregateMealAvailability {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCountAggregate_1.MealAvailabilityCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCountAggregate_1.MealAvailabilityCountAggregate)
], AggregateMealAvailability.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityMinAggregate_1.MealAvailabilityMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityMinAggregate_1.MealAvailabilityMinAggregate)
], AggregateMealAvailability.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityMaxAggregate_1.MealAvailabilityMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityMaxAggregate_1.MealAvailabilityMaxAggregate)
], AggregateMealAvailability.prototype, "_max", void 0);
AggregateMealAvailability = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMealAvailability", {
        isAbstract: true
    })
], AggregateMealAvailability);
exports.AggregateMealAvailability = AggregateMealAvailability;
