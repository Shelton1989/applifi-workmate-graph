"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTOPIC_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTOPIC_TYPEFilter_1 = require("../inputs/NestedEnumTOPIC_TYPEFilter");
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let EnumTOPIC_TYPEFilter = class EnumTOPIC_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTOPIC_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTOPIC_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTOPIC_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter)
], EnumTOPIC_TYPEFilter.prototype, "not", void 0);
EnumTOPIC_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTOPIC_TYPEFilter", {
        isAbstract: true
    })
], EnumTOPIC_TYPEFilter);
exports.EnumTOPIC_TYPEFilter = EnumTOPIC_TYPEFilter;
