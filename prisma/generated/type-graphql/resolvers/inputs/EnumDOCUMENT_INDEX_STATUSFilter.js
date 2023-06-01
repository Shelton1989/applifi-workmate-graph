"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumDOCUMENT_INDEX_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumDOCUMENT_INDEX_STATUSFilter_1 = require("../inputs/NestedEnumDOCUMENT_INDEX_STATUSFilter");
const DOCUMENT_INDEX_STATUS_1 = require("../../enums/DOCUMENT_INDEX_STATUS");
let EnumDOCUMENT_INDEX_STATUSFilter = class EnumDOCUMENT_INDEX_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumDOCUMENT_INDEX_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumDOCUMENT_INDEX_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumDOCUMENT_INDEX_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumDOCUMENT_INDEX_STATUSFilter_1.NestedEnumDOCUMENT_INDEX_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumDOCUMENT_INDEX_STATUSFilter_1.NestedEnumDOCUMENT_INDEX_STATUSFilter)
], EnumDOCUMENT_INDEX_STATUSFilter.prototype, "not", void 0);
EnumDOCUMENT_INDEX_STATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumDOCUMENT_INDEX_STATUSFilter", {
        isAbstract: true
    })
], EnumDOCUMENT_INDEX_STATUSFilter);
exports.EnumDOCUMENT_INDEX_STATUSFilter = EnumDOCUMENT_INDEX_STATUSFilter;
