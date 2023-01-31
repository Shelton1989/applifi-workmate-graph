"use strict";
var NestedEnumADDRESS_TYPENullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumADDRESS_TYPENullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumADDRESS_TYPENullableFilter_1 = require("../inputs/NestedEnumADDRESS_TYPENullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let NestedEnumADDRESS_TYPENullableWithAggregatesFilter = NestedEnumADDRESS_TYPENullableWithAggregatesFilter_1 = class NestedEnumADDRESS_TYPENullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableWithAggregatesFilter)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter.prototype, "isSet", void 0);
NestedEnumADDRESS_TYPENullableWithAggregatesFilter = NestedEnumADDRESS_TYPENullableWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumADDRESS_TYPENullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumADDRESS_TYPENullableWithAggregatesFilter);
exports.NestedEnumADDRESS_TYPENullableWithAggregatesFilter = NestedEnumADDRESS_TYPENullableWithAggregatesFilter;
