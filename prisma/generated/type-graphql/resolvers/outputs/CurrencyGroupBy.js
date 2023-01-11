"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCountAggregate_1 = require("../outputs/CurrencyCountAggregate");
const CurrencyMaxAggregate_1 = require("../outputs/CurrencyMaxAggregate");
const CurrencyMinAggregate_1 = require("../outputs/CurrencyMinAggregate");
let CurrencyGroupBy = class CurrencyGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyGroupBy.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCountAggregate_1.CurrencyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCountAggregate_1.CurrencyCountAggregate)
], CurrencyGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyMinAggregate_1.CurrencyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyMinAggregate_1.CurrencyMinAggregate)
], CurrencyGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyMaxAggregate_1.CurrencyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyMaxAggregate_1.CurrencyMaxAggregate)
], CurrencyGroupBy.prototype, "_max", void 0);
CurrencyGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CurrencyGroupBy", {
        isAbstract: true
    })
], CurrencyGroupBy);
exports.CurrencyGroupBy = CurrencyGroupBy;
