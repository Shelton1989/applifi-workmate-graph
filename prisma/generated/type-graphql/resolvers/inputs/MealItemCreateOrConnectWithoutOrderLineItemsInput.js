"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCreateOrConnectWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateWithoutOrderLineItemsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemCreateOrConnectWithoutOrderLineItemsInput = class MealItemCreateOrConnectWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemCreateOrConnectWithoutOrderLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput)
], MealItemCreateOrConnectWithoutOrderLineItemsInput.prototype, "create", void 0);
MealItemCreateOrConnectWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemCreateOrConnectWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemCreateOrConnectWithoutOrderLineItemsInput);
exports.MealItemCreateOrConnectWithoutOrderLineItemsInput = MealItemCreateOrConnectWithoutOrderLineItemsInput;
