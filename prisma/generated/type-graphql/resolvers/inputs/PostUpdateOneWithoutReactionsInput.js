"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutReactionsInput_1 = require("../inputs/PostCreateOrConnectWithoutReactionsInput");
const PostCreateWithoutReactionsInput_1 = require("../inputs/PostCreateWithoutReactionsInput");
const PostUpdateWithoutReactionsInput_1 = require("../inputs/PostUpdateWithoutReactionsInput");
const PostUpsertWithoutReactionsInput_1 = require("../inputs/PostUpsertWithoutReactionsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneWithoutReactionsInput = class PostUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutReactionsInput_1.PostCreateWithoutReactionsInput)
], PostUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutReactionsInput_1.PostCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutReactionsInput_1.PostCreateOrConnectWithoutReactionsInput)
], PostUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutReactionsInput_1.PostUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpsertWithoutReactionsInput_1.PostUpsertWithoutReactionsInput)
], PostUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutReactionsInput_1.PostUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutReactionsInput_1.PostUpdateWithoutReactionsInput)
], PostUpdateOneWithoutReactionsInput.prototype, "update", void 0);
PostUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], PostUpdateOneWithoutReactionsInput);
exports.PostUpdateOneWithoutReactionsInput = PostUpdateOneWithoutReactionsInput;
