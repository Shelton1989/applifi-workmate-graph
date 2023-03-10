"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealOrderByWithRelationInput_1 = require("../../../inputs/MealOrderByWithRelationInput");
const MealWhereInput_1 = require("../../../inputs/MealWhereInput");
const MealWhereUniqueInput_1 = require("../../../inputs/MealWhereUniqueInput");
let AggregateMealArgs = class AggregateMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], AggregateMealArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealOrderByWithRelationInput_1.MealOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateMealArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereUniqueInput_1.MealWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereUniqueInput_1.MealWhereUniqueInput)
], AggregateMealArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMealArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMealArgs.prototype, "skip", void 0);
AggregateMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateMealArgs);
exports.AggregateMealArgs = AggregateMealArgs;
