"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEXPERIENCE_CATEGORYNullableFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYNullableFilter");
const NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = class EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter.prototype, "isSet", void 0);
EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter);
exports.EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter = EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter;
