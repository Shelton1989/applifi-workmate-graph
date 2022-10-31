"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManySeasonSeriesInputEnvelope_1 = require("../inputs/PostCreateManySeasonSeriesInputEnvelope");
const PostCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateOrConnectWithoutSeasonSeriesInput");
const PostCreateWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateWithoutSeasonSeriesInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutSeasonSeriesInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutSeasonSeriesInput");
const PostUpdateWithWhereUniqueWithoutSeasonSeriesInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutSeasonSeriesInput");
const PostUpsertWithWhereUniqueWithoutSeasonSeriesInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutSeasonSeriesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutSeasonSeriesInput = class PostUpdateManyWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutSeasonSeriesInput_1.PostCreateWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutSeasonSeriesInput_1.PostCreateOrConnectWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutSeasonSeriesInput_1.PostUpsertWithWhereUniqueWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManySeasonSeriesInputEnvelope_1.PostCreateManySeasonSeriesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManySeasonSeriesInputEnvelope_1.PostCreateManySeasonSeriesInputEnvelope)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutSeasonSeriesInput_1.PostUpdateWithWhereUniqueWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutSeasonSeriesInput_1.PostUpdateManyWithWhereWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdateManyWithoutSeasonSeriesInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutSeasonSeriesInput);
exports.PostUpdateManyWithoutSeasonSeriesInput = PostUpdateManyWithoutSeasonSeriesInput;
