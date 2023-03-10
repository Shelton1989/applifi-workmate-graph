"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityOrderByWithRelationInput_1 = require("../../../inputs/MealAvailabilityOrderByWithRelationInput");
const MealAvailabilityWhereInput_1 = require("../../../inputs/MealAvailabilityWhereInput");
const MealAvailabilityWhereUniqueInput_1 = require("../../../inputs/MealAvailabilityWhereUniqueInput");
let AggregateMealAvailabilityArgs = class AggregateMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], AggregateMealAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityOrderByWithRelationInput_1.MealAvailabilityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateMealAvailabilityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], AggregateMealAvailabilityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMealAvailabilityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMealAvailabilityArgs.prototype, "skip", void 0);
AggregateMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateMealAvailabilityArgs);
exports.AggregateMealAvailabilityArgs = AggregateMealAvailabilityArgs;
