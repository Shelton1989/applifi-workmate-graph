"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
const PLAN_1 = require("../../enums/PLAN");
let BillingCreateManyInput = class BillingCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateManyInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateManyInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateManyInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingCreateManyInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BillingCreateManyInput.prototype, "updatedAt", void 0);
BillingCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingCreateManyInput", {
        isAbstract: true
    })
], BillingCreateManyInput);
exports.BillingCreateManyInput = BillingCreateManyInput;
