"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealItemCount = class MealItemCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MealItemCount.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MealItemCount.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MealItemCount.prototype, "OrderLineItems", void 0);
MealItemCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealItemCount", {
        isAbstract: true
    })
], MealItemCount);
exports.MealItemCount = MealItemCount;
