"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpsertWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateWithoutOrderLineItemsInput");
const MealItemUpdateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemUpdateWithoutOrderLineItemsInput");
let MealItemUpsertWithoutOrderLineItemsInput = class MealItemUpsertWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateWithoutOrderLineItemsInput_1.MealItemUpdateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateWithoutOrderLineItemsInput_1.MealItemUpdateWithoutOrderLineItemsInput)
], MealItemUpsertWithoutOrderLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput)
], MealItemUpsertWithoutOrderLineItemsInput.prototype, "create", void 0);
MealItemUpsertWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpsertWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemUpsertWithoutOrderLineItemsInput);
exports.MealItemUpsertWithoutOrderLineItemsInput = MealItemUpsertWithoutOrderLineItemsInput;
