"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumADDRESS_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumADDRESS_TYPEFilter_1 = require("../inputs/NestedEnumADDRESS_TYPEFilter");
const NestedEnumADDRESS_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumADDRESS_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let EnumADDRESS_TYPEWithAggregatesFilter = class EnumADDRESS_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumADDRESS_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEWithAggregatesFilter_1.NestedEnumADDRESS_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEWithAggregatesFilter_1.NestedEnumADDRESS_TYPEWithAggregatesFilter)
], EnumADDRESS_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumADDRESS_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter)
], EnumADDRESS_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter)
], EnumADDRESS_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumADDRESS_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumADDRESS_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumADDRESS_TYPEWithAggregatesFilter);
exports.EnumADDRESS_TYPEWithAggregatesFilter = EnumADDRESS_TYPEWithAggregatesFilter;
