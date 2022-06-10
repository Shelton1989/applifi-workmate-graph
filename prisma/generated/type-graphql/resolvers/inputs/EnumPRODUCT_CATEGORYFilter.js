"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPRODUCT_CATEGORYFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPRODUCT_CATEGORYFilter_1 = require("../inputs/NestedEnumPRODUCT_CATEGORYFilter");
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
let EnumPRODUCT_CATEGORYFilter = class EnumPRODUCT_CATEGORYFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPRODUCT_CATEGORYFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_CATEGORYFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_CATEGORYFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYFilter_1.NestedEnumPRODUCT_CATEGORYFilter)
], EnumPRODUCT_CATEGORYFilter.prototype, "not", void 0);
EnumPRODUCT_CATEGORYFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPRODUCT_CATEGORYFilter", {
        isAbstract: true
    })
], EnumPRODUCT_CATEGORYFilter);
exports.EnumPRODUCT_CATEGORYFilter = EnumPRODUCT_CATEGORYFilter;
