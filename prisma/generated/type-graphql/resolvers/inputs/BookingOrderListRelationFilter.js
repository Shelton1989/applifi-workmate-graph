"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderWhereInput_1 = require("../inputs/BookingOrderWhereInput");
let BookingOrderListRelationFilter = class BookingOrderListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], BookingOrderListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], BookingOrderListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], BookingOrderListRelationFilter.prototype, "none", void 0);
BookingOrderListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderListRelationFilter", {
        isAbstract: true
    })
], BookingOrderListRelationFilter);
exports.BookingOrderListRelationFilter = BookingOrderListRelationFilter;
