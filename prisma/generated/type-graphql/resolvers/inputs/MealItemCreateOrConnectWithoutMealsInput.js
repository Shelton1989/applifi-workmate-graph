"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateOrConnectWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateWithoutMealsInput_1 = require("../inputs/MealItemCreateWithoutMealsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemCreateOrConnectWithoutMealsInput = class MealItemCreateOrConnectWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemCreateOrConnectWithoutMealsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutMealsInput_1.MealItemCreateWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutMealsInput_1.MealItemCreateWithoutMealsInput)
], MealItemCreateOrConnectWithoutMealsInput.prototype, "create", void 0);
MealItemCreateOrConnectWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateOrConnectWithoutMealsInput", {
        isAbstract: true
    })
], MealItemCreateOrConnectWithoutMealsInput);
exports.MealItemCreateOrConnectWithoutMealsInput = MealItemCreateOrConnectWithoutMealsInput;
