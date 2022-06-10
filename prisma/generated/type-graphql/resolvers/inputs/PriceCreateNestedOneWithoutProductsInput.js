"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedOneWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutProductsInput_1 = require("../inputs/PriceCreateOrConnectWithoutProductsInput");
const PriceCreateWithoutProductsInput_1 = require("../inputs/PriceCreateWithoutProductsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedOneWithoutProductsInput = class PriceCreateNestedOneWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput)
], PriceCreateNestedOneWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutProductsInput_1.PriceCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutProductsInput_1.PriceCreateOrConnectWithoutProductsInput)
], PriceCreateNestedOneWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateNestedOneWithoutProductsInput.prototype, "connect", void 0);
PriceCreateNestedOneWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateNestedOneWithoutProductsInput", {
        isAbstract: true
    })
], PriceCreateNestedOneWithoutProductsInput);
exports.PriceCreateNestedOneWithoutProductsInput = PriceCreateNestedOneWithoutProductsInput;
