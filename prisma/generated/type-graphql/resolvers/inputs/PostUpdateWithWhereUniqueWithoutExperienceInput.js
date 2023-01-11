"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutExperienceInput_1 = require("../inputs/PostUpdateWithoutExperienceInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutExperienceInput = class PostUpdateWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutExperienceInput_1.PostUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutExperienceInput_1.PostUpdateWithoutExperienceInput)
], PostUpdateWithWhereUniqueWithoutExperienceInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutExperienceInput);
exports.PostUpdateWithWhereUniqueWithoutExperienceInput = PostUpdateWithWhereUniqueWithoutExperienceInput;
