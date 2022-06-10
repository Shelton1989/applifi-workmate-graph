"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPRODUCT_CATEGORYWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPRODUCT_CATEGORYFilter_1 = require("../inputs/NestedEnumPRODUCT_CATEGORYFilter");
const NestedEnumPRODUCT_CATEGORYWithAggregatesFilter_1 = require("../inputs/NestedEnumPRODUCT_CATEGORYWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
let EnumPRODUCT_CATEGORYWithAggregatesFilter = class EnumPRODUCT_CATEGORYWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYWithAggregatesFilter_1.NestedEnumPRODUCT_CATEGORYWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYWithAggregatesFilter_1.NestedEnumPRODUCT_CATEGORYWithAggregatesFilter)
], EnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter)
], EnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter)
], EnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "_max", void 0);
EnumPRODUCT_CATEGORYWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPRODUCT_CATEGORYWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPRODUCT_CATEGORYWithAggregatesFilter);
exports.EnumPRODUCT_CATEGORYWithAggregatesFilter = EnumPRODUCT_CATEGORYWithAggregatesFilter;
