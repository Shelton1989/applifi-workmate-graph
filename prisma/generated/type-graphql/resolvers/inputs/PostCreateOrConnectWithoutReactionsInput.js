"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutReactionsInput_1 = require("../inputs/PostCreateWithoutReactionsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutReactionsInput = class PostCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput)
], PostCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
PostCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutReactionsInput);
exports.PostCreateOrConnectWithoutReactionsInput = PostCreateOrConnectWithoutReactionsInput;
