"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateWithoutSeasonSeriesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutSeasonSeriesInput = class PostCreateOrConnectWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutSeasonSeriesInput_1.PostCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutSeasonSeriesInput_1.PostCreateWithoutSeasonSeriesInput)
], PostCreateOrConnectWithoutSeasonSeriesInput.prototype, "create", void 0);
PostCreateOrConnectWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutSeasonSeriesInput);
exports.PostCreateOrConnectWithoutSeasonSeriesInput = PostCreateOrConnectWithoutSeasonSeriesInput;
