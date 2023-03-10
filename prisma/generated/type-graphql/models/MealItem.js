"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItem = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCount_1 = require("../resolvers/outputs/MealItemCount");
let MealItem = class MealItem {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItem.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealItem.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItem.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItem.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItem.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItem.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCount_1.MealItemCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCount_1.MealItemCount)
], MealItem.prototype, "_count", void 0);
MealItem = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealItem", {
        isAbstract: true
    })
], MealItem);
exports.MealItem = MealItem;
