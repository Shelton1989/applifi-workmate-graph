"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InventoryScalarFieldEnum;
(function (InventoryScalarFieldEnum) {
    InventoryScalarFieldEnum["id"] = "id";
    InventoryScalarFieldEnum["userId"] = "userId";
    InventoryScalarFieldEnum["createdAt"] = "createdAt";
    InventoryScalarFieldEnum["updatedAt"] = "updatedAt";
})(InventoryScalarFieldEnum = exports.InventoryScalarFieldEnum || (exports.InventoryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InventoryScalarFieldEnum, {
    name: "InventoryScalarFieldEnum",
    description: undefined,
});
