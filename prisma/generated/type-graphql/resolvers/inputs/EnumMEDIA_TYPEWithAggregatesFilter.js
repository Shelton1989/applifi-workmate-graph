"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMEDIA_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumMEDIA_TYPEFilter_1 = require("../inputs/NestedEnumMEDIA_TYPEFilter");
const NestedEnumMEDIA_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumMEDIA_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let EnumMEDIA_TYPEWithAggregatesFilter = class EnumMEDIA_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMEDIA_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEDIA_TYPE_1.MEDIA_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEDIA_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEDIA_TYPE_1.MEDIA_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEDIA_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMEDIA_TYPEWithAggregatesFilter_1.NestedEnumMEDIA_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMEDIA_TYPEWithAggregatesFilter_1.NestedEnumMEDIA_TYPEWithAggregatesFilter)
], EnumMEDIA_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumMEDIA_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter)
], EnumMEDIA_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter)
], EnumMEDIA_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumMEDIA_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMEDIA_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumMEDIA_TYPEWithAggregatesFilter);
exports.EnumMEDIA_TYPEWithAggregatesFilter = EnumMEDIA_TYPEWithAggregatesFilter;
