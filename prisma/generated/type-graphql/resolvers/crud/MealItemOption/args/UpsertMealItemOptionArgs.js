"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateInput_1 = require("../../../inputs/MealItemOptionCreateInput");
const MealItemOptionUpdateInput_1 = require("../../../inputs/MealItemOptionUpdateInput");
const MealItemOptionWhereUniqueInput_1 = require("../../../inputs/MealItemOptionWhereUniqueInput");
let UpsertMealItemOptionArgs = class UpsertMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], UpsertMealItemOptionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateInput_1.MealItemOptionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateInput_1.MealItemOptionCreateInput)
], UpsertMealItemOptionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateInput_1.MealItemOptionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateInput_1.MealItemOptionUpdateInput)
], UpsertMealItemOptionArgs.prototype, "update", void 0);
UpsertMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertMealItemOptionArgs);
exports.UpsertMealItemOptionArgs = UpsertMealItemOptionArgs;
