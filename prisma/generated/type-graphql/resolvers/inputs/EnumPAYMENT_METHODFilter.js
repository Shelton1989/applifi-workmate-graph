"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_METHODFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_METHODFilter_1 = require("../inputs/NestedEnumPAYMENT_METHODFilter");
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
let EnumPAYMENT_METHODFilter = class EnumPAYMENT_METHODFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_METHODFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_METHODFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_METHODFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter)
], EnumPAYMENT_METHODFilter.prototype, "not", void 0);
EnumPAYMENT_METHODFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_METHODFilter", {
        isAbstract: true
    })
], EnumPAYMENT_METHODFilter);
exports.EnumPAYMENT_METHODFilter = EnumPAYMENT_METHODFilter;
