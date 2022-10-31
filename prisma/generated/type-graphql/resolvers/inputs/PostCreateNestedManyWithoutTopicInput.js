"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyTopicInputEnvelope_1 = require("../inputs/PostCreateManyTopicInputEnvelope");
const PostCreateOrConnectWithoutTopicInput_1 = require("../inputs/PostCreateOrConnectWithoutTopicInput");
const PostCreateWithoutTopicInput_1 = require("../inputs/PostCreateWithoutTopicInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutTopicInput = class PostCreateNestedManyWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutTopicInput_1.PostCreateWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutTopicInput_1.PostCreateOrConnectWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyTopicInputEnvelope_1.PostCreateManyTopicInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyTopicInputEnvelope_1.PostCreateManyTopicInputEnvelope)
], PostCreateNestedManyWithoutTopicInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutTopicInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutTopicInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutTopicInput);
exports.PostCreateNestedManyWithoutTopicInput = PostCreateNestedManyWithoutTopicInput;
