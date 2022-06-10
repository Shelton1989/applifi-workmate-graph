"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AddressScalarFieldEnum;
(function (AddressScalarFieldEnum) {
    AddressScalarFieldEnum["id"] = "id";
    AddressScalarFieldEnum["type"] = "type";
    AddressScalarFieldEnum["line1"] = "line1";
    AddressScalarFieldEnum["line2"] = "line2";
    AddressScalarFieldEnum["city"] = "city";
    AddressScalarFieldEnum["district"] = "district";
    AddressScalarFieldEnum["country"] = "country";
    AddressScalarFieldEnum["code"] = "code";
    AddressScalarFieldEnum["isDefault"] = "isDefault";
    AddressScalarFieldEnum["userId"] = "userId";
    AddressScalarFieldEnum["createdAt"] = "createdAt";
    AddressScalarFieldEnum["updatedAt"] = "updatedAt";
})(AddressScalarFieldEnum = exports.AddressScalarFieldEnum || (exports.AddressScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AddressScalarFieldEnum, {
    name: "AddressScalarFieldEnum",
    description: undefined,
});
