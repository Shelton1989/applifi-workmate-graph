"use strict";
var NestedEnumADDRESS_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumADDRESS_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ADDRESS_TYPE_1 = require("../../enums/ADDRESS_TYPE");
let NestedEnumADDRESS_TYPEFilter = NestedEnumADDRESS_TYPEFilter_1 = class NestedEnumADDRESS_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ADDRESS_TYPE_1.ADDRESS_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumADDRESS_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ADDRESS_TYPE_1.ADDRESS_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumADDRESS_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumADDRESS_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumADDRESS_TYPEFilter)
], NestedEnumADDRESS_TYPEFilter.prototype, "not", void 0);
NestedEnumADDRESS_TYPEFilter = NestedEnumADDRESS_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumADDRESS_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumADDRESS_TYPEFilter);
exports.NestedEnumADDRESS_TYPEFilter = NestedEnumADDRESS_TYPEFilter;
