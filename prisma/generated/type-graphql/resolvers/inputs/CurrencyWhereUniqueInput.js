"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CurrencyWhereUniqueInput = class CurrencyWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyWhereUniqueInput.prototype, "id", void 0);
CurrencyWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyWhereUniqueInput", {
        isAbstract: true
    })
], CurrencyWhereUniqueInput);
exports.CurrencyWhereUniqueInput = CurrencyWhereUniqueInput;
