"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutTopicInput_1 = require("../inputs/PostCreateWithoutTopicInput");
const PostUpdateWithoutTopicInput_1 = require("../inputs/PostUpdateWithoutTopicInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutTopicInput = class PostUpsertWithWhereUniqueWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutTopicInput_1.PostUpdateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutTopicInput_1.PostUpdateWithoutTopicInput)
], PostUpsertWithWhereUniqueWithoutTopicInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutTopicInput_1.PostCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutTopicInput_1.PostCreateWithoutTopicInput)
], PostUpsertWithWhereUniqueWithoutTopicInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutTopicInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutTopicInput);
exports.PostUpsertWithWhereUniqueWithoutTopicInput = PostUpsertWithWhereUniqueWithoutTopicInput;
