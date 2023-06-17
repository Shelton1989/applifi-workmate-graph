"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateWithoutProductKeysInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutBillingInput_1 = require("../inputs/TenantCreateNestedOneWithoutBillingInput");
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
const PLAN_1 = require("../../enums/PLAN");
let BillingCreateWithoutProductKeysInput = class BillingCreateWithoutProductKeysInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeysInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutBillingInput_1.TenantCreateNestedOneWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutBillingInput_1.TenantCreateNestedOneWithoutBillingInput)
], BillingCreateWithoutProductKeysInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeysInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeysInput.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeysInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeysInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateWithoutProductKeysInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateWithoutProductKeysInput.prototype, "updatedAt", void 0);
BillingCreateWithoutProductKeysInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateWithoutProductKeysInput", {
        isAbstract: true
    })
], BillingCreateWithoutProductKeysInput);
exports.BillingCreateWithoutProductKeysInput = BillingCreateWithoutProductKeysInput;
