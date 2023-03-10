"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealItem = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCountAggregate_1 = require("../outputs/MealItemCountAggregate");
const MealItemMaxAggregate_1 = require("../outputs/MealItemMaxAggregate");
const MealItemMinAggregate_1 = require("../outputs/MealItemMinAggregate");
let AggregateMealItem = class AggregateMealItem {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCountAggregate_1.MealItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCountAggregate_1.MealItemCountAggregate)
], AggregateMealItem.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemMinAggregate_1.MealItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemMinAggregate_1.MealItemMinAggregate)
], AggregateMealItem.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemMaxAggregate_1.MealItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemMaxAggregate_1.MealItemMaxAggregate)
], AggregateMealItem.prototype, "_max", void 0);
AggregateMealItem = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMealItem", {
        isAbstract: true
    })
], AggregateMealItem);
exports.AggregateMealItem = AggregateMealItem;
