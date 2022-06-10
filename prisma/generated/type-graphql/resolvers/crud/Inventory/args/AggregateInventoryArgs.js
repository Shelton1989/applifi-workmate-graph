"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryOrderByWithRelationInput_1 = require("../../../inputs/InventoryOrderByWithRelationInput");
const InventoryWhereInput_1 = require("../../../inputs/InventoryWhereInput");
const InventoryWhereUniqueInput_1 = require("../../../inputs/InventoryWhereUniqueInput");
let AggregateInventoryArgs = class AggregateInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereInput_1.InventoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereInput_1.InventoryWhereInput)
], AggregateInventoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryOrderByWithRelationInput_1.InventoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateInventoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereUniqueInput_1.InventoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereUniqueInput_1.InventoryWhereUniqueInput)
], AggregateInventoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInventoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateInventoryArgs.prototype, "skip", void 0);
AggregateInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateInventoryArgs);
exports.AggregateInventoryArgs = AggregateInventoryArgs;
