"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CurrencyScalarFieldEnum;
(function (CurrencyScalarFieldEnum) {
    CurrencyScalarFieldEnum["id"] = "id";
    CurrencyScalarFieldEnum["name"] = "name";
    CurrencyScalarFieldEnum["symbol"] = "symbol";
    CurrencyScalarFieldEnum["code"] = "code";
    CurrencyScalarFieldEnum["createdAt"] = "createdAt";
    CurrencyScalarFieldEnum["updatedAt"] = "updatedAt";
})(CurrencyScalarFieldEnum = exports.CurrencyScalarFieldEnum || (exports.CurrencyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CurrencyScalarFieldEnum, {
    name: "CurrencyScalarFieldEnum",
    description: undefined,
});
