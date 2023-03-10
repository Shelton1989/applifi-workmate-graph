"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutReactionsInput_1 = require("../inputs/MealCreateWithoutReactionsInput");
const MealUpdateWithoutReactionsInput_1 = require("../inputs/MealUpdateWithoutReactionsInput");
let MealUpsertWithoutReactionsInput = class MealUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutReactionsInput_1.MealUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutReactionsInput_1.MealUpdateWithoutReactionsInput)
], MealUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutReactionsInput_1.MealCreateWithoutReactionsInput)
], MealUpsertWithoutReactionsInput.prototype, "create", void 0);
MealUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], MealUpsertWithoutReactionsInput);
exports.MealUpsertWithoutReactionsInput = MealUpsertWithoutReactionsInput;
