"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedManyWithoutItemsInput_1 = require("../inputs/MealCreateNestedManyWithoutItemsInput");
const MealItemCreatemealIdsInput_1 = require("../inputs/MealItemCreatemealIdsInput");
const MealItemOptionCreateNestedManyWithoutMealItemInput_1 = require("../inputs/MealItemOptionCreateNestedManyWithoutMealItemInput");
let MealItemCreateWithoutOrderLineItemsInput = class MealItemCreateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedManyWithoutItemsInput_1.MealCreateNestedManyWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateNestedManyWithoutItemsInput_1.MealCreateNestedManyWithoutItemsInput)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreatemealIdsInput_1.MealItemCreatemealIdsInput)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateNestedManyWithoutMealItemInput_1.MealItemOptionCreateNestedManyWithoutMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateNestedManyWithoutMealItemInput_1.MealItemOptionCreateNestedManyWithoutMealItemInput)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemCreateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
MealItemCreateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemCreateWithoutOrderLineItemsInput);
exports.MealItemCreateWithoutOrderLineItemsInput = MealItemCreateWithoutOrderLineItemsInput;
