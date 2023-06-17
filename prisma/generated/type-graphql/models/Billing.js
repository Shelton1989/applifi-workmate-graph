"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BILLING_STATUS_1 = require("../enums/BILLING_STATUS");
const PLAN_1 = require("../enums/PLAN");
const BillingCount_1 = require("../resolvers/outputs/BillingCount");
let Billing = class Billing {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Billing.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Billing.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Billing.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCount_1.BillingCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCount_1.BillingCount)
], Billing.prototype, "_count", void 0);
Billing = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Billing", {
        isAbstract: true
    })
], Billing);
exports.Billing = Billing;
