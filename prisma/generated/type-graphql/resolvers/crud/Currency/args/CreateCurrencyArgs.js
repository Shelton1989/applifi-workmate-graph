"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateInput_1 = require("../../../inputs/CurrencyCreateInput");
let CreateCurrencyArgs = class CreateCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateInput_1.CurrencyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateInput_1.CurrencyCreateInput)
], CreateCurrencyArgs.prototype, "data", void 0);
CreateCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCurrencyArgs);
exports.CreateCurrencyArgs = CreateCurrencyArgs;
