"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LLMQueryScalarFieldEnum;
(function (LLMQueryScalarFieldEnum) {
    LLMQueryScalarFieldEnum["id"] = "id";
    LLMQueryScalarFieldEnum["tenantId"] = "tenantId";
    LLMQueryScalarFieldEnum["queryLink"] = "queryLink";
    LLMQueryScalarFieldEnum["question"] = "question";
    LLMQueryScalarFieldEnum["response"] = "response";
    LLMQueryScalarFieldEnum["createdAt"] = "createdAt";
    LLMQueryScalarFieldEnum["updatedAt"] = "updatedAt";
    LLMQueryScalarFieldEnum["userId"] = "userId";
})(LLMQueryScalarFieldEnum = exports.LLMQueryScalarFieldEnum || (exports.LLMQueryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LLMQueryScalarFieldEnum, {
    name: "LLMQueryScalarFieldEnum",
    description: undefined,
});
