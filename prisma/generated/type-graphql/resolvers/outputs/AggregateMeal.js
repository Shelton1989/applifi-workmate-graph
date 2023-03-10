"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMeal = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCountAggregate_1 = require("../outputs/MealCountAggregate");
const MealMaxAggregate_1 = require("../outputs/MealMaxAggregate");
const MealMinAggregate_1 = require("../outputs/MealMinAggregate");
let AggregateMeal = class AggregateMeal {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCountAggregate_1.MealCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCountAggregate_1.MealCountAggregate)
], AggregateMeal.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealMinAggregate_1.MealMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealMinAggregate_1.MealMinAggregate)
], AggregateMeal.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealMaxAggregate_1.MealMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealMaxAggregate_1.MealMaxAggregate)
], AggregateMeal.prototype, "_max", void 0);
AggregateMeal = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMeal", {
        isAbstract: true
    })
], AggregateMeal);
exports.AggregateMeal = AggregateMeal;
