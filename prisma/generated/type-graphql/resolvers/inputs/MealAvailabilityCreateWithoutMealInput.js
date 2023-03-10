"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityCreateWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealAvailabilityCreateWithoutMealInput = class MealAvailabilityCreateWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCreateWithoutMealInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateWithoutMealInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateWithoutMealInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateWithoutMealInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateWithoutMealInput.prototype, "updatedAt", void 0);
MealAvailabilityCreateWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityCreateWithoutMealInput", {
        isAbstract: true
    })
], MealAvailabilityCreateWithoutMealInput);
exports.MealAvailabilityCreateWithoutMealInput = MealAvailabilityCreateWithoutMealInput;
