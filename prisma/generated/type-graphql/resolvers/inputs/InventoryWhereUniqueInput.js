"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InventoryWhereUniqueInput = class InventoryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryWhereUniqueInput.prototype, "userId", void 0);
InventoryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryWhereUniqueInput", {
        isAbstract: true
    })
], InventoryWhereUniqueInput);
exports.InventoryWhereUniqueInput = InventoryWhereUniqueInput;
