"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedOneWithoutAvailabilityInput_1 = require("../inputs/MealCreateNestedOneWithoutAvailabilityInput");
let MealAvailabilityCreateInput = class MealAvailabilityCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedOneWithoutAvailabilityInput_1.MealCreateNestedOneWithoutAvailabilityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateNestedOneWithoutAvailabilityInput_1.MealCreateNestedOneWithoutAvailabilityInput)
], MealAvailabilityCreateInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealAvailabilityCreateInput.prototype, "updatedAt", void 0);
MealAvailabilityCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityCreateInput", {
        isAbstract: true
    })
], MealAvailabilityCreateInput);
exports.MealAvailabilityCreateInput = MealAvailabilityCreateInput;
