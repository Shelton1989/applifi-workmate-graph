"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySeasonSeriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesUpdateManyMutationInput_1 = require("../../../inputs/SeasonSeriesUpdateManyMutationInput");
const SeasonSeriesWhereInput_1 = require("../../../inputs/SeasonSeriesWhereInput");
let UpdateManySeasonSeriesArgs = class UpdateManySeasonSeriesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateManyMutationInput_1.SeasonSeriesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateManyMutationInput_1.SeasonSeriesUpdateManyMutationInput)
], UpdateManySeasonSeriesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereInput_1.SeasonSeriesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereInput_1.SeasonSeriesWhereInput)
], UpdateManySeasonSeriesArgs.prototype, "where", void 0);
UpdateManySeasonSeriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySeasonSeriesArgs);
exports.UpdateManySeasonSeriesArgs = UpdateManySeasonSeriesArgs;
