"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionOrderByWithRelationInput_1 = require("../../../inputs/MealItemOptionOrderByWithRelationInput");
const MealItemOptionWhereInput_1 = require("../../../inputs/MealItemOptionWhereInput");
const MealItemOptionWhereUniqueInput_1 = require("../../../inputs/MealItemOptionWhereUniqueInput");
const MealItemOptionScalarFieldEnum_1 = require("../../../../enums/MealItemOptionScalarFieldEnum");
let FindManyMealItemOptionArgs = class FindManyMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], FindManyMealItemOptionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionOrderByWithRelationInput_1.MealItemOptionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMealItemOptionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], FindManyMealItemOptionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMealItemOptionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMealItemOptionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionScalarFieldEnum_1.MealItemOptionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMealItemOptionArgs.prototype, "distinct", void 0);
FindManyMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMealItemOptionArgs);
exports.FindManyMealItemOptionArgs = FindManyMealItemOptionArgs;
