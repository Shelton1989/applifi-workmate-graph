"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateOneRequiredWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutProductsInput_1 = require("../inputs/PriceCreateOrConnectWithoutProductsInput");
const PriceCreateWithoutProductsInput_1 = require("../inputs/PriceCreateWithoutProductsInput");
const PriceUpdateWithoutProductsInput_1 = require("../inputs/PriceUpdateWithoutProductsInput");
const PriceUpsertWithoutProductsInput_1 = require("../inputs/PriceUpsertWithoutProductsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateOneRequiredWithoutProductsInput = class PriceUpdateOneRequiredWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput)
], PriceUpdateOneRequiredWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutProductsInput_1.PriceCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutProductsInput_1.PriceCreateOrConnectWithoutProductsInput)
], PriceUpdateOneRequiredWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpsertWithoutProductsInput_1.PriceUpsertWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpsertWithoutProductsInput_1.PriceUpsertWithoutProductsInput)
], PriceUpdateOneRequiredWithoutProductsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateOneRequiredWithoutProductsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutProductsInput_1.PriceUpdateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutProductsInput_1.PriceUpdateWithoutProductsInput)
], PriceUpdateOneRequiredWithoutProductsInput.prototype, "update", void 0);
PriceUpdateOneRequiredWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateOneRequiredWithoutProductsInput", {
        isAbstract: true
    })
], PriceUpdateOneRequiredWithoutProductsInput);
exports.PriceUpdateOneRequiredWithoutProductsInput = PriceUpdateOneRequiredWithoutProductsInput;
