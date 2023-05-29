"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCountAggregate_1 = require("../outputs/BillingCountAggregate");
const BillingMaxAggregate_1 = require("../outputs/BillingMaxAggregate");
const BillingMinAggregate_1 = require("../outputs/BillingMinAggregate");
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
const PLAN_1 = require("../../enums/PLAN");
let BillingGroupBy = class BillingGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillingGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillingGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingGroupBy.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillingGroupBy.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillingGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BillingGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BillingGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCountAggregate_1.BillingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCountAggregate_1.BillingCountAggregate)
], BillingGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingMinAggregate_1.BillingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingMinAggregate_1.BillingMinAggregate)
], BillingGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingMaxAggregate_1.BillingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingMaxAggregate_1.BillingMaxAggregate)
], BillingGroupBy.prototype, "_max", void 0);
BillingGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillingGroupBy", {
        isAbstract: true
    })
], BillingGroupBy);
exports.BillingGroupBy = BillingGroupBy;
