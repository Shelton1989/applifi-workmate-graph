"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumADDRESS_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumADDRESS_TYPEFilter_1 = require("../inputs/NestedEnumADDRESS_TYPEFilter");
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let EnumADDRESS_TYPEFilter = class EnumADDRESS_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumADDRESS_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumADDRESS_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEFilter_1.NestedEnumADDRESS_TYPEFilter)
], EnumADDRESS_TYPEFilter.prototype, "not", void 0);
EnumADDRESS_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumADDRESS_TYPEFilter", {
        isAbstract: true
    })
], EnumADDRESS_TYPEFilter);
exports.EnumADDRESS_TYPEFilter = EnumADDRESS_TYPEFilter;
