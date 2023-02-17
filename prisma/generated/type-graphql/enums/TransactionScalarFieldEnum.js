"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TransactionScalarFieldEnum;
(function (TransactionScalarFieldEnum) {
    TransactionScalarFieldEnum["id"] = "id";
    TransactionScalarFieldEnum["bookingOrderId"] = "bookingOrderId";
    TransactionScalarFieldEnum["amountInLowestDenomination"] = "amountInLowestDenomination";
    TransactionScalarFieldEnum["currencyId"] = "currencyId";
    TransactionScalarFieldEnum["SelectedPaymentType"] = "SelectedPaymentType";
    TransactionScalarFieldEnum["stripePaymentReference"] = "stripePaymentReference";
    TransactionScalarFieldEnum["paymentMethod"] = "paymentMethod";
    TransactionScalarFieldEnum["paymentType"] = "paymentType";
    TransactionScalarFieldEnum["createdAt"] = "createdAt";
    TransactionScalarFieldEnum["updatedAt"] = "updatedAt";
})(TransactionScalarFieldEnum = exports.TransactionScalarFieldEnum || (exports.TransactionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TransactionScalarFieldEnum, {
    name: "TransactionScalarFieldEnum",
    description: undefined,
});
