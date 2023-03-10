"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutAvailabilityInput_1 = require("../inputs/MealCreateWithoutAvailabilityInput");
const MealUpdateWithoutAvailabilityInput_1 = require("../inputs/MealUpdateWithoutAvailabilityInput");
let MealUpsertWithoutAvailabilityInput = class MealUpsertWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutAvailabilityInput_1.MealUpdateWithoutAvailabilityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutAvailabilityInput_1.MealUpdateWithoutAvailabilityInput)
], MealUpsertWithoutAvailabilityInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAvailabilityInput_1.MealCreateWithoutAvailabilityInput)
], MealUpsertWithoutAvailabilityInput.prototype, "create", void 0);
MealUpsertWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithoutAvailabilityInput", {
        isAbstract: true
    })
], MealUpsertWithoutAvailabilityInput);
exports.MealUpsertWithoutAvailabilityInput = MealUpsertWithoutAvailabilityInput;
