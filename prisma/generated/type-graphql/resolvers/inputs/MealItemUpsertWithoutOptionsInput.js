"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpsertWithoutOptionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateWithoutOptionsInput_1 = require("../inputs/MealItemCreateWithoutOptionsInput");
const MealItemUpdateWithoutOptionsInput_1 = require("../inputs/MealItemUpdateWithoutOptionsInput");
let MealItemUpsertWithoutOptionsInput = class MealItemUpsertWithoutOptionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateWithoutOptionsInput_1.MealItemUpdateWithoutOptionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateWithoutOptionsInput_1.MealItemUpdateWithoutOptionsInput)
], MealItemUpsertWithoutOptionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOptionsInput_1.MealItemCreateWithoutOptionsInput)
], MealItemUpsertWithoutOptionsInput.prototype, "create", void 0);
MealItemUpsertWithoutOptionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpsertWithoutOptionsInput", {
        isAbstract: true
    })
], MealItemUpsertWithoutOptionsInput);
exports.MealItemUpsertWithoutOptionsInput = MealItemUpsertWithoutOptionsInput;
