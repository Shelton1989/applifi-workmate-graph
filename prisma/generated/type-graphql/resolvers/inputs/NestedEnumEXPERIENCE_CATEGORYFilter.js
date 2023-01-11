"use strict";
var NestedEnumEXPERIENCE_CATEGORYFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEXPERIENCE_CATEGORYFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let NestedEnumEXPERIENCE_CATEGORYFilter = NestedEnumEXPERIENCE_CATEGORYFilter_1 = class NestedEnumEXPERIENCE_CATEGORYFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEXPERIENCE_CATEGORYFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYFilter)
], NestedEnumEXPERIENCE_CATEGORYFilter.prototype, "not", void 0);
NestedEnumEXPERIENCE_CATEGORYFilter = NestedEnumEXPERIENCE_CATEGORYFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEXPERIENCE_CATEGORYFilter", {
        isAbstract: true
    })
], NestedEnumEXPERIENCE_CATEGORYFilter);
exports.NestedEnumEXPERIENCE_CATEGORYFilter = NestedEnumEXPERIENCE_CATEGORYFilter;
