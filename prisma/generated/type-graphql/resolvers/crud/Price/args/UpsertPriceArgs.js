"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateInput_1 = require("../../../inputs/PriceCreateInput");
const PriceUpdateInput_1 = require("../../../inputs/PriceUpdateInput");
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
let UpsertPriceArgs = class UpsertPriceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], UpsertPriceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateInput_1.PriceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateInput_1.PriceCreateInput)
], UpsertPriceArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateInput_1.PriceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateInput_1.PriceUpdateInput)
], UpsertPriceArgs.prototype, "update", void 0);
UpsertPriceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertPriceArgs);
exports.UpsertPriceArgs = UpsertPriceArgs;
