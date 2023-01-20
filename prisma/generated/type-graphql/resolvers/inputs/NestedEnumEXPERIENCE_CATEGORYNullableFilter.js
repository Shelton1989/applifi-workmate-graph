"use strict";
var NestedEnumEXPERIENCE_CATEGORYNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEXPERIENCE_CATEGORYNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let NestedEnumEXPERIENCE_CATEGORYNullableFilter = NestedEnumEXPERIENCE_CATEGORYNullableFilter_1 = class NestedEnumEXPERIENCE_CATEGORYNullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEXPERIENCE_CATEGORYNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYNullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYNullableFilter)
], NestedEnumEXPERIENCE_CATEGORYNullableFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedEnumEXPERIENCE_CATEGORYNullableFilter.prototype, "isSet", void 0);
NestedEnumEXPERIENCE_CATEGORYNullableFilter = NestedEnumEXPERIENCE_CATEGORYNullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEXPERIENCE_CATEGORYNullableFilter", {
        isAbstract: true
    })
], NestedEnumEXPERIENCE_CATEGORYNullableFilter);
exports.NestedEnumEXPERIENCE_CATEGORYNullableFilter = NestedEnumEXPERIENCE_CATEGORYNullableFilter;
