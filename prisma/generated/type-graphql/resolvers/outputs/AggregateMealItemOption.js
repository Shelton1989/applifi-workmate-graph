"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealItemOption = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCountAggregate_1 = require("../outputs/MealItemOptionCountAggregate");
const MealItemOptionMaxAggregate_1 = require("../outputs/MealItemOptionMaxAggregate");
const MealItemOptionMinAggregate_1 = require("../outputs/MealItemOptionMinAggregate");
let AggregateMealItemOption = class AggregateMealItemOption {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCountAggregate_1.MealItemOptionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCountAggregate_1.MealItemOptionCountAggregate)
], AggregateMealItemOption.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionMinAggregate_1.MealItemOptionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionMinAggregate_1.MealItemOptionMinAggregate)
], AggregateMealItemOption.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionMaxAggregate_1.MealItemOptionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionMaxAggregate_1.MealItemOptionMaxAggregate)
], AggregateMealItemOption.prototype, "_max", void 0);
AggregateMealItemOption = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMealItemOption", {
        isAbstract: true
    })
], AggregateMealItemOption);
exports.AggregateMealItemOption = AggregateMealItemOption;
