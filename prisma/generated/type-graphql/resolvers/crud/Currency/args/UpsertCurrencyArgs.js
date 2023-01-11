"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateInput_1 = require("../../../inputs/CurrencyCreateInput");
const CurrencyUpdateInput_1 = require("../../../inputs/CurrencyUpdateInput");
const CurrencyWhereUniqueInput_1 = require("../../../inputs/CurrencyWhereUniqueInput");
let UpsertCurrencyArgs = class UpsertCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], UpsertCurrencyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateInput_1.CurrencyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateInput_1.CurrencyCreateInput)
], UpsertCurrencyArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateInput_1.CurrencyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateInput_1.CurrencyUpdateInput)
], UpsertCurrencyArgs.prototype, "update", void 0);
UpsertCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCurrencyArgs);
exports.UpsertCurrencyArgs = UpsertCurrencyArgs;
