"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceOrderByWithRelationInput_1 = require("../../../inputs/PriceOrderByWithRelationInput");
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
let AggregatePriceArgs = class AggregatePriceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], AggregatePriceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePriceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], AggregatePriceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePriceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePriceArgs.prototype, "skip", void 0);
AggregatePriceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePriceArgs);
exports.AggregatePriceArgs = AggregatePriceArgs;
