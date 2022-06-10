"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateNestedOneWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateOrConnectWithoutArtworkInput_1 = require("../inputs/InventoryCreateOrConnectWithoutArtworkInput");
const InventoryCreateWithoutArtworkInput_1 = require("../inputs/InventoryCreateWithoutArtworkInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryCreateNestedOneWithoutArtworkInput = class InventoryCreateNestedOneWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput)
], InventoryCreateNestedOneWithoutArtworkInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateOrConnectWithoutArtworkInput_1.InventoryCreateOrConnectWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateOrConnectWithoutArtworkInput_1.InventoryCreateOrConnectWithoutArtworkInput)
], InventoryCreateNestedOneWithoutArtworkInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryCreateNestedOneWithoutArtworkInput.prototype, "connect", void 0);
InventoryCreateNestedOneWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateNestedOneWithoutArtworkInput", {
        isAbstract: true
    })
], InventoryCreateNestedOneWithoutArtworkInput);
exports.InventoryCreateNestedOneWithoutArtworkInput = InventoryCreateNestedOneWithoutArtworkInput;
