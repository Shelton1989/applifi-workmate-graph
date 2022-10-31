"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutEpisodeInput_1 = require("../inputs/PostCreateWithoutEpisodeInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutEpisodeInput = class PostCreateOrConnectWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutEpisodeInput_1.PostCreateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutEpisodeInput_1.PostCreateWithoutEpisodeInput)
], PostCreateOrConnectWithoutEpisodeInput.prototype, "create", void 0);
PostCreateOrConnectWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutEpisodeInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutEpisodeInput);
exports.PostCreateOrConnectWithoutEpisodeInput = PostCreateOrConnectWithoutEpisodeInput;
