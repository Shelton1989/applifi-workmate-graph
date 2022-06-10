"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BrandScalarFieldEnum;
(function (BrandScalarFieldEnum) {
    BrandScalarFieldEnum["id"] = "id";
    BrandScalarFieldEnum["name"] = "name";
    BrandScalarFieldEnum["description"] = "description";
    BrandScalarFieldEnum["tagline"] = "tagline";
    BrandScalarFieldEnum["status"] = "status";
    BrandScalarFieldEnum["createdAt"] = "createdAt";
    BrandScalarFieldEnum["updatedAt"] = "updatedAt";
})(BrandScalarFieldEnum = exports.BrandScalarFieldEnum || (exports.BrandScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BrandScalarFieldEnum, {
    name: "BrandScalarFieldEnum",
    description: undefined,
});
