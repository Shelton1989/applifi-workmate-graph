"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingOrderByWithRelationInput_1 = require("../inputs/BillingOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductKeyOrderByWithRelationInput = class ProductKeyOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingOrderByWithRelationInput_1.BillingOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingOrderByWithRelationInput_1.BillingOrderByWithRelationInput)
], ProductKeyOrderByWithRelationInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithRelationInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithRelationInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductKeyOrderByWithRelationInput.prototype, "updatedAt", void 0);
ProductKeyOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyOrderByWithRelationInput", {
        isAbstract: true
    })
], ProductKeyOrderByWithRelationInput);
exports.ProductKeyOrderByWithRelationInput = ProductKeyOrderByWithRelationInput;
