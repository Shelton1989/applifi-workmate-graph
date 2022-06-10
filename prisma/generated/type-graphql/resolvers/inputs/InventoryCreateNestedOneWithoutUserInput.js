"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateOrConnectWithoutUserInput_1 = require("../inputs/InventoryCreateOrConnectWithoutUserInput");
const InventoryCreateWithoutUserInput_1 = require("../inputs/InventoryCreateWithoutUserInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryCreateNestedOneWithoutUserInput = class InventoryCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput)
], InventoryCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateOrConnectWithoutUserInput_1.InventoryCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateOrConnectWithoutUserInput_1.InventoryCreateOrConnectWithoutUserInput)
], InventoryCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
InventoryCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], InventoryCreateNestedOneWithoutUserInput);
exports.InventoryCreateNestedOneWithoutUserInput = InventoryCreateNestedOneWithoutUserInput;
