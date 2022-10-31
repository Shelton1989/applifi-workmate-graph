"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutTopicInput_1 = require("../inputs/PostCreateWithoutTopicInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutTopicInput = class PostCreateOrConnectWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutTopicInput_1.PostCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutTopicInput_1.PostCreateWithoutTopicInput)
], PostCreateOrConnectWithoutTopicInput.prototype, "create", void 0);
PostCreateOrConnectWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutTopicInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutTopicInput);
exports.PostCreateOrConnectWithoutTopicInput = PostCreateOrConnectWithoutTopicInput;
