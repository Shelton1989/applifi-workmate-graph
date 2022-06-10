"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPRODUCT_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPRODUCT_TYPEFilter_1 = require("../inputs/NestedEnumPRODUCT_TYPEFilter");
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
let EnumPRODUCT_TYPEFilter = class EnumPRODUCT_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPRODUCT_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPRODUCT_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEFilter_1.NestedEnumPRODUCT_TYPEFilter)
], EnumPRODUCT_TYPEFilter.prototype, "not", void 0);
EnumPRODUCT_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPRODUCT_TYPEFilter", {
        isAbstract: true
    })
], EnumPRODUCT_TYPEFilter);
exports.EnumPRODUCT_TYPEFilter = EnumPRODUCT_TYPEFilter;
