"use strict";
var NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEXPERIENCE_CATEGORYNullableFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter_1 = class NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "isSet", void 0);
NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter);
exports.NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter;
