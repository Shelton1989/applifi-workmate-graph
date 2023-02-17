"use strict";
var NestedEnumPAYMENT_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPAYMENT_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let NestedEnumPAYMENT_TYPEFilter = NestedEnumPAYMENT_TYPEFilter_1 = class NestedEnumPAYMENT_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPAYMENT_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEFilter)
], NestedEnumPAYMENT_TYPEFilter.prototype, "not", void 0);
NestedEnumPAYMENT_TYPEFilter = NestedEnumPAYMENT_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPAYMENT_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumPAYMENT_TYPEFilter);
exports.NestedEnumPAYMENT_TYPEFilter = NestedEnumPAYMENT_TYPEFilter;
