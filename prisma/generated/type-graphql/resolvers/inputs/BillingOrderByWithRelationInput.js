"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyOrderByWithRelationInput_1 = require("../inputs/ProductKeyOrderByWithRelationInput");
const TenantOrderByWithRelationInput_1 = require("../inputs/TenantOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BillingOrderByWithRelationInput = class BillingOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantOrderByWithRelationInput_1.TenantOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantOrderByWithRelationInput_1.TenantOrderByWithRelationInput)
], BillingOrderByWithRelationInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyOrderByWithRelationInput_1.ProductKeyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyOrderByWithRelationInput_1.ProductKeyOrderByWithRelationInput)
], BillingOrderByWithRelationInput.prototype, "ProductKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithRelationInput.prototype, "updatedAt", void 0);
BillingOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingOrderByWithRelationInput", {
        isAbstract: true
    })
], BillingOrderByWithRelationInput);
exports.BillingOrderByWithRelationInput = BillingOrderByWithRelationInput;
