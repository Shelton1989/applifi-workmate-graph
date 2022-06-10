"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInventoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryOrderByWithAggregationInput_1 = require("../../../inputs/InventoryOrderByWithAggregationInput");
const InventoryScalarWhereWithAggregatesInput_1 = require("../../../inputs/InventoryScalarWhereWithAggregatesInput");
const InventoryWhereInput_1 = require("../../../inputs/InventoryWhereInput");
const InventoryScalarFieldEnum_1 = require("../../../../enums/InventoryScalarFieldEnum");
let GroupByInventoryArgs = class GroupByInventoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryWhereInput_1.InventoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryWhereInput_1.InventoryWhereInput)
], GroupByInventoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryOrderByWithAggregationInput_1.InventoryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInventoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InventoryScalarFieldEnum_1.InventoryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInventoryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryScalarWhereWithAggregatesInput_1.InventoryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryScalarWhereWithAggregatesInput_1.InventoryScalarWhereWithAggregatesInput)
], GroupByInventoryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInventoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInventoryArgs.prototype, "skip", void 0);
GroupByInventoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInventoryArgs);
exports.GroupByInventoryArgs = GroupByInventoryArgs;
