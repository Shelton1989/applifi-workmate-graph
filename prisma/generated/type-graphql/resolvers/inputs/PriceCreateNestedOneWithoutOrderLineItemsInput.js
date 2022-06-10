"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateOrConnectWithoutOrderLineItemsInput");
const PriceCreateWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateWithoutOrderLineItemsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedOneWithoutOrderLineItemsInput = class PriceCreateNestedOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput)
], PriceCreateNestedOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutOrderLineItemsInput_1.PriceCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutOrderLineItemsInput_1.PriceCreateOrConnectWithoutOrderLineItemsInput)
], PriceCreateNestedOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateNestedOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
PriceCreateNestedOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateNestedOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], PriceCreateNestedOneWithoutOrderLineItemsInput);
exports.PriceCreateNestedOneWithoutOrderLineItemsInput = PriceCreateNestedOneWithoutOrderLineItemsInput;
