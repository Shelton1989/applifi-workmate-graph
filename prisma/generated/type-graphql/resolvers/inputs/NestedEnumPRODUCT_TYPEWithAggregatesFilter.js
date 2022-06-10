"use strict";
var NestedEnumPRODUCT_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPRODUCT_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPRODUCT_TYPEFilter_1 = require("../inputs/NestedEnumPRODUCT_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
let NestedEnumPRODUCT_TYPEWithAggregatesFilter = NestedEnumPRODUCT_TYPEWithAggregatesFilter_1 = class NestedEnumPRODUCT_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPRODUCT_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEWithAggregatesFilter)
], NestedEnumPRODUCT_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPRODUCT_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter)
], NestedEnumPRODUCT_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter)
], NestedEnumPRODUCT_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPRODUCT_TYPEWithAggregatesFilter = NestedEnumPRODUCT_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPRODUCT_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPRODUCT_TYPEWithAggregatesFilter);
exports.NestedEnumPRODUCT_TYPEWithAggregatesFilter = NestedEnumPRODUCT_TYPEWithAggregatesFilter;
