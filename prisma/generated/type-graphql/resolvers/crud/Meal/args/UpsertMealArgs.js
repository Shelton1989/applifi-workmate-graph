"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateInput_1 = require("../../../inputs/MealCreateInput");
const MealUpdateInput_1 = require("../../../inputs/MealUpdateInput");
const MealWhereUniqueInput_1 = require("../../../inputs/MealWhereUniqueInput");
let UpsertMealArgs = class UpsertMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], UpsertMealArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateInput_1.MealCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateInput_1.MealCreateInput)
], UpsertMealArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateInput_1.MealUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateInput_1.MealUpdateInput)
], UpsertMealArgs.prototype, "update", void 0);
UpsertMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertMealArgs);
exports.UpsertMealArgs = UpsertMealArgs;
