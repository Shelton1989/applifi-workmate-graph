"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyWhereUniqueInput_1 = require("../../../inputs/CurrencyWhereUniqueInput");
let FindUniqueCurrencyArgs = class FindUniqueCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], FindUniqueCurrencyArgs.prototype, "where", void 0);
FindUniqueCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCurrencyArgs);
exports.FindUniqueCurrencyArgs = FindUniqueCurrencyArgs;
