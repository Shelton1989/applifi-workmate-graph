"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemWhereInput_1 = require("../inputs/BookingOrderLineItemWhereInput");
let BookingOrderLineItemListRelationFilter = class BookingOrderLineItemListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput)
], BookingOrderLineItemListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput)
], BookingOrderLineItemListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput)
], BookingOrderLineItemListRelationFilter.prototype, "none", void 0);
BookingOrderLineItemListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemListRelationFilter", {
        isAbstract: true
    })
], BookingOrderLineItemListRelationFilter);
exports.BookingOrderLineItemListRelationFilter = BookingOrderLineItemListRelationFilter;
