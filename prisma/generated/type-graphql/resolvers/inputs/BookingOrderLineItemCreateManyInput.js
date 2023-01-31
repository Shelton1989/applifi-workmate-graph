"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderLineItemCreateManyInput = class BookingOrderLineItemCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderLineItemCreateManyInput.prototype, "selectedQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyInput.prototype, "selectedStartDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyInput.prototype, "selectedEndDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyInput.prototype, "updatedAt", void 0);
BookingOrderLineItemCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateManyInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateManyInput);
exports.BookingOrderLineItemCreateManyInput = BookingOrderLineItemCreateManyInput;
