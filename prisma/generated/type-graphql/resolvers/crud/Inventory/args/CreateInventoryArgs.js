"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateInput_1 = require("../../../inputs/InventoryCreateInput");
let CreateInventoryArgs = class CreateInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateInput_1.InventoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateInput_1.InventoryCreateInput)
], CreateInventoryArgs.prototype, "data", void 0);
CreateInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateInventoryArgs);
exports.CreateInventoryArgs = CreateInventoryArgs;
