"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyPricesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceOrderByWithRelationInput_1 = require("../../../inputs/PriceOrderByWithRelationInput");
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
const PriceScalarFieldEnum_1 = require("../../../../enums/PriceScalarFieldEnum");
let CurrencyPricesArgs = class CurrencyPricesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], CurrencyPricesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrencyPricesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], CurrencyPricesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CurrencyPricesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CurrencyPricesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceScalarFieldEnum_1.PriceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrencyPricesArgs.prototype, "distinct", void 0);
CurrencyPricesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CurrencyPricesArgs);
exports.CurrencyPricesArgs = CurrencyPricesArgs;
