"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateOneRequiredWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateOrConnectWithoutProductsInput_1 = require("../inputs/InventoryCreateOrConnectWithoutProductsInput");
const InventoryCreateWithoutProductsInput_1 = require("../inputs/InventoryCreateWithoutProductsInput");
const InventoryUpdateWithoutProductsInput_1 = require("../inputs/InventoryUpdateWithoutProductsInput");
const InventoryUpsertWithoutProductsInput_1 = require("../inputs/InventoryUpsertWithoutProductsInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryUpdateOneRequiredWithoutProductsInput = class InventoryUpdateOneRequiredWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput)
], InventoryUpdateOneRequiredWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateOrConnectWithoutProductsInput_1.InventoryCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateOrConnectWithoutProductsInput_1.InventoryCreateOrConnectWithoutProductsInput)
], InventoryUpdateOneRequiredWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpsertWithoutProductsInput_1.InventoryUpsertWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpsertWithoutProductsInput_1.InventoryUpsertWithoutProductsInput)
], InventoryUpdateOneRequiredWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryUpdateOneRequiredWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateWithoutProductsInput_1.InventoryUpdateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateWithoutProductsInput_1.InventoryUpdateWithoutProductsInput)
], InventoryUpdateOneRequiredWithoutProductsInput.prototype, "update", void 0);
InventoryUpdateOneRequiredWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateOneRequiredWithoutProductsInput", {
        isAbstract: true
    })
], InventoryUpdateOneRequiredWithoutProductsInput);
exports.InventoryUpdateOneRequiredWithoutProductsInput = InventoryUpdateOneRequiredWithoutProductsInput;
