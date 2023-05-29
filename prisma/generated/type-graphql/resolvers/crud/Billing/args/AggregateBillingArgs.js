"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingOrderByWithRelationInput_1 = require("../../../inputs/BillingOrderByWithRelationInput");
const BillingWhereInput_1 = require("../../../inputs/BillingWhereInput");
const BillingWhereUniqueInput_1 = require("../../../inputs/BillingWhereUniqueInput");
let AggregateBillingArgs = class AggregateBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereInput_1.BillingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereInput_1.BillingWhereInput)
], AggregateBillingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingOrderByWithRelationInput_1.BillingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBillingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], AggregateBillingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBillingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBillingArgs.prototype, "skip", void 0);
AggregateBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBillingArgs);
exports.AggregateBillingArgs = AggregateBillingArgs;
