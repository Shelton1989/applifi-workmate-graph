"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateOrConnectWithoutOrderLineItemsInput");
const MealItemOptionCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateWithoutOrderLineItemsInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionCreateNestedOneWithoutOrderLineItemsInput = class MealItemOptionCreateNestedOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput)
], MealItemOptionCreateNestedOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateOrConnectWithoutOrderLineItemsInput_1.MealItemOptionCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateOrConnectWithoutOrderLineItemsInput_1.MealItemOptionCreateOrConnectWithoutOrderLineItemsInput)
], MealItemOptionCreateNestedOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], MealItemOptionCreateNestedOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
MealItemOptionCreateNestedOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionCreateNestedOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemOptionCreateNestedOneWithoutOrderLineItemsInput);
exports.MealItemOptionCreateNestedOneWithoutOrderLineItemsInput = MealItemOptionCreateNestedOneWithoutOrderLineItemsInput;
