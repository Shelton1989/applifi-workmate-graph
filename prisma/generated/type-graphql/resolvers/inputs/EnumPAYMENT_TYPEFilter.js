"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_TYPEFilter_1 = require("../inputs/NestedEnumPAYMENT_TYPEFilter");
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let EnumPAYMENT_TYPEFilter = class EnumPAYMENT_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter)
], EnumPAYMENT_TYPEFilter.prototype, "not", void 0);
EnumPAYMENT_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_TYPEFilter", {
        isAbstract: true
    })
], EnumPAYMENT_TYPEFilter);
exports.EnumPAYMENT_TYPEFilter = EnumPAYMENT_TYPEFilter;
