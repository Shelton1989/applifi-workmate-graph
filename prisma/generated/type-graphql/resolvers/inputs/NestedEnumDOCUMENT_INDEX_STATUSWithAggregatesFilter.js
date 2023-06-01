"use strict";
var NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumDOCUMENT_INDEX_STATUSFilter_1 = require("../inputs/NestedEnumDOCUMENT_INDEX_STATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const DOCUMENT_INDEX_STATUS_1 = require("../../enums/DOCUMENT_INDEX_STATUS");
let NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter = NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter_1 = class NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter)
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumDOCUMENT_INDEX_STATUSFilter_1.NestedEnumDOCUMENT_INDEX_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumDOCUMENT_INDEX_STATUSFilter_1.NestedEnumDOCUMENT_INDEX_STATUSFilter)
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumDOCUMENT_INDEX_STATUSFilter_1.NestedEnumDOCUMENT_INDEX_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumDOCUMENT_INDEX_STATUSFilter_1.NestedEnumDOCUMENT_INDEX_STATUSFilter)
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter = NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter);
exports.NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter = NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter;
