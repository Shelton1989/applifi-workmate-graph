"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyUpdateInput_1 = require("../../../inputs/CurrencyUpdateInput");
const CurrencyWhereUniqueInput_1 = require("../../../inputs/CurrencyWhereUniqueInput");
let UpdateCurrencyArgs = class UpdateCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateInput_1.CurrencyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateInput_1.CurrencyUpdateInput)
], UpdateCurrencyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], UpdateCurrencyArgs.prototype, "where", void 0);
UpdateCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCurrencyArgs);
exports.UpdateCurrencyArgs = UpdateCurrencyArgs;
