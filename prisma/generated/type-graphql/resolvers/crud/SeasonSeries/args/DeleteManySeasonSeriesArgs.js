"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesWhereInput_1 = require("../../../inputs/SeasonSeriesWhereInput");
let DeleteManySeasonSeriesArgs = class DeleteManySeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], DeleteManySeasonSeriesArgs.prototype, "where", void 0);
DeleteManySeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySeasonSeriesArgs);
exports.DeleteManySeasonSeriesArgs = DeleteManySeasonSeriesArgs;
