"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealAvailabilityMinAggregate = class MealAvailabilityMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinAggregate.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMinAggregate.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMinAggregate.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityMinAggregate.prototype, "updatedAt", void 0);
MealAvailabilityMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealAvailabilityMinAggregate", {
        isAbstract: true
    })
], MealAvailabilityMinAggregate);
exports.MealAvailabilityMinAggregate = MealAvailabilityMinAggregate;
