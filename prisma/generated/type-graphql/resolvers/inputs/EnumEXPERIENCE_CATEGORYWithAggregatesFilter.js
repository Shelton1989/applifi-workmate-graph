"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEXPERIENCE_CATEGORYWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEXPERIENCE_CATEGORYFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYFilter");
const NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let EnumEXPERIENCE_CATEGORYWithAggregatesFilter = class EnumEXPERIENCE_CATEGORYWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter_1.NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter_1.NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter)
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter)
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter)
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "_max", void 0);
EnumEXPERIENCE_CATEGORYWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEXPERIENCE_CATEGORYWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEXPERIENCE_CATEGORYWithAggregatesFilter);
exports.EnumEXPERIENCE_CATEGORYWithAggregatesFilter = EnumEXPERIENCE_CATEGORYWithAggregatesFilter;
