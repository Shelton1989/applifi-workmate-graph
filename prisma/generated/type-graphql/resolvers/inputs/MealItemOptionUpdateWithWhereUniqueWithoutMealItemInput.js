"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionUpdateWithoutMealItemInput_1 = require("../inputs/MealItemOptionUpdateWithoutMealItemInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput = class MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateWithoutMealItemInput_1.MealItemOptionUpdateWithoutMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateWithoutMealItemInput_1.MealItemOptionUpdateWithoutMealItemInput)
], MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput.prototype, "data", void 0);
MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput);
exports.MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput = MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput;
