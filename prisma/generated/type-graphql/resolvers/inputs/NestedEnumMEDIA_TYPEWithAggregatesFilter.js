"use strict";
var NestedEnumMEDIA_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumMEDIA_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumMEDIA_TYPEFilter_1 = require("../inputs/NestedEnumMEDIA_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let NestedEnumMEDIA_TYPEWithAggregatesFilter = NestedEnumMEDIA_TYPEWithAggregatesFilter_1 = class NestedEnumMEDIA_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumMEDIA_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEDIA_TYPE_1.MEDIA_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumMEDIA_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEDIA_TYPE_1.MEDIA_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumMEDIA_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMEDIA_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMEDIA_TYPEWithAggregatesFilter)
], NestedEnumMEDIA_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumMEDIA_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter)
], NestedEnumMEDIA_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter)
], NestedEnumMEDIA_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumMEDIA_TYPEWithAggregatesFilter = NestedEnumMEDIA_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumMEDIA_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumMEDIA_TYPEWithAggregatesFilter);
exports.NestedEnumMEDIA_TYPEWithAggregatesFilter = NestedEnumMEDIA_TYPEWithAggregatesFilter;
