"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyTopicInputEnvelope_1 = require("../inputs/PostCreateManyTopicInputEnvelope");
const PostCreateOrConnectWithoutTopicInput_1 = require("../inputs/PostCreateOrConnectWithoutTopicInput");
const PostCreateWithoutTopicInput_1 = require("../inputs/PostCreateWithoutTopicInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutTopicInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutTopicInput");
const PostUpdateWithWhereUniqueWithoutTopicInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutTopicInput");
const PostUpsertWithWhereUniqueWithoutTopicInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutTopicInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutTopicInput = class PostUpdateManyWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutTopicInput_1.PostCreateWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutTopicInput_1.PostCreateOrConnectWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutTopicInput_1.PostUpsertWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyTopicInputEnvelope_1.PostCreateManyTopicInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyTopicInputEnvelope_1.PostCreateManyTopicInputEnvelope)
], PostUpdateManyWithoutTopicInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutTopicInput_1.PostUpdateWithWhereUniqueWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutTopicInput_1.PostUpdateManyWithWhereWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutTopicInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutTopicInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutTopicInput);
exports.PostUpdateManyWithoutTopicInput = PostUpdateManyWithoutTopicInput;
