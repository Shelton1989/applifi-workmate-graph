"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateNestedOneWithoutOptionsInput_1 = require("../inputs/MealItemCreateNestedOneWithoutOptionsInput");
let MealItemOptionCreateWithoutOrderLineItemsInput = class MealItemOptionCreateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateWithoutOrderLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedOneWithoutOptionsInput_1.MealItemCreateNestedOneWithoutOptionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedOneWithoutOptionsInput_1.MealItemCreateNestedOneWithoutOptionsInput)
], MealItemOptionCreateWithoutOrderLineItemsInput.prototype, "MealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateWithoutOrderLineItemsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionCreateWithoutOrderLineItemsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOptionCreateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
MealItemOptionCreateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemOptionCreateWithoutOrderLineItemsInput);
exports.MealItemOptionCreateWithoutOrderLineItemsInput = MealItemOptionCreateWithoutOrderLineItemsInput;
