"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillingCount = class BillingCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillingCount.prototype, "ProductKeys", void 0);
BillingCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillingCount", {
        isAbstract: true
    })
], BillingCount);
exports.BillingCount = BillingCount;
