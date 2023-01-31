"use strict";
var NestedEnumADDRESS_TYPENullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumADDRESS_TYPENullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let NestedEnumADDRESS_TYPENullableFilter = NestedEnumADDRESS_TYPENullableFilter_1 = class NestedEnumADDRESS_TYPENullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumADDRESS_TYPENullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPENullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPENullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPENullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPENullableFilter)
], NestedEnumADDRESS_TYPENullableFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedEnumADDRESS_TYPENullableFilter.prototype, "isSet", void 0);
NestedEnumADDRESS_TYPENullableFilter = NestedEnumADDRESS_TYPENullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumADDRESS_TYPENullableFilter", {
        isAbstract: true
    })
], NestedEnumADDRESS_TYPENullableFilter);
exports.NestedEnumADDRESS_TYPENullableFilter = NestedEnumADDRESS_TYPENullableFilter;
