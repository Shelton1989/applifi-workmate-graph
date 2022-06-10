"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryWhereInput_1 = require("../../../inputs/InventoryWhereInput");
let DeleteManyInventoryArgs = class DeleteManyInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereInput_1.InventoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereInput_1.InventoryWhereInput)
], DeleteManyInventoryArgs.prototype, "where", void 0);
DeleteManyInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInventoryArgs);
exports.DeleteManyInventoryArgs = DeleteManyInventoryArgs;
