"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateWithoutMealItemInput");
const MealItemOptionUpdateWithoutMealItemInput_1 = require("../inputs/MealItemOptionUpdateWithoutMealItemInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput = class MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateWithoutMealItemInput_1.MealItemOptionUpdateWithoutMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateWithoutMealItemInput_1.MealItemOptionUpdateWithoutMealItemInput)
], MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateWithoutMealItemInput_1.MealItemOptionCreateWithoutMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateWithoutMealItemInput_1.MealItemOptionCreateWithoutMealItemInput)
], MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput.prototype, "create", void 0);
MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput);
exports.MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput = MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput;
