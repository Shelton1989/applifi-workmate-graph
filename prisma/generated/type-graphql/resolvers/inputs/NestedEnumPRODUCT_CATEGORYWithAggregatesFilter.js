"use strict";
var NestedEnumPRODUCT_CATEGORYWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPRODUCT_CATEGORYWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPRODUCT_CATEGORYFilter_1 = require("../inputs/NestedEnumPRODUCT_CATEGORYFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
let NestedEnumPRODUCT_CATEGORYWithAggregatesFilter = NestedEnumPRODUCT_CATEGORYWithAggregatesFilter_1 = class NestedEnumPRODUCT_CATEGORYWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYWithAggregatesFilter)
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter)
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter)
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPRODUCT_CATEGORYWithAggregatesFilter = NestedEnumPRODUCT_CATEGORYWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPRODUCT_CATEGORYWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPRODUCT_CATEGORYWithAggregatesFilter);
exports.NestedEnumPRODUCT_CATEGORYWithAggregatesFilter = NestedEnumPRODUCT_CATEGORYWithAggregatesFilter;
