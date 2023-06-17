"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateWithoutProductKeyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutBillingInput_1 = require("../inputs/TenantCreateNestedOneWithoutBillingInput");
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
const PLAN_1 = require("../../enums/PLAN");
let BillingCreateWithoutProductKeyInput = class BillingCreateWithoutProductKeyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutBillingInput_1.TenantCreateNestedOneWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutBillingInput_1.TenantCreateNestedOneWithoutBillingInput)
], BillingCreateWithoutProductKeyInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeyInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeyInput.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeyInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateWithoutProductKeyInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateWithoutProductKeyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateWithoutProductKeyInput.prototype, "updatedAt", void 0);
BillingCreateWithoutProductKeyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateWithoutProductKeyInput", {
        isAbstract: true
    })
], BillingCreateWithoutProductKeyInput);
exports.BillingCreateWithoutProductKeyInput = BillingCreateWithoutProductKeyInput;
