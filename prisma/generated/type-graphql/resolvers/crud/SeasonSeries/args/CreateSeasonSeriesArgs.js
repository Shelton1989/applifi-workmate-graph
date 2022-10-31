"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateInput_1 = require("../../../inputs/SeasonSeriesCreateInput");
let CreateSeasonSeriesArgs = class CreateSeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateInput_1.SeasonSeriesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateInput_1.SeasonSeriesCreateInput)
], CreateSeasonSeriesArgs.prototype, "data", void 0);
CreateSeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateSeasonSeriesArgs);
exports.CreateSeasonSeriesArgs = CreateSeasonSeriesArgs;
