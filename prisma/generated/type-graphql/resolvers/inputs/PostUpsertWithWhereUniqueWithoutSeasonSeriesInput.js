"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateWithoutSeasonSeriesInput");
const PostUpdateWithoutSeasonSeriesInput_1 = require("../inputs/PostUpdateWithoutSeasonSeriesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutSeasonSeriesInput = class PostUpsertWithWhereUniqueWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutSeasonSeriesInput_1.PostUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutSeasonSeriesInput_1.PostUpdateWithoutSeasonSeriesInput)
], PostUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutSeasonSeriesInput_1.PostCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutSeasonSeriesInput_1.PostCreateWithoutSeasonSeriesInput)
], PostUpsertWithWhereUniqueWithoutSeasonSeriesInput.prototype, "create", void 0);
PostUpsertWithWhereUniqueWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostUpsertWithWhereUniqueWithoutSeasonSeriesInput);
exports.PostUpsertWithWhereUniqueWithoutSeasonSeriesInput = PostUpsertWithWhereUniqueWithoutSeasonSeriesInput;
