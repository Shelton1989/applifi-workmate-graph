"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesWhereUniqueInput_1 = require("../../../inputs/SeasonSeriesWhereUniqueInput");
let FindUniqueSeasonSeriesArgs = class FindUniqueSeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], FindUniqueSeasonSeriesArgs.prototype, "where", void 0);
FindUniqueSeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSeasonSeriesArgs);
exports.FindUniqueSeasonSeriesArgs = FindUniqueSeasonSeriesArgs;
