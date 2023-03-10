"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateNestedOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateOrConnectWithoutOrderLineItemsInput");
const MealItemCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateWithoutOrderLineItemsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemCreateNestedOneWithoutOrderLineItemsInput = class MealItemCreateNestedOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput)
], MealItemCreateNestedOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateOrConnectWithoutOrderLineItemsInput_1.MealItemCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateOrConnectWithoutOrderLineItemsInput_1.MealItemCreateOrConnectWithoutOrderLineItemsInput)
], MealItemCreateNestedOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemCreateNestedOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
MealItemCreateNestedOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateNestedOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemCreateNestedOneWithoutOrderLineItemsInput);
exports.MealItemCreateNestedOneWithoutOrderLineItemsInput = MealItemCreateNestedOneWithoutOrderLineItemsInput;
