"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutLineItemPriceInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput = class BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateWithoutLineItemPriceInput_1.BookingOrderLineItemCreateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateWithoutLineItemPriceInput_1.BookingOrderLineItemCreateWithoutLineItemPriceInput)
], BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput.prototype, "create", void 0);
BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput);
exports.BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput = BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput;
