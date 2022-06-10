"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryWhereInput_1 = require("../inputs/InventoryWhereInput");
let InventoryRelationFilter = class InventoryRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereInput_1.InventoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereInput_1.InventoryWhereInput)
], InventoryRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereInput_1.InventoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereInput_1.InventoryWhereInput)
], InventoryRelationFilter.prototype, "isNot", void 0);
InventoryRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryRelationFilter", {
        isAbstract: true
    })
], InventoryRelationFilter);
exports.InventoryRelationFilter = InventoryRelationFilter;
