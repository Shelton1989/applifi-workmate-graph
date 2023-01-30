"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceAvgAggregate_1 = require("../outputs/PriceAvgAggregate");
const PriceCountAggregate_1 = require("../outputs/PriceCountAggregate");
const PriceMaxAggregate_1 = require("../outputs/PriceMaxAggregate");
const PriceMinAggregate_1 = require("../outputs/PriceMinAggregate");
const PriceSumAggregate_1 = require("../outputs/PriceSumAggregate");
let PriceGroupBy = class PriceGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceGroupBy.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceGroupBy.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceGroupBy.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceGroupBy.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceGroupBy.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceGroupBy.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PriceGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PriceGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCountAggregate_1.PriceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCountAggregate_1.PriceCountAggregate)
], PriceGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceAvgAggregate_1.PriceAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceAvgAggregate_1.PriceAvgAggregate)
], PriceGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceSumAggregate_1.PriceSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceSumAggregate_1.PriceSumAggregate)
], PriceGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceMinAggregate_1.PriceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceMinAggregate_1.PriceMinAggregate)
], PriceGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceMaxAggregate_1.PriceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceMaxAggregate_1.PriceMaxAggregate)
], PriceGroupBy.prototype, "_max", void 0);
PriceGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriceGroupBy", {
        isAbstract: true
    })
], PriceGroupBy);
exports.PriceGroupBy = PriceGroupBy;
