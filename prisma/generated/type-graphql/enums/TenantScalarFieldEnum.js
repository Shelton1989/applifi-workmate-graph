"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TenantScalarFieldEnum;
(function (TenantScalarFieldEnum) {
    TenantScalarFieldEnum["id"] = "id";
    TenantScalarFieldEnum["name"] = "name";
    TenantScalarFieldEnum["slug"] = "slug";
    TenantScalarFieldEnum["description"] = "description";
    TenantScalarFieldEnum["logoImage"] = "logoImage";
    TenantScalarFieldEnum["avatar"] = "avatar";
    TenantScalarFieldEnum["acceptedUserEmailDomains"] = "acceptedUserEmailDomains";
    TenantScalarFieldEnum["createdAt"] = "createdAt";
    TenantScalarFieldEnum["updatedAt"] = "updatedAt";
})(TenantScalarFieldEnum = exports.TenantScalarFieldEnum || (exports.TenantScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TenantScalarFieldEnum, {
    name: "TenantScalarFieldEnum",
    description: undefined,
});
