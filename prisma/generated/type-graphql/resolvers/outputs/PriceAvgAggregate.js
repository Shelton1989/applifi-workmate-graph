"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriceAvgAggregate = class PriceAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriceAvgAggregate.prototype, "priceInLowestDenomination", void 0);
PriceAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriceAvgAggregate", {
        isAbstract: true
    })
], PriceAvgAggregate);
exports.PriceAvgAggregate = PriceAvgAggregate;
