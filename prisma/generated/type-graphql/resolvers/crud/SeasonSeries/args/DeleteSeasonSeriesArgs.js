"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesWhereUniqueInput_1 = require("../../../inputs/SeasonSeriesWhereUniqueInput");
let DeleteSeasonSeriesArgs = class DeleteSeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], DeleteSeasonSeriesArgs.prototype, "where", void 0);
DeleteSeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteSeasonSeriesArgs);
exports.DeleteSeasonSeriesArgs = DeleteSeasonSeriesArgs;
