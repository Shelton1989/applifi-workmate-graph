"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateOrConnectWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateWithoutArtworkInput_1 = require("../inputs/InventoryCreateWithoutArtworkInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryCreateOrConnectWithoutArtworkInput = class InventoryCreateOrConnectWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryCreateOrConnectWithoutArtworkInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput)
], InventoryCreateOrConnectWithoutArtworkInput.prototype, "create", void 0);
InventoryCreateOrConnectWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateOrConnectWithoutArtworkInput", {
        isAbstract: true
    })
], InventoryCreateOrConnectWithoutArtworkInput);
exports.InventoryCreateOrConnectWithoutArtworkInput = InventoryCreateOrConnectWithoutArtworkInput;
