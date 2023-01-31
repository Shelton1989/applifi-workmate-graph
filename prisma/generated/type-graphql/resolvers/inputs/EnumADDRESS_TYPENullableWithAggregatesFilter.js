"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumADDRESS_TYPENullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumADDRESS_TYPENullableFilter_1 = require("../inputs/NestedEnumADDRESS_TYPENullableFilter");
const NestedEnumADDRESS_TYPENullableWithAggregatesFilter_1 = require("../inputs/NestedEnumADDRESS_TYPENullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let EnumADDRESS_TYPENullableWithAggregatesFilter = class EnumADDRESS_TYPENullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableWithAggregatesFilter_1.NestedEnumADDRESS_TYPENullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableWithAggregatesFilter_1.NestedEnumADDRESS_TYPENullableWithAggregatesFilter)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "isSet", void 0);
EnumADDRESS_TYPENullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumADDRESS_TYPENullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumADDRESS_TYPENullableWithAggregatesFilter);
exports.EnumADDRESS_TYPENullableWithAggregatesFilter = EnumADDRESS_TYPENullableWithAggregatesFilter;
