"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateOrConnectWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateWithoutMealItemInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionCreateOrConnectWithoutMealItemInput = class MealItemOptionCreateOrConnectWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], MealItemOptionCreateOrConnectWithoutMealItemInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateWithoutMealItemInput_1.MealItemOptionCreateWithoutMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateWithoutMealItemInput_1.MealItemOptionCreateWithoutMealItemInput)
], MealItemOptionCreateOrConnectWithoutMealItemInput.prototype, "create", void 0);
MealItemOptionCreateOrConnectWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateOrConnectWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionCreateOrConnectWithoutMealItemInput);
exports.MealItemOptionCreateOrConnectWithoutMealItemInput = MealItemOptionCreateOrConnectWithoutMealItemInput;
