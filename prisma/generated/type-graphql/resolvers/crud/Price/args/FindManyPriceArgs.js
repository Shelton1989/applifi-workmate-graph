"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceOrderByWithRelationInput_1 = require("../../../inputs/PriceOrderByWithRelationInput");
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
const PriceScalarFieldEnum_1 = require("../../../../enums/PriceScalarFieldEnum");
let FindManyPriceArgs = class FindManyPriceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], FindManyPriceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPriceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], FindManyPriceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPriceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPriceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceScalarFieldEnum_1.PriceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPriceArgs.prototype, "distinct", void 0);
FindManyPriceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyPriceArgs);
exports.FindManyPriceArgs = FindManyPriceArgs;
