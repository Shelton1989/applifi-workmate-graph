"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemOrderByRelationAggregateInput_1 = require("../inputs/BookingOrderLineItemOrderByRelationAggregateInput");
const ExperienceOrderByWithRelationInput_1 = require("../inputs/ExperienceOrderByWithRelationInput");
const TenantOrderByWithRelationInput_1 = require("../inputs/TenantOrderByWithRelationInput");
const TransactionOrderByRelationAggregateInput_1 = require("../inputs/TransactionOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookingOrderOrderByWithRelationInput = class BookingOrderOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput)
], BookingOrderOrderByWithRelationInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], BookingOrderOrderByWithRelationInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantOrderByWithRelationInput_1.TenantOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantOrderByWithRelationInput_1.TenantOrderByWithRelationInput)
], BookingOrderOrderByWithRelationInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemOrderByRelationAggregateInput_1.BookingOrderLineItemOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemOrderByRelationAggregateInput_1.BookingOrderLineItemOrderByRelationAggregateInput)
], BookingOrderOrderByWithRelationInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionOrderByRelationAggregateInput_1.TransactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionOrderByRelationAggregateInput_1.TransactionOrderByRelationAggregateInput)
], BookingOrderOrderByWithRelationInput.prototype, "Transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithRelationInput.prototype, "updatedAt", void 0);
BookingOrderOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderOrderByWithRelationInput", {
        isAbstract: true
    })
], BookingOrderOrderByWithRelationInput);
exports.BookingOrderOrderByWithRelationInput = BookingOrderOrderByWithRelationInput;
