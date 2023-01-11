"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrency = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCountAggregate_1 = require("../outputs/CurrencyCountAggregate");
const CurrencyMaxAggregate_1 = require("../outputs/CurrencyMaxAggregate");
const CurrencyMinAggregate_1 = require("../outputs/CurrencyMinAggregate");
let AggregateCurrency = class AggregateCurrency {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCountAggregate_1.CurrencyCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCountAggregate_1.CurrencyCountAggregate)
], AggregateCurrency.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyMinAggregate_1.CurrencyMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyMinAggregate_1.CurrencyMinAggregate)
], AggregateCurrency.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyMaxAggregate_1.CurrencyMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyMaxAggregate_1.CurrencyMaxAggregate)
], AggregateCurrency.prototype, "_max", void 0);
AggregateCurrency = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCurrency", {
        isAbstract: true
    })
], AggregateCurrency);
exports.AggregateCurrency = AggregateCurrency;
