"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SizeScalarFieldEnum;
(function (SizeScalarFieldEnum) {
    SizeScalarFieldEnum["id"] = "id";
    SizeScalarFieldEnum["value"] = "value";
    SizeScalarFieldEnum["region"] = "region";
    SizeScalarFieldEnum["productIds"] = "productIds";
    SizeScalarFieldEnum["createdAt"] = "createdAt";
    SizeScalarFieldEnum["updatedAt"] = "updatedAt";
})(SizeScalarFieldEnum = exports.SizeScalarFieldEnum || (exports.SizeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SizeScalarFieldEnum, {
    name: "SizeScalarFieldEnum",
    description: undefined,
});
