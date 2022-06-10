"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateOrConnectWithoutUserInput_1 = require("../inputs/InventoryCreateOrConnectWithoutUserInput");
const InventoryCreateWithoutUserInput_1 = require("../inputs/InventoryCreateWithoutUserInput");
const InventoryUpdateWithoutUserInput_1 = require("../inputs/InventoryUpdateWithoutUserInput");
const InventoryUpsertWithoutUserInput_1 = require("../inputs/InventoryUpsertWithoutUserInput");
const InventoryWhereUniqueInput_1 = require("../inputs/InventoryWhereUniqueInput");
let InventoryUpdateOneWithoutUserInput = class InventoryUpdateOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput)
], InventoryUpdateOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateOrConnectWithoutUserInput_1.InventoryCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateOrConnectWithoutUserInput_1.InventoryCreateOrConnectWithoutUserInput)
], InventoryUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpsertWithoutUserInput_1.InventoryUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpsertWithoutUserInput_1.InventoryUpsertWithoutUserInput)
], InventoryUpdateOneWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InventoryUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InventoryUpdateOneWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], InventoryUpdateOneWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateWithoutUserInput_1.InventoryUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateWithoutUserInput_1.InventoryUpdateWithoutUserInput)
], InventoryUpdateOneWithoutUserInput.prototype, "update", void 0);
InventoryUpdateOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], InventoryUpdateOneWithoutUserInput);
exports.InventoryUpdateOneWithoutUserInput = InventoryUpdateOneWithoutUserInput;
