"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateManyLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderLineItemCreateManyLineItemPriceInput = class BookingOrderLineItemCreateManyLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyLineItemPriceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyLineItemPriceInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyLineItemPriceInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyLineItemPriceInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyLineItemPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyLineItemPriceInput.prototype, "updatedAt", void 0);
BookingOrderLineItemCreateManyLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateManyLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateManyLineItemPriceInput);
exports.BookingOrderLineItemCreateManyLineItemPriceInput = BookingOrderLineItemCreateManyLineItemPriceInput;
