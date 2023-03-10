"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealItemOptionCount = class MealItemOptionCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MealItemOptionCount.prototype, "OrderLineItems", void 0);
MealItemOptionCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealItemOptionCount", {
        isAbstract: true
    })
], MealItemOptionCount);
exports.MealItemOptionCount = MealItemOptionCount;
