"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MealItemOptionMaxAggregate = class MealItemOptionMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxAggregate.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxAggregate.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionMaxAggregate.prototype, "updatedAt", void 0);
MealItemOptionMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealItemOptionMaxAggregate", {
        isAbstract: true
    })
], MealItemOptionMaxAggregate);
exports.MealItemOptionMaxAggregate = MealItemOptionMaxAggregate;
