"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BookingOrderLineItemScalarFieldEnum;
(function (BookingOrderLineItemScalarFieldEnum) {
    BookingOrderLineItemScalarFieldEnum["id"] = "id";
    BookingOrderLineItemScalarFieldEnum["details"] = "details";
    BookingOrderLineItemScalarFieldEnum["comments"] = "comments";
    BookingOrderLineItemScalarFieldEnum["selectedQuantity"] = "selectedQuantity";
    BookingOrderLineItemScalarFieldEnum["selectedStartDate"] = "selectedStartDate";
    BookingOrderLineItemScalarFieldEnum["selectedEndDate"] = "selectedEndDate";
    BookingOrderLineItemScalarFieldEnum["priceId"] = "priceId";
    BookingOrderLineItemScalarFieldEnum["bookingId"] = "bookingId";
    BookingOrderLineItemScalarFieldEnum["createdAt"] = "createdAt";
    BookingOrderLineItemScalarFieldEnum["updatedAt"] = "updatedAt";
})(BookingOrderLineItemScalarFieldEnum = exports.BookingOrderLineItemScalarFieldEnum || (exports.BookingOrderLineItemScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BookingOrderLineItemScalarFieldEnum, {
    name: "BookingOrderLineItemScalarFieldEnum",
    description: undefined,
});
