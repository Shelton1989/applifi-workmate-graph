"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateNestedOneWithoutPricesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateOrConnectWithoutPricesInput_1 = require("../inputs/CurrencyCreateOrConnectWithoutPricesInput");
const CurrencyCreateWithoutPricesInput_1 = require("../inputs/CurrencyCreateWithoutPricesInput");
const CurrencyWhereUniqueInput_1 = require("../inputs/CurrencyWhereUniqueInput");
let CurrencyCreateNestedOneWithoutPricesInput = class CurrencyCreateNestedOneWithoutPricesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput)
], CurrencyCreateNestedOneWithoutPricesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutPricesInput_1.CurrencyCreateOrConnectWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateOrConnectWithoutPricesInput_1.CurrencyCreateOrConnectWithoutPricesInput)
], CurrencyCreateNestedOneWithoutPricesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], CurrencyCreateNestedOneWithoutPricesInput.prototype, "connect", void 0);
CurrencyCreateNestedOneWithoutPricesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutPricesInput", {
        isAbstract: true
    })
], CurrencyCreateNestedOneWithoutPricesInput);
exports.CurrencyCreateNestedOneWithoutPricesInput = CurrencyCreateNestedOneWithoutPricesInput;
