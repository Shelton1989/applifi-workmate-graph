"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpsertWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateWithoutOrderLineItemsInput");
const MealItemOptionUpdateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionUpdateWithoutOrderLineItemsInput");
let MealItemOptionUpsertWithoutOrderLineItemsInput = class MealItemOptionUpsertWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateWithoutOrderLineItemsInput_1.MealItemOptionUpdateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateWithoutOrderLineItemsInput_1.MealItemOptionUpdateWithoutOrderLineItemsInput)
], MealItemOptionUpsertWithoutOrderLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput)
], MealItemOptionUpsertWithoutOrderLineItemsInput.prototype, "create", void 0);
MealItemOptionUpsertWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpsertWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemOptionUpsertWithoutOrderLineItemsInput);
exports.MealItemOptionUpsertWithoutOrderLineItemsInput = MealItemOptionUpsertWithoutOrderLineItemsInput;
