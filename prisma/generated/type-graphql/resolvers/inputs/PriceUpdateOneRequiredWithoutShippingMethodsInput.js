"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneRequiredWithoutShippingMethodsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateOrConnectWithoutShippingMethodsInput");
const PriceCreateWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateWithoutShippingMethodsInput");
const PriceUpdateWithoutShippingMethodsInput_1 = require("../inputs/PriceUpdateWithoutShippingMethodsInput");
const PriceUpsertWithoutShippingMethodsInput_1 = require("../inputs/PriceUpsertWithoutShippingMethodsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneRequiredWithoutShippingMethodsInput = class PriceUpdateOneRequiredWithoutShippingMethodsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput)
], PriceUpdateOneRequiredWithoutShippingMethodsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutShippingMethodsInput_1.PriceCreateOrConnectWithoutShippingMethodsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutShippingMethodsInput_1.PriceCreateOrConnectWithoutShippingMethodsInput)
], PriceUpdateOneRequiredWithoutShippingMethodsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpsertWithoutShippingMethodsInput_1.PriceUpsertWithoutShippingMethodsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpsertWithoutShippingMethodsInput_1.PriceUpsertWithoutShippingMethodsInput)
], PriceUpdateOneRequiredWithoutShippingMethodsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneRequiredWithoutShippingMethodsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutShippingMethodsInput_1.PriceUpdateWithoutShippingMethodsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutShippingMethodsInput_1.PriceUpdateWithoutShippingMethodsInput)
], PriceUpdateOneRequiredWithoutShippingMethodsInput.prototype, "update", void 0);
PriceUpdateOneRequiredWithoutShippingMethodsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateOneRequiredWithoutShippingMethodsInput", {
        isAbstract: true
    })
], PriceUpdateOneRequiredWithoutShippingMethodsInput);
exports.PriceUpdateOneRequiredWithoutShippingMethodsInput = PriceUpdateOneRequiredWithoutShippingMethodsInput;
