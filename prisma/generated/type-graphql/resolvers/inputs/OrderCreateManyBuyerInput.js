"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateManyBuyerInput = class OrderCreateManyBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyBuyerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyBuyerInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyBuyerInput.prototype, "selectedShippingAddressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyBuyerInput.prototype, "selectedShippingMethodId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyBuyerInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyBuyerInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyBuyerInput.prototype, "sellerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManyBuyerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManyBuyerInput.prototype, "updatedAt", void 0);
OrderCreateManyBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyBuyerInput", {
        isAbstract: true
    })
], OrderCreateManyBuyerInput);
exports.OrderCreateManyBuyerInput = OrderCreateManyBuyerInput;
