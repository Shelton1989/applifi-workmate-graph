"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingOrderByWithRelationInput_1 = require("../inputs/BillingOrderByWithRelationInput");
const DocumentOrderByRelationAggregateInput_1 = require("../inputs/DocumentOrderByRelationAggregateInput");
const LLMQueryOrderByRelationAggregateInput_1 = require("../inputs/LLMQueryOrderByRelationAggregateInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TenantOrderByWithRelationInput = class TenantOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], TenantOrderByWithRelationInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryOrderByRelationAggregateInput_1.LLMQueryOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryOrderByRelationAggregateInput_1.LLMQueryOrderByRelationAggregateInput)
], TenantOrderByWithRelationInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentOrderByRelationAggregateInput_1.DocumentOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentOrderByRelationAggregateInput_1.DocumentOrderByRelationAggregateInput)
], TenantOrderByWithRelationInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingOrderByWithRelationInput_1.BillingOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingOrderByWithRelationInput_1.BillingOrderByWithRelationInput)
], TenantOrderByWithRelationInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "updatedAt", void 0);
TenantOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantOrderByWithRelationInput", {
        isAbstract: true
    })
], TenantOrderByWithRelationInput);
exports.TenantOrderByWithRelationInput = TenantOrderByWithRelationInput;
