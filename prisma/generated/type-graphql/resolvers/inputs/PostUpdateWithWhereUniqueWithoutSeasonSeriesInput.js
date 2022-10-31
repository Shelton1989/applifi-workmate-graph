"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutSeasonSeriesInput_1 = require("../inputs/PostUpdateWithoutSeasonSeriesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutSeasonSeriesInput = class PostUpdateWithWhereUniqueWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutSeasonSeriesInput_1.PostUpdateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutSeasonSeriesInput_1.PostUpdateWithoutSeasonSeriesInput)
], PostUpdateWithWhereUniqueWithoutSeasonSeriesInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutSeasonSeriesInput);
exports.PostUpdateWithWhereUniqueWithoutSeasonSeriesInput = PostUpdateWithWhereUniqueWithoutSeasonSeriesInput;
