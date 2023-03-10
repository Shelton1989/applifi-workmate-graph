"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionOrderByWithRelationInput_1 = require("../../../inputs/MealItemOptionOrderByWithRelationInput");
const MealItemOptionWhereInput_1 = require("../../../inputs/MealItemOptionWhereInput");
const MealItemOptionWhereUniqueInput_1 = require("../../../inputs/MealItemOptionWhereUniqueInput");
let AggregateMealItemOptionArgs = class AggregateMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], AggregateMealItemOptionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionOrderByWithRelationInput_1.MealItemOptionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateMealItemOptionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], AggregateMealItemOptionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMealItemOptionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMealItemOptionArgs.prototype, "skip", void 0);
AggregateMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateMealItemOptionArgs);
exports.AggregateMealItemOptionArgs = AggregateMealItemOptionArgs;
