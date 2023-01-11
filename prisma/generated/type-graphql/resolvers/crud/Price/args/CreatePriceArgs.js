"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateInput_1 = require("../../../inputs/PriceCreateInput");
let CreatePriceArgs = class CreatePriceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateInput_1.PriceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateInput_1.PriceCreateInput)
], CreatePriceArgs.prototype, "data", void 0);
CreatePriceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreatePriceArgs);
exports.CreatePriceArgs = CreatePriceArgs;
