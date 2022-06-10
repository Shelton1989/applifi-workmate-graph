"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneRequiredWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateOrConnectWithoutOrderLineItemsInput");
const PriceCreateWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateWithoutOrderLineItemsInput");
const PriceUpdateWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpdateWithoutOrderLineItemsInput");
const PriceUpsertWithoutOrderLineItemsInput_1 = require("../inputs/PriceUpsertWithoutOrderLineItemsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneRequiredWithoutOrderLineItemsInput = class PriceUpdateOneRequiredWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutOrderLineItemsInput_1.PriceCreateWithoutOrderLineItemsInput)
], PriceUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutOrderLineItemsInput_1.PriceCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutOrderLineItemsInput_1.PriceCreateOrConnectWithoutOrderLineItemsInput)
], PriceUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpsertWithoutOrderLineItemsInput_1.PriceUpsertWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpsertWithoutOrderLineItemsInput_1.PriceUpsertWithoutOrderLineItemsInput)
], PriceUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutOrderLineItemsInput_1.PriceUpdateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutOrderLineItemsInput_1.PriceUpdateWithoutOrderLineItemsInput)
], PriceUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "update", void 0);
PriceUpdateOneRequiredWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateOneRequiredWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], PriceUpdateOneRequiredWithoutOrderLineItemsInput);
exports.PriceUpdateOneRequiredWithoutOrderLineItemsInput = PriceUpdateOneRequiredWithoutOrderLineItemsInput;
