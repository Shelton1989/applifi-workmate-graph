"use strict";
var NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEXPERIENCE_CATEGORYFilter_1 = require("../inputs/NestedEnumEXPERIENCE_CATEGORYFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
let NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter = NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter_1 = class NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter)
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter)
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEXPERIENCE_CATEGORYFilter_1.NestedEnumEXPERIENCE_CATEGORYFilter)
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter = NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter);
exports.NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter = NestedEnumEXPERIENCE_CATEGORYWithAggregatesFilter;
