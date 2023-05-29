"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBillingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateInput_1 = require("../../../inputs/BillingCreateInput");
const BillingUpdateInput_1 = require("../../../inputs/BillingUpdateInput");
const BillingWhereUniqueInput_1 = require("../../../inputs/BillingWhereUniqueInput");
let UpsertBillingArgs = class UpsertBillingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingWhereUniqueInput_1.BillingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingWhereUniqueInput_1.BillingWhereUniqueInput)
], UpsertBillingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateInput_1.BillingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingCreateInput_1.BillingCreateInput)
], UpsertBillingArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateInput_1.BillingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillingUpdateInput_1.BillingUpdateInput)
], UpsertBillingArgs.prototype, "update", void 0);
UpsertBillingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertBillingArgs);
exports.UpsertBillingArgs = UpsertBillingArgs;
