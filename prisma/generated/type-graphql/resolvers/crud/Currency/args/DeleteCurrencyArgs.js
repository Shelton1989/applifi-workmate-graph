"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyWhereUniqueInput_1 = require("../../../inputs/CurrencyWhereUniqueInput");
let DeleteCurrencyArgs = class DeleteCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], DeleteCurrencyArgs.prototype, "where", void 0);
DeleteCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteCurrencyArgs);
exports.DeleteCurrencyArgs = DeleteCurrencyArgs;
