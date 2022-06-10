"use strict";
var NestedEnumPRODUCT_CATEGORYFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPRODUCT_CATEGORYFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PRODUCT_CATEGORY_1 = require("../../enums/PRODUCT_CATEGORY");
let NestedEnumPRODUCT_CATEGORYFilter = NestedEnumPRODUCT_CATEGORYFilter_1 = class NestedEnumPRODUCT_CATEGORYFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PRODUCT_CATEGORY_1.PRODUCT_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPRODUCT_CATEGORYFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_CATEGORYFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PRODUCT_CATEGORY_1.PRODUCT_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPRODUCT_CATEGORYFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPRODUCT_CATEGORYFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPRODUCT_CATEGORYFilter)
], NestedEnumPRODUCT_CATEGORYFilter.prototype, "not", void 0);
NestedEnumPRODUCT_CATEGORYFilter = NestedEnumPRODUCT_CATEGORYFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPRODUCT_CATEGORYFilter", {
        isAbstract: true
    })
], NestedEnumPRODUCT_CATEGORYFilter);
exports.NestedEnumPRODUCT_CATEGORYFilter = NestedEnumPRODUCT_CATEGORYFilter;
