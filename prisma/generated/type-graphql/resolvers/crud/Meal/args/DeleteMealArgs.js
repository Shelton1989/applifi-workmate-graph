"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealWhereUniqueInput_1 = require("../../../inputs/MealWhereUniqueInput");
let DeleteMealArgs = class DeleteMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], DeleteMealArgs.prototype, "where", void 0);
DeleteMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteMealArgs);
exports.DeleteMealArgs = DeleteMealArgs;
