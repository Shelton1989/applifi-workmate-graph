"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BrandProductScalarFieldEnum;
(function (BrandProductScalarFieldEnum) {
    BrandProductScalarFieldEnum["id"] = "id";
    BrandProductScalarFieldEnum["name"] = "name";
    BrandProductScalarFieldEnum["releaseYear"] = "releaseYear";
    BrandProductScalarFieldEnum["description"] = "description";
    BrandProductScalarFieldEnum["type"] = "type";
    BrandProductScalarFieldEnum["category"] = "category";
    BrandProductScalarFieldEnum["brandId"] = "brandId";
    BrandProductScalarFieldEnum["status"] = "status";
    BrandProductScalarFieldEnum["createdAt"] = "createdAt";
    BrandProductScalarFieldEnum["updatedAt"] = "updatedAt";
})(BrandProductScalarFieldEnum = exports.BrandProductScalarFieldEnum || (exports.BrandProductScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BrandProductScalarFieldEnum, {
    name: "BrandProductScalarFieldEnum",
    description: undefined,
});
