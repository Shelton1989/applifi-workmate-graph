"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateNestedOneWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutSeasonSeriesInput");
const AggregateRatingCreateWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateWithoutSeasonSeriesInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateNestedOneWithoutSeasonSeriesInput = class AggregateRatingCreateNestedOneWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput)
], AggregateRatingCreateNestedOneWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutSeasonSeriesInput_1.AggregateRatingCreateOrConnectWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutSeasonSeriesInput_1.AggregateRatingCreateOrConnectWithoutSeasonSeriesInput)
], AggregateRatingCreateNestedOneWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateNestedOneWithoutSeasonSeriesInput.prototype, "connect", void 0);
AggregateRatingCreateNestedOneWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateNestedOneWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], AggregateRatingCreateNestedOneWithoutSeasonSeriesInput);
exports.AggregateRatingCreateNestedOneWithoutSeasonSeriesInput = AggregateRatingCreateNestedOneWithoutSeasonSeriesInput;
