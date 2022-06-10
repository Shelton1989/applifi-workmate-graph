"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryWhereUniqueInput_1 = require("../../../inputs/InventoryWhereUniqueInput");
let DeleteInventoryArgs = class DeleteInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], DeleteInventoryArgs.prototype, "where", void 0);
DeleteInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteInventoryArgs);
exports.DeleteInventoryArgs = DeleteInventoryArgs;
