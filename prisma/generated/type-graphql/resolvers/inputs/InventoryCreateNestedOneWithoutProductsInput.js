"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateNestedOneWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateOrConnectWithoutProductsInput_1 = require("../inputs/InventoryCreateOrConnectWithoutProductsInput");
const InventoryCreateWithoutProductsInput_1 = require("../inputs/InventoryCreateWithoutProductsInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryCreateNestedOneWithoutProductsInput = class InventoryCreateNestedOneWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput)
], InventoryCreateNestedOneWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateOrConnectWithoutProductsInput_1.InventoryCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateOrConnectWithoutProductsInput_1.InventoryCreateOrConnectWithoutProductsInput)
], InventoryCreateNestedOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryCreateNestedOneWithoutProductsInput.prototype, "connect", void 0);
InventoryCreateNestedOneWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateNestedOneWithoutProductsInput", {
        isAbstract: true
    })
], InventoryCreateNestedOneWithoutProductsInput);
exports.InventoryCreateNestedOneWithoutProductsInput = InventoryCreateNestedOneWithoutProductsInput;
