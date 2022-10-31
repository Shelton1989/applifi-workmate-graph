"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateWithoutReactionsInput");
const SeasonSeriesUpdateWithoutReactionsInput_1 = require("../inputs/SeasonSeriesUpdateWithoutReactionsInput");
let SeasonSeriesUpsertWithoutReactionsInput = class SeasonSeriesUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutReactionsInput_1.SeasonSeriesUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutReactionsInput_1.SeasonSeriesUpdateWithoutReactionsInput)
], SeasonSeriesUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput)
], SeasonSeriesUpsertWithoutReactionsInput.prototype, "create", void 0);
SeasonSeriesUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], SeasonSeriesUpsertWithoutReactionsInput);
exports.SeasonSeriesUpsertWithoutReactionsInput = SeasonSeriesUpsertWithoutReactionsInput;
