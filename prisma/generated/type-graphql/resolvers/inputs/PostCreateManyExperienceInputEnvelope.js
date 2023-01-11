"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyExperienceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyExperienceInput_1 = require("../inputs/PostCreateManyExperienceInput");
let PostCreateManyExperienceInputEnvelope = class PostCreateManyExperienceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyExperienceInput_1.PostCreateManyExperienceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyExperienceInputEnvelope.prototype, "data", void 0);
PostCreateManyExperienceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyExperienceInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyExperienceInputEnvelope);
exports.PostCreateManyExperienceInputEnvelope = PostCreateManyExperienceInputEnvelope;
