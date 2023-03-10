"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumDIETARY_RESTRICTIONSNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
let EnumDIETARY_RESTRICTIONSNullableListFilter = class EnumDIETARY_RESTRICTIONSNullableListFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumDIETARY_RESTRICTIONSNullableListFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumDIETARY_RESTRICTIONSNullableListFilter.prototype, "has", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumDIETARY_RESTRICTIONSNullableListFilter.prototype, "hasEvery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumDIETARY_RESTRICTIONSNullableListFilter.prototype, "hasSome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumDIETARY_RESTRICTIONSNullableListFilter.prototype, "isEmpty", void 0);
EnumDIETARY_RESTRICTIONSNullableListFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumDIETARY_RESTRICTIONSNullableListFilter", {
        isAbstract: true
    })
], EnumDIETARY_RESTRICTIONSNullableListFilter);
exports.EnumDIETARY_RESTRICTIONSNullableListFilter = EnumDIETARY_RESTRICTIONSNullableListFilter;
