"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyEpisodeInputEnvelope_1 = require("../inputs/PostCreateManyEpisodeInputEnvelope");
const PostCreateOrConnectWithoutEpisodeInput_1 = require("../inputs/PostCreateOrConnectWithoutEpisodeInput");
const PostCreateWithoutEpisodeInput_1 = require("../inputs/PostCreateWithoutEpisodeInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutEpisodeInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutEpisodeInput");
const PostUpdateWithWhereUniqueWithoutEpisodeInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutEpisodeInput");
const PostUpsertWithWhereUniqueWithoutEpisodeInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutEpisodeInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutEpisodeInput = class PostUpdateManyWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutEpisodeInput_1.PostCreateWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutEpisodeInput_1.PostCreateOrConnectWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutEpisodeInput_1.PostUpsertWithWhereUniqueWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyEpisodeInputEnvelope_1.PostCreateManyEpisodeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyEpisodeInputEnvelope_1.PostCreateManyEpisodeInputEnvelope)
], PostUpdateManyWithoutEpisodeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutEpisodeInput_1.PostUpdateWithWhereUniqueWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutEpisodeInput_1.PostUpdateManyWithWhereWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutEpisodeInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutEpisodeInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutEpisodeInput);
exports.PostUpdateManyWithoutEpisodeInput = PostUpdateManyWithoutEpisodeInput;
