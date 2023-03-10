"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateWithoutOptionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedManyWithoutItemsInput_1 = require("../inputs/MealCreateNestedManyWithoutItemsInput");
const MealItemCreatemealIdsInput_1 = require("../inputs/MealItemCreatemealIdsInput");
const OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemInput");
let MealItemCreateWithoutOptionsInput = class MealItemCreateWithoutOptionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutOptionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedManyWithoutItemsInput_1.MealCreateNestedManyWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateNestedManyWithoutItemsInput_1.MealCreateNestedManyWithoutItemsInput)
], MealItemCreateWithoutOptionsInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput)
], MealItemCreateWithoutOptionsInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutOptionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutOptionsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput)
], MealItemCreateWithoutOptionsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateWithoutOptionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateWithoutOptionsInput.prototype, "updatedAt", void 0);
MealItemCreateWithoutOptionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateWithoutOptionsInput", {
        isAbstract: true
    })
], MealItemCreateWithoutOptionsInput);
exports.MealItemCreateWithoutOptionsInput = MealItemCreateWithoutOptionsInput;
