"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpsertWithWhereUniqueWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateWithoutMealsInput_1 = require("../inputs/MealItemCreateWithoutMealsInput");
const MealItemUpdateWithoutMealsInput_1 = require("../inputs/MealItemUpdateWithoutMealsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemUpsertWithWhereUniqueWithoutMealsInput = class MealItemUpsertWithWhereUniqueWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemUpsertWithWhereUniqueWithoutMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateWithoutMealsInput_1.MealItemUpdateWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateWithoutMealsInput_1.MealItemUpdateWithoutMealsInput)
], MealItemUpsertWithWhereUniqueWithoutMealsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutMealsInput_1.MealItemCreateWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutMealsInput_1.MealItemCreateWithoutMealsInput)
], MealItemUpsertWithWhereUniqueWithoutMealsInput.prototype, "create", void 0);
MealItemUpsertWithWhereUniqueWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpsertWithWhereUniqueWithoutMealsInput", {
        isAbstract: true
    })
], MealItemUpsertWithWhereUniqueWithoutMealsInput);
exports.MealItemUpsertWithWhereUniqueWithoutMealsInput = MealItemUpsertWithWhereUniqueWithoutMealsInput;
