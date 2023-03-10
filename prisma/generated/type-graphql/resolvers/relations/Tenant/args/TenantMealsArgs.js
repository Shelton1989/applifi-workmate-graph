"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantMealsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealOrderByWithRelationInput_1 = require("../../../inputs/MealOrderByWithRelationInput");
const MealWhereInput_1 = require("../../../inputs/MealWhereInput");
const MealWhereUniqueInput_1 = require("../../../inputs/MealWhereUniqueInput");
const MealScalarFieldEnum_1 = require("../../../../enums/MealScalarFieldEnum");
let TenantMealsArgs = class TenantMealsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], TenantMealsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealOrderByWithRelationInput_1.MealOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantMealsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], TenantMealsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TenantMealsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TenantMealsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarFieldEnum_1.MealScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantMealsArgs.prototype, "distinct", void 0);
TenantMealsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TenantMealsArgs);
exports.TenantMealsArgs = TenantMealsArgs;
