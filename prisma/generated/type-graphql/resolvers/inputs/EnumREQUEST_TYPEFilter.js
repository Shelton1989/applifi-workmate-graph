"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREQUEST_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREQUEST_TYPEFilter_1 = require("../inputs/NestedEnumREQUEST_TYPEFilter");
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let EnumREQUEST_TYPEFilter = class EnumREQUEST_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREQUEST_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter)
], EnumREQUEST_TYPEFilter.prototype, "not", void 0);
EnumREQUEST_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREQUEST_TYPEFilter", {
        isAbstract: true
    })
], EnumREQUEST_TYPEFilter);
exports.EnumREQUEST_TYPEFilter = EnumREQUEST_TYPEFilter;
