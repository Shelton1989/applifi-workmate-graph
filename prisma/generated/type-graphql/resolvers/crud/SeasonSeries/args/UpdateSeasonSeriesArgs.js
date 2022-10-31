"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesUpdateInput_1 = require("../../../inputs/SeasonSeriesUpdateInput");
const SeasonSeriesWhereUniqueInput_1 = require("../../../inputs/SeasonSeriesWhereUniqueInput");
let UpdateSeasonSeriesArgs = class UpdateSeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateInput_1.SeasonSeriesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateInput_1.SeasonSeriesUpdateInput)
], UpdateSeasonSeriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], UpdateSeasonSeriesArgs.prototype, "where", void 0);
UpdateSeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateSeasonSeriesArgs);
exports.UpdateSeasonSeriesArgs = UpdateSeasonSeriesArgs;
