"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
const PLAN_1 = require("../../enums/PLAN");
let BillingMinAggregate = class BillingMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMinAggregate.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMinAggregate.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMinAggregate.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMinAggregate.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMinAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingMinAggregate.prototype, "updatedAt", void 0);
BillingMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillingMinAggregate", {
        isAbstract: true
    })
], BillingMinAggregate);
exports.BillingMinAggregate = BillingMinAggregate;
