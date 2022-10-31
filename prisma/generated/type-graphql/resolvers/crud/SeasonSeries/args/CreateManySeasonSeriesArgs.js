"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateManyInput_1 = require("../../../inputs/SeasonSeriesCreateManyInput");
let CreateManySeasonSeriesArgs = class CreateManySeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesCreateManyInput_1.SeasonSeriesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySeasonSeriesArgs.prototype, "data", void 0);
CreateManySeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySeasonSeriesArgs);
exports.CreateManySeasonSeriesArgs = CreateManySeasonSeriesArgs;
