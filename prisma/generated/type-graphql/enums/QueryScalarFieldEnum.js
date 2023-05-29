"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var QueryScalarFieldEnum;
(function (QueryScalarFieldEnum) {
    QueryScalarFieldEnum["id"] = "id";
    QueryScalarFieldEnum["tenantId"] = "tenantId";
    QueryScalarFieldEnum["queryLink"] = "queryLink";
    QueryScalarFieldEnum["queryText"] = "queryText";
    QueryScalarFieldEnum["createdAt"] = "createdAt";
    QueryScalarFieldEnum["updatedAt"] = "updatedAt";
    QueryScalarFieldEnum["userId"] = "userId";
})(QueryScalarFieldEnum = exports.QueryScalarFieldEnum || (exports.QueryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(QueryScalarFieldEnum, {
    name: "QueryScalarFieldEnum",
    description: undefined,
});
