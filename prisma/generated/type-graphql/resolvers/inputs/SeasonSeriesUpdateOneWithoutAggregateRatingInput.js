"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutAggregateRatingInput");
const SeasonSeriesCreateWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateWithoutAggregateRatingInput");
const SeasonSeriesUpdateWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesUpdateWithoutAggregateRatingInput");
const SeasonSeriesUpsertWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesUpsertWithoutAggregateRatingInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesUpdateOneWithoutAggregateRatingInput = class SeasonSeriesUpdateOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutAggregateRatingInput_1.SeasonSeriesCreateWithoutAggregateRatingInput)
], SeasonSeriesUpdateOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutAggregateRatingInput_1.SeasonSeriesCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutAggregateRatingInput_1.SeasonSeriesCreateOrConnectWithoutAggregateRatingInput)
], SeasonSeriesUpdateOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpsertWithoutAggregateRatingInput_1.SeasonSeriesUpsertWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpsertWithoutAggregateRatingInput_1.SeasonSeriesUpsertWithoutAggregateRatingInput)
], SeasonSeriesUpdateOneWithoutAggregateRatingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SeasonSeriesUpdateOneWithoutAggregateRatingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SeasonSeriesUpdateOneWithoutAggregateRatingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesUpdateOneWithoutAggregateRatingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutAggregateRatingInput_1.SeasonSeriesUpdateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutAggregateRatingInput_1.SeasonSeriesUpdateWithoutAggregateRatingInput)
], SeasonSeriesUpdateOneWithoutAggregateRatingInput.prototype, "update", void 0);
SeasonSeriesUpdateOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateOneWithoutAggregateRatingInput);
exports.SeasonSeriesUpdateOneWithoutAggregateRatingInput = SeasonSeriesUpdateOneWithoutAggregateRatingInput;
