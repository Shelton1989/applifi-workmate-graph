"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyEpisodeInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyEpisodeInput_1 = require("../inputs/PostCreateManyEpisodeInput");
let PostCreateManyEpisodeInputEnvelope = class PostCreateManyEpisodeInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyEpisodeInput_1.PostCreateManyEpisodeInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyEpisodeInputEnvelope.prototype, "data", void 0);
PostCreateManyEpisodeInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyEpisodeInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyEpisodeInputEnvelope);
exports.PostCreateManyEpisodeInputEnvelope = PostCreateManyEpisodeInputEnvelope;
