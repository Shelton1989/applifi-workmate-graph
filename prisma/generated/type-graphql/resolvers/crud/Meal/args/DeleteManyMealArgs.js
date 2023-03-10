"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealWhereInput_1 = require("../../../inputs/MealWhereInput");
let DeleteManyMealArgs = class DeleteManyMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], DeleteManyMealArgs.prototype, "where", void 0);
DeleteManyMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMealArgs);
exports.DeleteManyMealArgs = DeleteManyMealArgs;
