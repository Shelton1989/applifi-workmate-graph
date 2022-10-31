"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeScalarWhereInput_1 = require("../inputs/EpisodeScalarWhereInput");
const EpisodeUpdateManyMutationInput_1 = require("../inputs/EpisodeUpdateManyMutationInput");
let EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput = class EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeScalarWhereInput_1.EpisodeScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeScalarWhereInput_1.EpisodeScalarWhereInput)
], EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateManyMutationInput_1.EpisodeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateManyMutationInput_1.EpisodeUpdateManyMutationInput)
], EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput.prototype, "data", void 0);
EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput);
exports.EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput = EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput;
