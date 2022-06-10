"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPRODUCT_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPRODUCT_TYPEFilter_1 = require("../inputs/NestedEnumPRODUCT_TYPEFilter");
const NestedEnumPRODUCT_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumPRODUCT_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
let EnumPRODUCT_TYPEWithAggregatesFilter = class EnumPRODUCT_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPRODUCT_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEWithAggregatesFilter_1.NestedEnumPRODUCT_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEWithAggregatesFilter_1.NestedEnumPRODUCT_TYPEWithAggregatesFilter)
], EnumPRODUCT_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPRODUCT_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter)
], EnumPRODUCT_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter)
], EnumPRODUCT_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumPRODUCT_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPRODUCT_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPRODUCT_TYPEWithAggregatesFilter);
exports.EnumPRODUCT_TYPEWithAggregatesFilter = EnumPRODUCT_TYPEWithAggregatesFilter;
