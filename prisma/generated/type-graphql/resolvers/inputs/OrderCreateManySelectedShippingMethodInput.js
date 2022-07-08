"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManySelectedShippingMethodInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateManySelectedShippingMethodInput = class OrderCreateManySelectedShippingMethodInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManySelectedShippingMethodInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManySelectedShippingMethodInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManySelectedShippingMethodInput.prototype, "selectedShippingAddressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManySelectedShippingMethodInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManySelectedShippingMethodInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManySelectedShippingMethodInput.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManySelectedShippingMethodInput.prototype, "sellerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManySelectedShippingMethodInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManySelectedShippingMethodInput.prototype, "updatedAt", void 0);
OrderCreateManySelectedShippingMethodInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManySelectedShippingMethodInput", {
        isAbstract: true
    })
], OrderCreateManySelectedShippingMethodInput);
exports.OrderCreateManySelectedShippingMethodInput = OrderCreateManySelectedShippingMethodInput;
