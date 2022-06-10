"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyWhereInput_1 = require("../../../inputs/CurrencyWhereInput");
let DeleteManyCurrencyArgs = class DeleteManyCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereInput_1.CurrencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereInput_1.CurrencyWhereInput)
], DeleteManyCurrencyArgs.prototype, "where", void 0);
DeleteManyCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCurrencyArgs);
exports.DeleteManyCurrencyArgs = DeleteManyCurrencyArgs;
