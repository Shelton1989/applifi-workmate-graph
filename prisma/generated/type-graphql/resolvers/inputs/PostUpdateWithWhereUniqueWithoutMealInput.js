"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutMealInput_1 = require("../inputs/PostUpdateWithoutMealInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutMealInput = class PostUpdateWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutMealInput_1.PostUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutMealInput_1.PostUpdateWithoutMealInput)
], PostUpdateWithWhereUniqueWithoutMealInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutMealInput);
exports.PostUpdateWithWhereUniqueWithoutMealInput = PostUpdateWithWhereUniqueWithoutMealInput;
