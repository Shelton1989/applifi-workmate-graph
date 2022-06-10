"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutReactionsInput_1 = require("../inputs/PostCreateOrConnectWithoutReactionsInput");
const PostCreateWithoutReactionsInput_1 = require("../inputs/PostCreateWithoutReactionsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedOneWithoutReactionsInput = class PostCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput)
], PostCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutReactionsInput_1.PostCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutReactionsInput_1.PostCreateOrConnectWithoutReactionsInput)
], PostCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
PostCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], PostCreateNestedOneWithoutReactionsInput);
exports.PostCreateNestedOneWithoutReactionsInput = PostCreateNestedOneWithoutReactionsInput;
