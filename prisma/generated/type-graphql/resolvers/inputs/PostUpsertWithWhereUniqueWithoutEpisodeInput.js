"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutEpisodeInput_1 = require("../inputs/PostCreateWithoutEpisodeInput");
const PostUpdateWithoutEpisodeInput_1 = require("../inputs/PostUpdateWithoutEpisodeInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutEpisodeInput = class PostUpsertWithWhereUniqueWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutEpisodeInput_1.PostUpdateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutEpisodeInput_1.PostUpdateWithoutEpisodeInput)
], PostUpsertWithWhereUniqueWithoutEpisodeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutEpisodeInput_1.PostCreateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutEpisodeInput_1.PostCreateWithoutEpisodeInput)
], PostUpsertWithWhereUniqueWithoutEpisodeInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutEpisodeInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutEpisodeInput);
exports.PostUpsertWithWhereUniqueWithoutEpisodeInput = PostUpsertWithWhereUniqueWithoutEpisodeInput;
