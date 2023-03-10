"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutMealInput_1 = require("../inputs/PostCreateWithoutMealInput");
const PostUpdateWithoutMealInput_1 = require("../inputs/PostUpdateWithoutMealInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutMealInput = class PostUpsertWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutMealInput_1.PostUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutMealInput_1.PostUpdateWithoutMealInput)
], PostUpsertWithWhereUniqueWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutMealInput_1.PostCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutMealInput_1.PostCreateWithoutMealInput)
], PostUpsertWithWhereUniqueWithoutMealInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutMealInput);
exports.PostUpsertWithWhereUniqueWithoutMealInput = PostUpsertWithWhereUniqueWithoutMealInput;
