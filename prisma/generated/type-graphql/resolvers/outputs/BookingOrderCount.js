"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderCount = class BookingOrderCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderCount.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderCount.prototype, "Transactions", void 0);
BookingOrderCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrderCount", {
        isAbstract: true
    })
], BookingOrderCount);
exports.BookingOrderCount = BookingOrderCount;
