"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BookingOrderScalarFieldEnum;
(function (BookingOrderScalarFieldEnum) {
    BookingOrderScalarFieldEnum["id"] = "id";
    BookingOrderScalarFieldEnum["status"] = "status";
    BookingOrderScalarFieldEnum["SelectedPaymentType"] = "SelectedPaymentType";
    BookingOrderScalarFieldEnum["stripePaymentReference"] = "stripePaymentReference";
    BookingOrderScalarFieldEnum["buyerId"] = "buyerId";
    BookingOrderScalarFieldEnum["tenantId"] = "tenantId";
    BookingOrderScalarFieldEnum["createdAt"] = "createdAt";
    BookingOrderScalarFieldEnum["updatedAt"] = "updatedAt";
})(BookingOrderScalarFieldEnum = exports.BookingOrderScalarFieldEnum || (exports.BookingOrderScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BookingOrderScalarFieldEnum, {
    name: "BookingOrderScalarFieldEnum",
    description: undefined,
});
