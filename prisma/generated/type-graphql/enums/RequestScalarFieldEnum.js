"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RequestScalarFieldEnum;
(function (RequestScalarFieldEnum) {
    RequestScalarFieldEnum["id"] = "id";
    RequestScalarFieldEnum["subject"] = "subject";
    RequestScalarFieldEnum["message"] = "message";
    RequestScalarFieldEnum["type"] = "type";
    RequestScalarFieldEnum["socialLinks"] = "socialLinks";
    RequestScalarFieldEnum["entityId"] = "entityId";
    RequestScalarFieldEnum["requestResolution"] = "requestResolution";
    RequestScalarFieldEnum["userId"] = "userId";
    RequestScalarFieldEnum["createdAt"] = "createdAt";
    RequestScalarFieldEnum["updatedAt"] = "updatedAt";
})(RequestScalarFieldEnum = exports.RequestScalarFieldEnum || (exports.RequestScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RequestScalarFieldEnum, {
    name: "RequestScalarFieldEnum",
    description: undefined,
});
