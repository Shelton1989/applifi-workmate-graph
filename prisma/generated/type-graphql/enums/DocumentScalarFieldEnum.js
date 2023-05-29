"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DocumentScalarFieldEnum;
(function (DocumentScalarFieldEnum) {
    DocumentScalarFieldEnum["id"] = "id";
    DocumentScalarFieldEnum["publishStatus"] = "publishStatus";
    DocumentScalarFieldEnum["title"] = "title";
    DocumentScalarFieldEnum["shortDescription"] = "shortDescription";
    DocumentScalarFieldEnum["tenantId"] = "tenantId";
    DocumentScalarFieldEnum["createdAt"] = "createdAt";
    DocumentScalarFieldEnum["updatedAt"] = "updatedAt";
})(DocumentScalarFieldEnum = exports.DocumentScalarFieldEnum || (exports.DocumentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DocumentScalarFieldEnum, {
    name: "DocumentScalarFieldEnum",
    description: undefined,
});
