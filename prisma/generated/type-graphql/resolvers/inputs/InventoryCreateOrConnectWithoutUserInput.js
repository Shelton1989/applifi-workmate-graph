"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateWithoutUserInput_1 = require("../inputs/InventoryCreateWithoutUserInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryCreateOrConnectWithoutUserInput = class InventoryCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput)
], InventoryCreateOrConnectWithoutUserInput.prototype, "create", void 0);
InventoryCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], InventoryCreateOrConnectWithoutUserInput);
exports.InventoryCreateOrConnectWithoutUserInput = InventoryCreateOrConnectWithoutUserInput;
