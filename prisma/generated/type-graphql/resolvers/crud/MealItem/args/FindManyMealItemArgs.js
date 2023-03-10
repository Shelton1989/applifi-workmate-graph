"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOrderByWithRelationInput_1 = require("../../../inputs/MealItemOrderByWithRelationInput");
const MealItemWhereInput_1 = require("../../../inputs/MealItemWhereInput");
const MealItemWhereUniqueInput_1 = require("../../../inputs/MealItemWhereUniqueInput");
const MealItemScalarFieldEnum_1 = require("../../../../enums/MealItemScalarFieldEnum");
let FindManyMealItemArgs = class FindManyMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], FindManyMealItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOrderByWithRelationInput_1.MealItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMealItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], FindManyMealItemArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMealItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMealItemArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemScalarFieldEnum_1.MealItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMealItemArgs.prototype, "distinct", void 0);
FindManyMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMealItemArgs);
exports.FindManyMealItemArgs = FindManyMealItemArgs;
