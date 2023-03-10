"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyMealInputEnvelope_1 = require("../inputs/PostCreateManyMealInputEnvelope");
const PostCreateOrConnectWithoutMealInput_1 = require("../inputs/PostCreateOrConnectWithoutMealInput");
const PostCreateWithoutMealInput_1 = require("../inputs/PostCreateWithoutMealInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutMealInput = class PostCreateNestedManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutMealInput_1.PostCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutMealInput_1.PostCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyMealInputEnvelope_1.PostCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyMealInputEnvelope_1.PostCreateManyMealInputEnvelope)
], PostCreateNestedManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutMealInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutMealInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutMealInput);
exports.PostCreateNestedManyWithoutMealInput = PostCreateNestedManyWithoutMealInput;
