"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateManyWithWhereWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemScalarWhereInput_1 = require("../inputs/MealItemScalarWhereInput");
const MealItemUpdateManyMutationInput_1 = require("../inputs/MealItemUpdateManyMutationInput");
let MealItemUpdateManyWithWhereWithoutMealsInput = class MealItemUpdateManyWithWhereWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemScalarWhereInput_1.MealItemScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemScalarWhereInput_1.MealItemScalarWhereInput)
], MealItemUpdateManyWithWhereWithoutMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateManyMutationInput_1.MealItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateManyMutationInput_1.MealItemUpdateManyMutationInput)
], MealItemUpdateManyWithWhereWithoutMealsInput.prototype, "data", void 0);
MealItemUpdateManyWithWhereWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateManyWithWhereWithoutMealsInput", {
        isAbstract: true
    })
], MealItemUpdateManyWithWhereWithoutMealsInput);
exports.MealItemUpdateManyWithWhereWithoutMealsInput = MealItemUpdateManyWithWhereWithoutMealsInput;
