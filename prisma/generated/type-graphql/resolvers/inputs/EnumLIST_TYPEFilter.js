"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLIST_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumLIST_TYPEFilter_1 = require("../inputs/NestedEnumLIST_TYPEFilter");
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let EnumLIST_TYPEFilter = class EnumLIST_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumLIST_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLIST_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLIST_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter)
], EnumLIST_TYPEFilter.prototype, "not", void 0);
EnumLIST_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumLIST_TYPEFilter", {
        isAbstract: true
    })
], EnumLIST_TYPEFilter);
exports.EnumLIST_TYPEFilter = EnumLIST_TYPEFilter;
