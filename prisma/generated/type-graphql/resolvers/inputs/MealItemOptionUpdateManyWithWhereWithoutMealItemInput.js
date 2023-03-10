"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpdateManyWithWhereWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionScalarWhereInput_1 = require("../inputs/MealItemOptionScalarWhereInput");
const MealItemOptionUpdateManyMutationInput_1 = require("../inputs/MealItemOptionUpdateManyMutationInput");
let MealItemOptionUpdateManyWithWhereWithoutMealItemInput = class MealItemOptionUpdateManyWithWhereWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionScalarWhereInput_1.MealItemOptionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionScalarWhereInput_1.MealItemOptionScalarWhereInput)
], MealItemOptionUpdateManyWithWhereWithoutMealItemInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateManyMutationInput_1.MealItemOptionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateManyMutationInput_1.MealItemOptionUpdateManyMutationInput)
], MealItemOptionUpdateManyWithWhereWithoutMealItemInput.prototype, "data", void 0);
MealItemOptionUpdateManyWithWhereWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpdateManyWithWhereWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionUpdateManyWithWhereWithoutMealItemInput);
exports.MealItemOptionUpdateManyWithWhereWithoutMealItemInput = MealItemOptionUpdateManyWithWhereWithoutMealItemInput;
