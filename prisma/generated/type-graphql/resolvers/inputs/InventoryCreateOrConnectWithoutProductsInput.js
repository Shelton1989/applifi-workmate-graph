"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateWithoutProductsInput_1 = require("../inputs/InventoryCreateWithoutProductsInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryCreateOrConnectWithoutProductsInput = class InventoryCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput)
], InventoryCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
InventoryCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], InventoryCreateOrConnectWithoutProductsInput);
exports.InventoryCreateOrConnectWithoutProductsInput = InventoryCreateOrConnectWithoutProductsInput;
