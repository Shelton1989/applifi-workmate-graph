"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateOrConnectWithoutPricesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateWithoutPricesInput_1 = require("../inputs/CurrencyCreateWithoutPricesInput");
const CurrencyWhereUniqueInput_1 = require("../inputs/CurrencyWhereUniqueInput");
let CurrencyCreateOrConnectWithoutPricesInput = class CurrencyCreateOrConnectWithoutPricesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], CurrencyCreateOrConnectWithoutPricesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput)
], CurrencyCreateOrConnectWithoutPricesInput.prototype, "create", void 0);
CurrencyCreateOrConnectWithoutPricesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutPricesInput", {
        isAbstract: true
    })
], CurrencyCreateOrConnectWithoutPricesInput);
exports.CurrencyCreateOrConnectWithoutPricesInput = CurrencyCreateOrConnectWithoutPricesInput;
