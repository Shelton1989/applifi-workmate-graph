"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithWhereWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyMutationInput_1 = require("../inputs/PostUpdateManyMutationInput");
let PostUpdateManyWithWhereWithoutEpisodeInput = class PostUpdateManyWithWhereWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostScalarWhereInput_1.PostScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostScalarWhereInput_1.PostScalarWhereInput)
], PostUpdateManyWithWhereWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyMutationInput_1.PostUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateManyMutationInput_1.PostUpdateManyMutationInput)
], PostUpdateManyWithWhereWithoutEpisodeInput.prototype, "data", void 0);
PostUpdateManyWithWhereWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithWhereWithoutEpisodeInput", {
        isAbstract: true
    })
], PostUpdateManyWithWhereWithoutEpisodeInput);
exports.PostUpdateManyWithWhereWithoutEpisodeInput = PostUpdateManyWithWhereWithoutEpisodeInput;
