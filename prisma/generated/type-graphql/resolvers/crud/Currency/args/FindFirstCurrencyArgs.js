"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCurrencyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyOrderByWithRelationInput_1 = require("../../../inputs/CurrencyOrderByWithRelationInput");
const CurrencyWhereInput_1 = require("../../../inputs/CurrencyWhereInput");
const CurrencyWhereUniqueInput_1 = require("../../../inputs/CurrencyWhereUniqueInput");
const CurrencyScalarFieldEnum_1 = require("../../../../enums/CurrencyScalarFieldEnum");
let FindFirstCurrencyArgs = class FindFirstCurrencyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereInput_1.CurrencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereInput_1.CurrencyWhereInput)
], FindFirstCurrencyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyOrderByWithRelationInput_1.CurrencyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCurrencyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyWhereUniqueInput_1.CurrencyWhereUniqueInput)
], FindFirstCurrencyArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCurrencyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCurrencyArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyScalarFieldEnum_1.CurrencyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCurrencyArgs.prototype, "distinct", void 0);
FindFirstCurrencyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCurrencyArgs);
exports.FindFirstCurrencyArgs = FindFirstCurrencyArgs;
