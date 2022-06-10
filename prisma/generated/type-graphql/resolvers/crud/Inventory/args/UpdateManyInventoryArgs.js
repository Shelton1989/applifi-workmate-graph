"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryUpdateManyMutationInput_1 = require("../../../inputs/InventoryUpdateManyMutationInput");
const InventoryWhereInput_1 = require("../../../inputs/InventoryWhereInput");
let UpdateManyInventoryArgs = class UpdateManyInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateManyMutationInput_1.InventoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryUpdateManyMutationInput_1.InventoryUpdateManyMutationInput)
], UpdateManyInventoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereInput_1.InventoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereInput_1.InventoryWhereInput)
], UpdateManyInventoryArgs.prototype, "where", void 0);
UpdateManyInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInventoryArgs);
exports.UpdateManyInventoryArgs = UpdateManyInventoryArgs;
