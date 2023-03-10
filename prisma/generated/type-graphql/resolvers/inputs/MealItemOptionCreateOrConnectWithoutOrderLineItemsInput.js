"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateOrConnectWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateWithoutOrderLineItemsInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionCreateOrConnectWithoutOrderLineItemsInput = class MealItemOptionCreateOrConnectWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], MealItemOptionCreateOrConnectWithoutOrderLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput)
], MealItemOptionCreateOrConnectWithoutOrderLineItemsInput.prototype, "create", void 0);
MealItemOptionCreateOrConnectWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateOrConnectWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemOptionCreateOrConnectWithoutOrderLineItemsInput);
exports.MealItemOptionCreateOrConnectWithoutOrderLineItemsInput = MealItemOptionCreateOrConnectWithoutOrderLineItemsInput;
