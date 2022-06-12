"use strict";
var NestedEnumROLENullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumROLENullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ROLE_1 = require("../../enums/ROLE");
let NestedEnumROLENullableFilter = NestedEnumROLENullableFilter_1 = class NestedEnumROLENullableFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumROLENullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLENullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ROLE_1.ROLE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumROLENullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumROLENullableFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumROLENullableFilter)
], NestedEnumROLENullableFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], NestedEnumROLENullableFilter.prototype, "isSet", void 0);
NestedEnumROLENullableFilter = NestedEnumROLENullableFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumROLENullableFilter", {
        isAbstract: true
    })
], NestedEnumROLENullableFilter);
exports.NestedEnumROLENullableFilter = NestedEnumROLENullableFilter;
