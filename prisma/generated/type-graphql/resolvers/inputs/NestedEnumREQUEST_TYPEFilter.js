"use strict";
var NestedEnumREQUEST_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumREQUEST_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let NestedEnumREQUEST_TYPEFilter = NestedEnumREQUEST_TYPEFilter_1 = class NestedEnumREQUEST_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumREQUEST_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEFilter)
], NestedEnumREQUEST_TYPEFilter.prototype, "not", void 0);
NestedEnumREQUEST_TYPEFilter = NestedEnumREQUEST_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumREQUEST_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumREQUEST_TYPEFilter);
exports.NestedEnumREQUEST_TYPEFilter = NestedEnumREQUEST_TYPEFilter;
