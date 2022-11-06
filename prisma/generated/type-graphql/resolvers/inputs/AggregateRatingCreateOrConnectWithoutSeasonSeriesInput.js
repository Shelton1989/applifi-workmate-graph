"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateOrConnectWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateWithoutSeasonSeriesInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateOrConnectWithoutSeasonSeriesInput = class AggregateRatingCreateOrConnectWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateOrConnectWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput)
], AggregateRatingCreateOrConnectWithoutSeasonSeriesInput.prototype, "create", void 0);
AggregateRatingCreateOrConnectWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateOrConnectWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], AggregateRatingCreateOrConnectWithoutSeasonSeriesInput);
exports.AggregateRatingCreateOrConnectWithoutSeasonSeriesInput = AggregateRatingCreateOrConnectWithoutSeasonSeriesInput;
