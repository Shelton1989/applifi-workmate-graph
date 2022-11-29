"use strict";
var NestedEnumLIST_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLIST_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let NestedEnumLIST_TYPEFilter = NestedEnumLIST_TYPEFilter_1 = class NestedEnumLIST_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumLIST_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLIST_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLIST_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEFilter)
], NestedEnumLIST_TYPEFilter.prototype, "not", void 0);
NestedEnumLIST_TYPEFilter = NestedEnumLIST_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumLIST_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumLIST_TYPEFilter);
exports.NestedEnumLIST_TYPEFilter = NestedEnumLIST_TYPEFilter;
