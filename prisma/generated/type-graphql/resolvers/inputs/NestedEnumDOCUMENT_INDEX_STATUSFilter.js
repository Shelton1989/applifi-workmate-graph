"use strict";
var NestedEnumDOCUMENT_INDEX_STATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDOCUMENT_INDEX_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DOCUMENT_INDEX_STATUS_1 = require("../../enums/DOCUMENT_INDEX_STATUS");
let NestedEnumDOCUMENT_INDEX_STATUSFilter = NestedEnumDOCUMENT_INDEX_STATUSFilter_1 = class NestedEnumDOCUMENT_INDEX_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumDOCUMENT_INDEX_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumDOCUMENT_INDEX_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumDOCUMENT_INDEX_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumDOCUMENT_INDEX_STATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumDOCUMENT_INDEX_STATUSFilter)
], NestedEnumDOCUMENT_INDEX_STATUSFilter.prototype, "not", void 0);
NestedEnumDOCUMENT_INDEX_STATUSFilter = NestedEnumDOCUMENT_INDEX_STATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumDOCUMENT_INDEX_STATUSFilter", {
        isAbstract: true
    })
], NestedEnumDOCUMENT_INDEX_STATUSFilter);
exports.NestedEnumDOCUMENT_INDEX_STATUSFilter = NestedEnumDOCUMENT_INDEX_STATUSFilter;
