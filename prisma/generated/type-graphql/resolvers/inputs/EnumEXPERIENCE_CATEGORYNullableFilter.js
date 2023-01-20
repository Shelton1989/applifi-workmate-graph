"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEXPERIENCE_CATEGORYNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEXPERIENCE_CATEGORYNullableFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYNullableFilter");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let EnumEXPERIENCE_CATEGORYNullableFilter = class EnumEXPERIENCE_CATEGORYNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEXPERIENCE_CATEGORYNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableFilter_1.NestedEnumEXPERIENCE_CATEGORYNullableFilter)
], EnumEXPERIENCE_CATEGORYNullableFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumEXPERIENCE_CATEGORYNullableFilter.prototype, "isSet", void 0);
EnumEXPERIENCE_CATEGORYNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEXPERIENCE_CATEGORYNullableFilter", {
        isAbstract: true
    })
], EnumEXPERIENCE_CATEGORYNullableFilter);
exports.EnumEXPERIENCE_CATEGORYNullableFilter = EnumEXPERIENCE_CATEGORYNullableFilter;
