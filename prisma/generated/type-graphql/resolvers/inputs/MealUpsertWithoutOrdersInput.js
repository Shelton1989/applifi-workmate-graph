"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutOrdersInput_1 = require("../inputs/MealCreateWithoutOrdersInput");
const MealUpdateWithoutOrdersInput_1 = require("../inputs/MealUpdateWithoutOrdersInput");
let MealUpsertWithoutOrdersInput = class MealUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutOrdersInput_1.MealUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutOrdersInput_1.MealUpdateWithoutOrdersInput)
], MealUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutOrdersInput_1.MealCreateWithoutOrdersInput)
], MealUpsertWithoutOrdersInput.prototype, "create", void 0);
MealUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], MealUpsertWithoutOrdersInput);
exports.MealUpsertWithoutOrdersInput = MealUpsertWithoutOrdersInput;
