"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutMealInput_1 = require("../inputs/PostCreateWithoutMealInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutMealInput = class PostCreateOrConnectWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutMealInput_1.PostCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutMealInput_1.PostCreateWithoutMealInput)
], PostCreateOrConnectWithoutMealInput.prototype, "create", void 0);
PostCreateOrConnectWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutMealInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutMealInput);
exports.PostCreateOrConnectWithoutMealInput = PostCreateOrConnectWithoutMealInput;
