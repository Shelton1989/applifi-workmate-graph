"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyEpisodeInputEnvelope_1 = require("../inputs/PostCreateManyEpisodeInputEnvelope");
const PostCreateOrConnectWithoutEpisodeInput_1 = require("../inputs/PostCreateOrConnectWithoutEpisodeInput");
const PostCreateWithoutEpisodeInput_1 = require("../inputs/PostCreateWithoutEpisodeInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutEpisodeInput = class PostCreateNestedManyWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutEpisodeInput_1.PostCreateWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutEpisodeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutEpisodeInput_1.PostCreateOrConnectWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutEpisodeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyEpisodeInputEnvelope_1.PostCreateManyEpisodeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyEpisodeInputEnvelope_1.PostCreateManyEpisodeInputEnvelope)
], PostCreateNestedManyWithoutEpisodeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutEpisodeInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutEpisodeInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutEpisodeInput);
exports.PostCreateNestedManyWithoutEpisodeInput = PostCreateNestedManyWithoutEpisodeInput;
