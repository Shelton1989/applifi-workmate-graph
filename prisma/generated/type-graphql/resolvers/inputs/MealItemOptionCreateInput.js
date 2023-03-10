"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateNestedOneWithoutOptionsInput_1 = require("../inputs/MealItemCreateNestedOneWithoutOptionsInput");
const OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput");
let MealItemOptionCreateInput = class MealItemOptionCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedOneWithoutOptionsInput_1.MealItemCreateNestedOneWithoutOptionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedOneWithoutOptionsInput_1.MealItemCreateNestedOneWithoutOptionsInput)
], MealItemOptionCreateInput.prototype, "MealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput)
], MealItemOptionCreateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateInput.prototype, "updatedAt", void 0);
MealItemOptionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateInput", {
        isAbstract: true
    })
], MealItemOptionCreateInput);
exports.MealItemOptionCreateInput = MealItemOptionCreateInput;
