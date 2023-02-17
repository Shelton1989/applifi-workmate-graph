"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyUpdateOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateOrConnectWithoutTransactionsInput");
const CurrencyCreateWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateWithoutTransactionsInput");
const CurrencyUpdateWithoutTransactionsInput_1 = require("../inputs/CurrencyUpdateWithoutTransactionsInput");
const CurrencyUpsertWithoutTransactionsInput_1 = require("../inputs/CurrencyUpsertWithoutTransactionsInput");
const CurrencyWhereUniqueInput_1 = require("../inputs/CurrencyWhereUniqueInput");
let CurrencyUpdateOneWithoutTransactionsInput = class CurrencyUpdateOneWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput)
], CurrencyUpdateOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutTransactionsInput_1.CurrencyCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateOrConnectWithoutTransactionsInput_1.CurrencyCreateOrConnectWithoutTransactionsInput)
], CurrencyUpdateOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpsertWithoutTransactionsInput_1.CurrencyUpsertWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpsertWithoutTransactionsInput_1.CurrencyUpsertWithoutTransactionsInput)
], CurrencyUpdateOneWithoutTransactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CurrencyUpdateOneWithoutTransactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CurrencyUpdateOneWithoutTransactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], CurrencyUpdateOneWithoutTransactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateWithoutTransactionsInput_1.CurrencyUpdateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateWithoutTransactionsInput_1.CurrencyUpdateWithoutTransactionsInput)
], CurrencyUpdateOneWithoutTransactionsInput.prototype, "update", void 0);
CurrencyUpdateOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyUpdateOneWithoutTransactionsInput", {
        isAbstract: true
    })
], CurrencyUpdateOneWithoutTransactionsInput);
exports.CurrencyUpdateOneWithoutTransactionsInput = CurrencyUpdateOneWithoutTransactionsInput;
