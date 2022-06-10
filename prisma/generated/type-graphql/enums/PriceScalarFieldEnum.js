"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PriceScalarFieldEnum;
(function (PriceScalarFieldEnum) {
    PriceScalarFieldEnum["id"] = "id";
    PriceScalarFieldEnum["priceInLowestDenomination"] = "priceInLowestDenomination";
    PriceScalarFieldEnum["displayPrice"] = "displayPrice";
    PriceScalarFieldEnum["currencyId"] = "currencyId";
    PriceScalarFieldEnum["createdAt"] = "createdAt";
    PriceScalarFieldEnum["updatedAt"] = "updatedAt";
})(PriceScalarFieldEnum = exports.PriceScalarFieldEnum || (exports.PriceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PriceScalarFieldEnum, {
    name: "PriceScalarFieldEnum",
    description: undefined,
});
