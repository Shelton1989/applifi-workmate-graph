"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutEpisodeInput_1 = require("../inputs/PostUpdateWithoutEpisodeInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutEpisodeInput = class PostUpdateWithWhereUniqueWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutEpisodeInput_1.PostUpdateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutEpisodeInput_1.PostUpdateWithoutEpisodeInput)
], PostUpdateWithWhereUniqueWithoutEpisodeInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutEpisodeInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutEpisodeInput);
exports.PostUpdateWithWhereUniqueWithoutEpisodeInput = PostUpdateWithWhereUniqueWithoutEpisodeInput;
