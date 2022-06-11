"use strict";
var NestedEnumROLEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumROLEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ROLE_1 = require("../../enums/ROLE");
let NestedEnumROLEFilter = NestedEnumROLEFilter_1 = class NestedEnumROLEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumROLEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLEFilter)
], NestedEnumROLEFilter.prototype, "not", void 0);
NestedEnumROLEFilter = NestedEnumROLEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumROLEFilter", {
        isAbstract: true
    })
], NestedEnumROLEFilter);
exports.NestedEnumROLEFilter = NestedEnumROLEFilter;
