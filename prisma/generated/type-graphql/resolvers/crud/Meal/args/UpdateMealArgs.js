"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealUpdateInput_1 = require("../../../inputs/MealUpdateInput");
const MealWhereUniqueInput_1 = require("../../../inputs/MealWhereUniqueInput");
let UpdateMealArgs = class UpdateMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateInput_1.MealUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateInput_1.MealUpdateInput)
], UpdateMealArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], UpdateMealArgs.prototype, "where", void 0);
UpdateMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateMealArgs);
exports.UpdateMealArgs = UpdateMealArgs;
