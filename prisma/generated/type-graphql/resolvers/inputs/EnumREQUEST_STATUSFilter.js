"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREQUEST_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREQUEST_STATUSFilter_1 = require("../inputs/NestedEnumREQUEST_STATUSFilter");
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
let EnumREQUEST_STATUSFilter = class EnumREQUEST_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREQUEST_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter)
], EnumREQUEST_STATUSFilter.prototype, "not", void 0);
EnumREQUEST_STATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREQUEST_STATUSFilter", {
        isAbstract: true
    })
], EnumREQUEST_STATUSFilter);
exports.EnumREQUEST_STATUSFilter = EnumREQUEST_STATUSFilter;
