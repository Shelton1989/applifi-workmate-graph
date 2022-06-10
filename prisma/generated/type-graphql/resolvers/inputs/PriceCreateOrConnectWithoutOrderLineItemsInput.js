"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateWithoutOrderLineItemsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutOrderLineItemsInput = class PriceCreateOrConnectWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutOrderLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput)
], PriceCreateOrConnectWithoutOrderLineItemsInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutOrderLineItemsInput);
exports.PriceCreateOrConnectWithoutOrderLineItemsInput = PriceCreateOrConnectWithoutOrderLineItemsInput;
