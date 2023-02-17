"use strict";
var NestedEnumPAYMENT_METHODFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPAYMENT_METHODFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
let NestedEnumPAYMENT_METHODFilter = NestedEnumPAYMENT_METHODFilter_1 = class NestedEnumPAYMENT_METHODFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPAYMENT_METHODFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_METHODFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_METHODFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODFilter)
], NestedEnumPAYMENT_METHODFilter.prototype, "not", void 0);
NestedEnumPAYMENT_METHODFilter = NestedEnumPAYMENT_METHODFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPAYMENT_METHODFilter", {
        isAbstract: true
    })
], NestedEnumPAYMENT_METHODFilter);
exports.NestedEnumPAYMENT_METHODFilter = NestedEnumPAYMENT_METHODFilter;
