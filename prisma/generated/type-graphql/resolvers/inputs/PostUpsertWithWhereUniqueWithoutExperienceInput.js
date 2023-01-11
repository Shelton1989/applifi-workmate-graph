"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutExperienceInput_1 = require("../inputs/PostCreateWithoutExperienceInput");
const PostUpdateWithoutExperienceInput_1 = require("../inputs/PostUpdateWithoutExperienceInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutExperienceInput = class PostUpsertWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutExperienceInput_1.PostUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutExperienceInput_1.PostUpdateWithoutExperienceInput)
], PostUpsertWithWhereUniqueWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutExperienceInput_1.PostCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutExperienceInput_1.PostCreateWithoutExperienceInput)
], PostUpsertWithWhereUniqueWithoutExperienceInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutExperienceInput);
exports.PostUpsertWithWhereUniqueWithoutExperienceInput = PostUpsertWithWhereUniqueWithoutExperienceInput;
