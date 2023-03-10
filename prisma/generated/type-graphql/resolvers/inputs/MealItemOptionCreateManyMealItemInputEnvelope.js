"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateManyMealItemInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateManyMealItemInput_1 = require("../inputs/MealItemOptionCreateManyMealItemInput");
let MealItemOptionCreateManyMealItemInputEnvelope = class MealItemOptionCreateManyMealItemInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionCreateManyMealItemInput_1.MealItemOptionCreateManyMealItemInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionCreateManyMealItemInputEnvelope.prototype, "data", void 0);
MealItemOptionCreateManyMealItemInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateManyMealItemInputEnvelope", {
        isAbstract: true
    })
], MealItemOptionCreateManyMealItemInputEnvelope);
exports.MealItemOptionCreateManyMealItemInputEnvelope = MealItemOptionCreateManyMealItemInputEnvelope;
