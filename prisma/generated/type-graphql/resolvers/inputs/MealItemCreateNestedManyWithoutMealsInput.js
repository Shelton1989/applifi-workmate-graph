"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateNestedManyWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateOrConnectWithoutMealsInput_1 = require("../inputs/MealItemCreateOrConnectWithoutMealsInput");
const MealItemCreateWithoutMealsInput_1 = require("../inputs/MealItemCreateWithoutMealsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemCreateNestedManyWithoutMealsInput = class MealItemCreateNestedManyWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemCreateWithoutMealsInput_1.MealItemCreateWithoutMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemCreateNestedManyWithoutMealsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemCreateOrConnectWithoutMealsInput_1.MealItemCreateOrConnectWithoutMealsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemCreateNestedManyWithoutMealsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereUniqueInput_1.MealItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemCreateNestedManyWithoutMealsInput.prototype, "connect", void 0);
MealItemCreateNestedManyWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateNestedManyWithoutMealsInput", {
        isAbstract: true
    })
], MealItemCreateNestedManyWithoutMealsInput);
exports.MealItemCreateNestedManyWithoutMealsInput = MealItemCreateNestedManyWithoutMealsInput;
