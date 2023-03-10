"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLikedMealsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealOrderByWithRelationInput_1 = require("../../../inputs/MealOrderByWithRelationInput");
const MealWhereInput_1 = require("../../../inputs/MealWhereInput");
const MealWhereUniqueInput_1 = require("../../../inputs/MealWhereUniqueInput");
const MealScalarFieldEnum_1 = require("../../../../enums/MealScalarFieldEnum");
let UserLikedMealsArgs = class UserLikedMealsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], UserLikedMealsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealOrderByWithRelationInput_1.MealOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserLikedMealsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], UserLikedMealsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserLikedMealsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserLikedMealsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarFieldEnum_1.MealScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserLikedMealsArgs.prototype, "distinct", void 0);
UserLikedMealsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserLikedMealsArgs);
exports.UserLikedMealsArgs = UserLikedMealsArgs;
