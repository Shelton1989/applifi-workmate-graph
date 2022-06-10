"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutProductsInput_1 = require("../inputs/PriceCreateWithoutProductsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutProductsInput = class PriceCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput)
], PriceCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutProductsInput);
exports.PriceCreateOrConnectWithoutProductsInput = PriceCreateOrConnectWithoutProductsInput;
