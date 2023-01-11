"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriceSumAggregate = class PriceSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriceSumAggregate.prototype, "priceInLowestDenomination", void 0);
PriceSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriceSumAggregate", {
        isAbstract: true
    })
], PriceSumAggregate);
exports.PriceSumAggregate = PriceSumAggregate;
