"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutTopicInput_1 = require("../inputs/PostUpdateWithoutTopicInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutTopicInput = class PostUpdateWithWhereUniqueWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutTopicInput_1.PostUpdateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutTopicInput_1.PostUpdateWithoutTopicInput)
], PostUpdateWithWhereUniqueWithoutTopicInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutTopicInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutTopicInput);
exports.PostUpdateWithWhereUniqueWithoutTopicInput = PostUpdateWithWhereUniqueWithoutTopicInput;
