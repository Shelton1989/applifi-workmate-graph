"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
let FindUniquePriceArgs = class FindUniquePriceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], FindUniquePriceArgs.prototype, "where", void 0);
FindUniquePriceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePriceArgs);
exports.FindUniquePriceArgs = FindUniquePriceArgs;