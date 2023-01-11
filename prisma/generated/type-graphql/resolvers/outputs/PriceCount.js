"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriceCount = class PriceCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCount.prototype, "BookingLineItems", void 0);
PriceCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriceCount", {
        isAbstract: true
    })
], PriceCount);
exports.PriceCount = PriceCount;
