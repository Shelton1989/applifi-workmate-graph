"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutReactionsInput_1 = require("../inputs/PostCreateWithoutReactionsInput");
const PostUpdateWithoutReactionsInput_1 = require("../inputs/PostUpdateWithoutReactionsInput");
let PostUpsertWithoutReactionsInput = class PostUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutReactionsInput_1.PostUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutReactionsInput_1.PostUpdateWithoutReactionsInput)
], PostUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput)
], PostUpsertWithoutReactionsInput.prototype, "create", void 0);
PostUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], PostUpsertWithoutReactionsInput);
exports.PostUpsertWithoutReactionsInput = PostUpsertWithoutReactionsInput;
