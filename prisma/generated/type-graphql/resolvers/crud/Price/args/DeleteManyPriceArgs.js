"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
let DeleteManyPriceArgs = class DeleteManyPriceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereInput_1.PriceWhereInput)
], DeleteManyPriceArgs.prototype, "where", void 0);
DeleteManyPriceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPriceArgs);
exports.DeleteManyPriceArgs = DeleteManyPriceArgs;
