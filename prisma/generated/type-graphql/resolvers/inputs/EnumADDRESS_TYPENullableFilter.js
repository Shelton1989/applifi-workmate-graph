"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumADDRESS_TYPENullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumADDRESS_TYPENullableFilter_1 = require("../inputs/NestedEnumADDRESS_TYPENullableFilter");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let EnumADDRESS_TYPENullableFilter = class EnumADDRESS_TYPENullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumADDRESS_TYPENullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPENullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPENullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableFilter_1.NestedEnumADDRESS_TYPENullableFilter)
], EnumADDRESS_TYPENullableFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumADDRESS_TYPENullableFilter.prototype, "isSet", void 0);
EnumADDRESS_TYPENullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumADDRESS_TYPENullableFilter", {
        isAbstract: true
    })
], EnumADDRESS_TYPENullableFilter);
exports.EnumADDRESS_TYPENullableFilter = EnumADDRESS_TYPENullableFilter;
