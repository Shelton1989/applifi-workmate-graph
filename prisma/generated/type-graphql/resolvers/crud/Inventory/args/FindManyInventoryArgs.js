"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryOrderByWithRelationInput_1 = require("../../../inputs/InventoryOrderByWithRelationInput");
const InventoryWhereInput_1 = require("../../../inputs/InventoryWhereInput");
const InventoryWhereUniqueInput_1 = require("../../../inputs/InventoryWhereUniqueInput");
const InventoryScalarFieldEnum_1 = require("../../../../enums/InventoryScalarFieldEnum");
let FindManyInventoryArgs = class FindManyInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereInput_1.InventoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereInput_1.InventoryWhereInput)
], FindManyInventoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryOrderByWithRelationInput_1.InventoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInventoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], FindManyInventoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInventoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInventoryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryScalarFieldEnum_1.InventoryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInventoryArgs.prototype, "distinct", void 0);
FindManyInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyInventoryArgs);
exports.FindManyInventoryArgs = FindManyInventoryArgs;
