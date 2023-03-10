"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateWithWhereUniqueWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemUpdateWithoutMealsInput_1 = require("../inputs/MealItemUpdateWithoutMealsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemUpdateWithWhereUniqueWithoutMealsInput = class MealItemUpdateWithWhereUniqueWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemUpdateWithWhereUniqueWithoutMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateWithoutMealsInput_1.MealItemUpdateWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateWithoutMealsInput_1.MealItemUpdateWithoutMealsInput)
], MealItemUpdateWithWhereUniqueWithoutMealsInput.prototype, "data", void 0);
MealItemUpdateWithWhereUniqueWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateWithWhereUniqueWithoutMealsInput", {
        isAbstract: true
    })
], MealItemUpdateWithWhereUniqueWithoutMealsInput);
exports.MealItemUpdateWithWhereUniqueWithoutMealsInput = MealItemUpdateWithWhereUniqueWithoutMealsInput;
