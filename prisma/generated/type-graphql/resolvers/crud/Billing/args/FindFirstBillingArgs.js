"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingOrderByWithRelationInput_1 = require("../../../inputs/BillingOrderByWithRelationInput");
const BillingWhereInput_1 = require("../../../inputs/BillingWhereInput");
const BillingWhereUniqueInput_1 = require("../../../inputs/BillingWhereUniqueInput");
const BillingScalarFieldEnum_1 = require("../../../../enums/BillingScalarFieldEnum");
let FindFirstBillingArgs = class FindFirstBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereInput_1.BillingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereInput_1.BillingWhereInput)
], FindFirstBillingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingOrderByWithRelationInput_1.BillingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBillingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], FindFirstBillingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBillingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBillingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingScalarFieldEnum_1.BillingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBillingArgs.prototype, "distinct", void 0);
FindFirstBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstBillingArgs);
exports.FindFirstBillingArgs = FindFirstBillingArgs;
