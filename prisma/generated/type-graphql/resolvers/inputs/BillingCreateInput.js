"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutBillingInput_1 = require("../inputs/TenantCreateNestedOneWithoutBillingInput");
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
const PLAN_1 = require("../../enums/PLAN");
let BillingCreateInput = class BillingCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutBillingInput_1.TenantCreateNestedOneWithoutBillingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutBillingInput_1.TenantCreateNestedOneWithoutBillingInput)
], BillingCreateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateInput.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateInput.prototype, "updatedAt", void 0);
BillingCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateInput", {
        isAbstract: true
    })
], BillingCreateInput);
exports.BillingCreateInput = BillingCreateInput;
