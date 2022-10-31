"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutReactionsInput");
const SeasonSeriesCreateWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateWithoutReactionsInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateNestedOneWithoutReactionsInput = class SeasonSeriesCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput)
], SeasonSeriesCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutReactionsInput_1.SeasonSeriesCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutReactionsInput_1.SeasonSeriesCreateOrConnectWithoutReactionsInput)
], SeasonSeriesCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
SeasonSeriesCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], SeasonSeriesCreateNestedOneWithoutReactionsInput);
exports.SeasonSeriesCreateNestedOneWithoutReactionsInput = SeasonSeriesCreateNestedOneWithoutReactionsInput;
