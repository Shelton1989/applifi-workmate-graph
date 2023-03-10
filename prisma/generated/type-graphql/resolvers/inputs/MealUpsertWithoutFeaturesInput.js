"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutFeaturesInput_1 = require("../inputs/MealCreateWithoutFeaturesInput");
const MealUpdateWithoutFeaturesInput_1 = require("../inputs/MealUpdateWithoutFeaturesInput");
let MealUpsertWithoutFeaturesInput = class MealUpsertWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutFeaturesInput_1.MealUpdateWithoutFeaturesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutFeaturesInput_1.MealUpdateWithoutFeaturesInput)
], MealUpsertWithoutFeaturesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutFeaturesInput_1.MealCreateWithoutFeaturesInput)
], MealUpsertWithoutFeaturesInput.prototype, "create", void 0);
MealUpsertWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithoutFeaturesInput", {
        isAbstract: true
    })
], MealUpsertWithoutFeaturesInput);
exports.MealUpsertWithoutFeaturesInput = MealUpsertWithoutFeaturesInput;
