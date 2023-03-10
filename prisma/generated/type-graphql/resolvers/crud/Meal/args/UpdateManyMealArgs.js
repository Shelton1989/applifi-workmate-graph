"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealUpdateManyMutationInput_1 = require("../../../inputs/MealUpdateManyMutationInput");
const MealWhereInput_1 = require("../../../inputs/MealWhereInput");
let UpdateManyMealArgs = class UpdateManyMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyMutationInput_1.MealUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateManyMutationInput_1.MealUpdateManyMutationInput)
], UpdateManyMealArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], UpdateManyMealArgs.prototype, "where", void 0);
UpdateManyMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMealArgs);
exports.UpdateManyMealArgs = UpdateManyMealArgs;
