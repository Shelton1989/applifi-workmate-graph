"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateManyInput_1 = require("../../../inputs/InventoryCreateManyInput");
let CreateManyInventoryArgs = class CreateManyInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryCreateManyInput_1.InventoryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInventoryArgs.prototype, "data", void 0);
CreateManyInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInventoryArgs);
exports.CreateManyInventoryArgs = CreateManyInventoryArgs;
