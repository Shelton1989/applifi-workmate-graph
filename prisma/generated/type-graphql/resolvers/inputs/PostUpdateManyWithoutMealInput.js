"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManyMealInputEnvelope_1 = require("../inputs/PostCreateManyMealInputEnvelope");
const PostCreateOrConnectWithoutMealInput_1 = require("../inputs/PostCreateOrConnectWithoutMealInput");
const PostCreateWithoutMealInput_1 = require("../inputs/PostCreateWithoutMealInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutMealInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutMealInput");
const PostUpdateWithWhereUniqueWithoutMealInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutMealInput");
const PostUpsertWithWhereUniqueWithoutMealInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutMealInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutMealInput = class PostUpdateManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutMealInput_1.PostCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutMealInput_1.PostCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutMealInput_1.PostUpsertWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManyMealInputEnvelope_1.PostCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManyMealInputEnvelope_1.PostCreateManyMealInputEnvelope)
], PostUpdateManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutMealInput_1.PostUpdateWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutMealInput_1.PostUpdateManyWithWhereWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutMealInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutMealInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutMealInput);
exports.PostUpdateManyWithoutMealInput = PostUpdateManyWithoutMealInput;
