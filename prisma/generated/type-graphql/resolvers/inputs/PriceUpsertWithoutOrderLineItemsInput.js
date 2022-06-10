"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateWithoutOrderLineItemsInput");
const PriceUpdateWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpdateWithoutOrderLineItemsInput");
let PriceUpsertWithoutOrderLineItemsInput = class PriceUpsertWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutOrderLineItemsInput_1.PriceUpdateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutOrderLineItemsInput_1.PriceUpdateWithoutOrderLineItemsInput)
], PriceUpsertWithoutOrderLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput)
], PriceUpsertWithoutOrderLineItemsInput.prototype, "create", void 0);
PriceUpsertWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpsertWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], PriceUpsertWithoutOrderLineItemsInput);
exports.PriceUpsertWithoutOrderLineItemsInput = PriceUpsertWithoutOrderLineItemsInput;
