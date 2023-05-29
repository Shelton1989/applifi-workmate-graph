"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCountOrderByAggregateInput_1 = require("../inputs/BillingCountOrderByAggregateInput");
const BillingMaxOrderByAggregateInput_1 = require("../inputs/BillingMaxOrderByAggregateInput");
const BillingMinOrderByAggregateInput_1 = require("../inputs/BillingMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BillingOrderByWithAggregationInput = class BillingOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithAggregationInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithAggregationInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillingOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCountOrderByAggregateInput_1.BillingCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCountOrderByAggregateInput_1.BillingCountOrderByAggregateInput)
], BillingOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingMaxOrderByAggregateInput_1.BillingMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingMaxOrderByAggregateInput_1.BillingMaxOrderByAggregateInput)
], BillingOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingMinOrderByAggregateInput_1.BillingMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingMinOrderByAggregateInput_1.BillingMinOrderByAggregateInput)
], BillingOrderByWithAggregationInput.prototype, "_min", void 0);
BillingOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingOrderByWithAggregationInput", {
        isAbstract: true
    })
], BillingOrderByWithAggregationInput);
exports.BillingOrderByWithAggregationInput = BillingOrderByWithAggregationInput;
