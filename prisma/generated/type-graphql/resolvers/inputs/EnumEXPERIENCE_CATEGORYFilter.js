"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEXPERIENCE_CATEGORYFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEXPERIENCE_CATEGORYFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYFilter");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let EnumEXPERIENCE_CATEGORYFilter = class EnumEXPERIENCE_CATEGORYFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEXPERIENCE_CATEGORYFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter)
], EnumEXPERIENCE_CATEGORYFilter.prototype, "not", void 0);
EnumEXPERIENCE_CATEGORYFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEXPERIENCE_CATEGORYFilter", {
        isAbstract: true
    })
], EnumEXPERIENCE_CATEGORYFilter);
exports.EnumEXPERIENCE_CATEGORYFilter = EnumEXPERIENCE_CATEGORYFilter;
