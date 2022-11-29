"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IntNullableListFilter = class IntNullableListFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntNullableListFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntNullableListFilter.prototype, "has", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntNullableListFilter.prototype, "hasEvery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntNullableListFilter.prototype, "hasSome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], IntNullableListFilter.prototype, "isEmpty", void 0);
IntNullableListFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IntNullableListFilter", {
        isAbstract: true
    })
], IntNullableListFilter);
exports.IntNullableListFilter = IntNullableListFilter;
