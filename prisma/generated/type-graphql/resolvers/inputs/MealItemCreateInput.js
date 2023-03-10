"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedManyWithoutItemsInput_1 = require("../inputs/MealCreateNestedManyWithoutItemsInput");
const MealItemCreatemealIdsInput_1 = require("../inputs/MealItemCreatemealIdsInput");
const MealItemOptionCreateNestedManyWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateNestedManyWithoutMealItemInput");
const OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemInput");
let MealItemCreateInput = class MealItemCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedManyWithoutItemsInput_1.MealCreateNestedManyWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateNestedManyWithoutItemsInput_1.MealCreateNestedManyWithoutItemsInput)
], MealItemCreateInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput)
], MealItemCreateInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateNestedManyWithoutMealItemInput_1.MealItemOptionCreateNestedManyWithoutMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateNestedManyWithoutMealItemInput_1.MealItemOptionCreateNestedManyWithoutMealItemInput)
], MealItemCreateInput.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedMealItemInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemInput)
], MealItemCreateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateInput.prototype, "updatedAt", void 0);
MealItemCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateInput", {
        isAbstract: true
    })
], MealItemCreateInput);
exports.MealItemCreateInput = MealItemCreateInput;
