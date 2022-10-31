"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateWithoutReactionsInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateOrConnectWithoutReactionsInput = class SeasonSeriesCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput)
], SeasonSeriesCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
SeasonSeriesCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], SeasonSeriesCreateOrConnectWithoutReactionsInput);
exports.SeasonSeriesCreateOrConnectWithoutReactionsInput = SeasonSeriesCreateOrConnectWithoutReactionsInput;
