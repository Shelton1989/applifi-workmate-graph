"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManySeasonSeriesInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManySeasonSeriesInput_1 = require("../inputs/PostCreateManySeasonSeriesInput");
let PostCreateManySeasonSeriesInputEnvelope = class PostCreateManySeasonSeriesInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManySeasonSeriesInput_1.PostCreateManySeasonSeriesInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManySeasonSeriesInputEnvelope.prototype, "data", void 0);
PostCreateManySeasonSeriesInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManySeasonSeriesInputEnvelope", {
        isAbstract: true
    })
], PostCreateManySeasonSeriesInputEnvelope);
exports.PostCreateManySeasonSeriesInputEnvelope = PostCreateManySeasonSeriesInputEnvelope;
