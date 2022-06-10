"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateInput_1 = require("../../../inputs/InventoryCreateInput");
const InventoryUpdateInput_1 = require("../../../inputs/InventoryUpdateInput");
const InventoryWhereUniqueInput_1 = require("../../../inputs/InventoryWhereUniqueInput");
let UpsertInventoryArgs = class UpsertInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], UpsertInventoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateInput_1.InventoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateInput_1.InventoryCreateInput)
], UpsertInventoryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateInput_1.InventoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryUpdateInput_1.InventoryUpdateInput)
], UpsertInventoryArgs.prototype, "update", void 0);
UpsertInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertInventoryArgs);
exports.UpsertInventoryArgs = UpsertInventoryArgs;
