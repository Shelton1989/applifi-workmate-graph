"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShippingMethodArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodOrderByWithAggregationInput_1 = require("../../../inputs/ShippingMethodOrderByWithAggregationInput");
const ShippingMethodScalarWhereWithAggregatesInput_1 = require("../../../inputs/ShippingMethodScalarWhereWithAggregatesInput");
const ShippingMethodWhereInput_1 = require("../../../inputs/ShippingMethodWhereInput");
const ShippingMethodScalarFieldEnum_1 = require("../../../../enums/ShippingMethodScalarFieldEnum");
let GroupByShippingMethodArgs = class GroupByShippingMethodArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereInput_1.ShippingMethodWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereInput_1.ShippingMethodWhereInput)
], GroupByShippingMethodArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodOrderByWithAggregationInput_1.ShippingMethodOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShippingMethodArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodScalarFieldEnum_1.ShippingMethodScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByShippingMethodArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodScalarWhereWithAggregatesInput_1.ShippingMethodScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodScalarWhereWithAggregatesInput_1.ShippingMethodScalarWhereWithAggregatesInput)
], GroupByShippingMethodArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShippingMethodArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByShippingMethodArgs.prototype, "skip", void 0);
GroupByShippingMethodArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByShippingMethodArgs);
exports.GroupByShippingMethodArgs = GroupByShippingMethodArgs;
