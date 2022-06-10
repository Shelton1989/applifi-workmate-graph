"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateOneRequiredWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateOrConnectWithoutArtworkInput_1 = require("../inputs/InventoryCreateOrConnectWithoutArtworkInput");
const InventoryCreateWithoutArtworkInput_1 = require("../inputs/InventoryCreateWithoutArtworkInput");
const InventoryUpdateWithoutArtworkInput_1 = require("../inputs/InventoryUpdateWithoutArtworkInput");
const InventoryUpsertWithoutArtworkInput_1 = require("../inputs/InventoryUpsertWithoutArtworkInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryUpdateOneRequiredWithoutArtworkInput = class InventoryUpdateOneRequiredWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput)
], InventoryUpdateOneRequiredWithoutArtworkInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateOrConnectWithoutArtworkInput_1.InventoryCreateOrConnectWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateOrConnectWithoutArtworkInput_1.InventoryCreateOrConnectWithoutArtworkInput)
], InventoryUpdateOneRequiredWithoutArtworkInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpsertWithoutArtworkInput_1.InventoryUpsertWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpsertWithoutArtworkInput_1.InventoryUpsertWithoutArtworkInput)
], InventoryUpdateOneRequiredWithoutArtworkInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryUpdateOneRequiredWithoutArtworkInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateWithoutArtworkInput_1.InventoryUpdateWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateWithoutArtworkInput_1.InventoryUpdateWithoutArtworkInput)
], InventoryUpdateOneRequiredWithoutArtworkInput.prototype, "update", void 0);
InventoryUpdateOneRequiredWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateOneRequiredWithoutArtworkInput", {
        isAbstract: true
    })
], InventoryUpdateOneRequiredWithoutArtworkInput);
exports.InventoryUpdateOneRequiredWithoutArtworkInput = InventoryUpdateOneRequiredWithoutArtworkInput;
