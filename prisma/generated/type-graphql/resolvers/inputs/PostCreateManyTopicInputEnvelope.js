"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyTopicInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyTopicInput_1 = require("../inputs/PostCreateManyTopicInput");
let PostCreateManyTopicInputEnvelope = class PostCreateManyTopicInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateManyTopicInput_1.PostCreateManyTopicInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateManyTopicInputEnvelope.prototype, "data", void 0);
PostCreateManyTopicInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyTopicInputEnvelope", {
        isAbstract: true
    })
], PostCreateManyTopicInputEnvelope);
exports.PostCreateManyTopicInputEnvelope = PostCreateManyTopicInputEnvelope;
