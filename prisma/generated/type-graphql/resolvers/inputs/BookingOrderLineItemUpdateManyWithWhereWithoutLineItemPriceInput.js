"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemScalarWhereInput_1 = require("../inputs/BookingOrderLineItemScalarWhereInput");
const BookingOrderLineItemUpdateManyMutationInput_1 = require("../inputs/BookingOrderLineItemUpdateManyMutationInput");
let BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput = class BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemScalarWhereInput_1.BookingOrderLineItemScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemScalarWhereInput_1.BookingOrderLineItemScalarWhereInput)
], BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateManyMutationInput_1.BookingOrderLineItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateManyMutationInput_1.BookingOrderLineItemUpdateManyMutationInput)
], BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput.prototype, "data", void 0);
BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput);
exports.BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput = BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput;
