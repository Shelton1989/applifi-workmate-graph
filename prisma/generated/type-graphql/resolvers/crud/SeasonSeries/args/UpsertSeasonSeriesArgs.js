"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateInput_1 = require("../../../inputs/SeasonSeriesCreateInput");
const SeasonSeriesUpdateInput_1 = require("../../../inputs/SeasonSeriesUpdateInput");
const SeasonSeriesWhereUniqueInput_1 = require("../../../inputs/SeasonSeriesWhereUniqueInput");
let UpsertSeasonSeriesArgs = class UpsertSeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], UpsertSeasonSeriesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateInput_1.SeasonSeriesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateInput_1.SeasonSeriesCreateInput)
], UpsertSeasonSeriesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateInput_1.SeasonSeriesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateInput_1.SeasonSeriesUpdateInput)
], UpsertSeasonSeriesArgs.prototype, "update", void 0);
UpsertSeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertSeasonSeriesArgs);
exports.UpsertSeasonSeriesArgs = UpsertSeasonSeriesArgs;
