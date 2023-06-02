"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
const PLAN_1 = require("../../enums/PLAN");
let BillingMaxAggregate = class BillingMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMaxAggregate.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMaxAggregate.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMaxAggregate.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMaxAggregate.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingMaxAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingMaxAggregate.prototype, "updatedAt", void 0);
BillingMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillingMaxAggregate", {
        isAbstract: true
    })
], BillingMaxAggregate);
exports.BillingMaxAggregate = BillingMaxAggregate;
