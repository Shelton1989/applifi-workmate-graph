"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WardScalarFieldEnum;
(function (WardScalarFieldEnum) {
    WardScalarFieldEnum["id"] = "id";
    WardScalarFieldEnum["number"] = "number";
    WardScalarFieldEnum["name"] = "name";
    WardScalarFieldEnum["description"] = "description";
    WardScalarFieldEnum["createdAt"] = "createdAt";
    WardScalarFieldEnum["updatedAt"] = "updatedAt";
})(WardScalarFieldEnum = exports.WardScalarFieldEnum || (exports.WardScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WardScalarFieldEnum, {
    name: "WardScalarFieldEnum",
    description: undefined,
});
