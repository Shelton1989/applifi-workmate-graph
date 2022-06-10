"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADDRESS_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ADDRESS_TYPE;
(function (ADDRESS_TYPE) {
    ADDRESS_TYPE["BILLING"] = "BILLING";
    ADDRESS_TYPE["DELIVERY"] = "DELIVERY";
    ADDRESS_TYPE["PHYSICAL"] = "PHYSICAL";
    ADDRESS_TYPE["POSTAL"] = "POSTAL";
})(ADDRESS_TYPE = exports.ADDRESS_TYPE || (exports.ADDRESS_TYPE = {}));
TypeGraphQL.registerEnumType(ADDRESS_TYPE, {
    name: "ADDRESS_TYPE",
    description: undefined,
});
