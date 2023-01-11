"use strict";
var NestedEnumADDRESS_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumADDRESS_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumADDRESS_TYPEFilter_1 = require("../inputs/NestedEnumADDRESS_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let NestedEnumADDRESS_TYPEWithAggregatesFilter = NestedEnumADDRESS_TYPEWithAggregatesFilter_1 = class NestedEnumADDRESS_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumADDRESS_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEWithAggregatesFilter)
], NestedEnumADDRESS_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumADDRESS_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter)
], NestedEnumADDRESS_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter)
], NestedEnumADDRESS_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumADDRESS_TYPEWithAggregatesFilter = NestedEnumADDRESS_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumADDRESS_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumADDRESS_TYPEWithAggregatesFilter);
exports.NestedEnumADDRESS_TYPEWithAggregatesFilter = NestedEnumADDRESS_TYPEWithAggregatesFilter;
