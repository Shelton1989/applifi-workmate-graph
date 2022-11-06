"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpdateOneWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutSeasonSeriesInput");
const AggregateRatingCreateWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateWithoutSeasonSeriesInput");
const AggregateRatingUpdateWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingUpdateWithoutSeasonSeriesInput");
const AggregateRatingUpsertWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingUpsertWithoutSeasonSeriesInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingUpdateOneWithoutSeasonSeriesInput = class AggregateRatingUpdateOneWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutSeasonSeriesInput_1.AggregateRatingCreateWithoutSeasonSeriesInput)
], AggregateRatingUpdateOneWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutSeasonSeriesInput_1.AggregateRatingCreateOrConnectWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutSeasonSeriesInput_1.AggregateRatingCreateOrConnectWithoutSeasonSeriesInput)
], AggregateRatingUpdateOneWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpsertWithoutSeasonSeriesInput_1.AggregateRatingUpsertWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpsertWithoutSeasonSeriesInput_1.AggregateRatingUpsertWithoutSeasonSeriesInput)
], AggregateRatingUpdateOneWithoutSeasonSeriesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutSeasonSeriesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AggregateRatingUpdateOneWithoutSeasonSeriesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingUpdateOneWithoutSeasonSeriesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutSeasonSeriesInput_1.AggregateRatingUpdateWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutSeasonSeriesInput_1.AggregateRatingUpdateWithoutSeasonSeriesInput)
], AggregateRatingUpdateOneWithoutSeasonSeriesInput.prototype, "update", void 0);
AggregateRatingUpdateOneWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpdateOneWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], AggregateRatingUpdateOneWithoutSeasonSeriesInput);
exports.AggregateRatingUpdateOneWithoutSeasonSeriesInput = AggregateRatingUpdateOneWithoutSeasonSeriesInput;
