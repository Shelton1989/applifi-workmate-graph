"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyExperienceInputEnvelope_1 = require("../inputs/PostCreateManyExperienceInputEnvelope");
const PostCreateOrConnectWithoutExperienceInput_1 = require("../inputs/PostCreateOrConnectWithoutExperienceInput");
const PostCreateWithoutExperienceInput_1 = require("../inputs/PostCreateWithoutExperienceInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutExperienceInput = class PostCreateNestedManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutExperienceInput_1.PostCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutExperienceInput_1.PostCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyExperienceInputEnvelope_1.PostCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyExperienceInputEnvelope_1.PostCreateManyExperienceInputEnvelope)
], PostCreateNestedManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutExperienceInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutExperienceInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutExperienceInput);
exports.PostCreateNestedManyWithoutExperienceInput = PostCreateNestedManyWithoutExperienceInput;
