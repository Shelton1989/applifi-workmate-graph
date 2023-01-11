"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutExperienceInput_1 = require("../inputs/PostCreateWithoutExperienceInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutExperienceInput = class PostCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutExperienceInput_1.PostCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutExperienceInput_1.PostCreateWithoutExperienceInput)
], PostCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
PostCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutExperienceInput);
exports.PostCreateOrConnectWithoutExperienceInput = PostCreateOrConnectWithoutExperienceInput;
