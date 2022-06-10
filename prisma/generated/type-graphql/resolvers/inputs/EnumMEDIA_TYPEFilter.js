"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMEDIA_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumMEDIA_TYPEFilter_1 = require("../inputs/NestedEnumMEDIA_TYPEFilter");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let EnumMEDIA_TYPEFilter = class EnumMEDIA_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMEDIA_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEDIA_TYPE_1.MEDIA_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEDIA_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEDIA_TYPE_1.MEDIA_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumMEDIA_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumMEDIA_TYPEFilter_1.NestedEnumMEDIA_TYPEFilter)
], EnumMEDIA_TYPEFilter.prototype, "not", void 0);
EnumMEDIA_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMEDIA_TYPEFilter", {
        isAbstract: true
    })
], EnumMEDIA_TYPEFilter);
exports.EnumMEDIA_TYPEFilter = EnumMEDIA_TYPEFilter;
