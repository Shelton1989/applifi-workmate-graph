"use strict";
var NestedEnumPRODUCT_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPRODUCT_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PRODUCT_TYPE_1 = require("../../enums/PRODUCT_TYPE");
let NestedEnumPRODUCT_TYPEFilter = NestedEnumPRODUCT_TYPEFilter_1 = class NestedEnumPRODUCT_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_TYPE_1.PRODUCT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPRODUCT_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_TYPE_1.PRODUCT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_TYPEFilter)
], NestedEnumPRODUCT_TYPEFilter.prototype, "not", void 0);
NestedEnumPRODUCT_TYPEFilter = NestedEnumPRODUCT_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPRODUCT_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumPRODUCT_TYPEFilter);
exports.NestedEnumPRODUCT_TYPEFilter = NestedEnumPRODUCT_TYPEFilter;
