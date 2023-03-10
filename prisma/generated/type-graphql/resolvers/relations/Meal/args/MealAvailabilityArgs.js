"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityOrderByWithRelationInput_1 = require("../../../inputs/MealAvailabilityOrderByWithRelationInput");
const MealAvailabilityWhereInput_1 = require("../../../inputs/MealAvailabilityWhereInput");
const MealAvailabilityWhereUniqueInput_1 = require("../../../inputs/MealAvailabilityWhereUniqueInput");
const MealAvailabilityScalarFieldEnum_1 = require("../../../../enums/MealAvailabilityScalarFieldEnum");
let MealAvailabilityArgs = class MealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], MealAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityOrderByWithRelationInput_1.MealAvailabilityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], MealAvailabilityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MealAvailabilityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MealAvailabilityArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityScalarFieldEnum_1.MealAvailabilityScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityArgs.prototype, "distinct", void 0);
MealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], MealAvailabilityArgs);
exports.MealAvailabilityArgs = MealAvailabilityArgs;
