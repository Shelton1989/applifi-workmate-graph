"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealAvailabilityMaxAggregate = class MealAvailabilityMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxAggregate.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMaxAggregate.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMaxAggregate.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMaxAggregate.prototype, "updatedAt", void 0);
MealAvailabilityMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealAvailabilityMaxAggregate", {
        isAbstract: true
    })
], MealAvailabilityMaxAggregate);
exports.MealAvailabilityMaxAggregate = MealAvailabilityMaxAggregate;
