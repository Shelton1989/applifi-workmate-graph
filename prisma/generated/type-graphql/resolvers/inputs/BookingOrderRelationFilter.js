"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderWhereInput_1 = require("../inputs/BookingOrderWhereInput");
let BookingOrderRelationFilter = class BookingOrderRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], BookingOrderRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], BookingOrderRelationFilter.prototype, "isNot", void 0);
BookingOrderRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderRelationFilter", {
        isAbstract: true
    })
], BookingOrderRelationFilter);
exports.BookingOrderRelationFilter = BookingOrderRelationFilter;
