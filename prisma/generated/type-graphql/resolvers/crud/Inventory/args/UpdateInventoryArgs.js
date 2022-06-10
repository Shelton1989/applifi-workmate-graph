"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryUpdateInput_1 = require("../../../inputs/InventoryUpdateInput");
const InventoryWhereUniqueInput_1 = require("../../../inputs/InventoryWhereUniqueInput");
let UpdateInventoryArgs = class UpdateInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateInput_1.InventoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryUpdateInput_1.InventoryUpdateInput)
], UpdateInventoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], UpdateInventoryArgs.prototype, "where", void 0);
UpdateInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateInventoryArgs);
exports.UpdateInventoryArgs = UpdateInventoryArgs;
