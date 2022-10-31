"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutReactionsInput");
const SeasonSeriesCreateWithoutReactionsInput_1 = require("../inputs/SeasonSeriesCreateWithoutReactionsInput");
const SeasonSeriesUpdateWithoutReactionsInput_1 = require("../inputs/SeasonSeriesUpdateWithoutReactionsInput");
const SeasonSeriesUpsertWithoutReactionsInput_1 = require("../inputs/SeasonSeriesUpsertWithoutReactionsInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesUpdateOneWithoutReactionsInput = class SeasonSeriesUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutReactionsInput_1.SeasonSeriesCreateWithoutReactionsInput)
], SeasonSeriesUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutReactionsInput_1.SeasonSeriesCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutReactionsInput_1.SeasonSeriesCreateOrConnectWithoutReactionsInput)
], SeasonSeriesUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpsertWithoutReactionsInput_1.SeasonSeriesUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpsertWithoutReactionsInput_1.SeasonSeriesUpsertWithoutReactionsInput)
], SeasonSeriesUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SeasonSeriesUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SeasonSeriesUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutReactionsInput_1.SeasonSeriesUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutReactionsInput_1.SeasonSeriesUpdateWithoutReactionsInput)
], SeasonSeriesUpdateOneWithoutReactionsInput.prototype, "update", void 0);
SeasonSeriesUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateOneWithoutReactionsInput);
exports.SeasonSeriesUpdateOneWithoutReactionsInput = SeasonSeriesUpdateOneWithoutReactionsInput;
