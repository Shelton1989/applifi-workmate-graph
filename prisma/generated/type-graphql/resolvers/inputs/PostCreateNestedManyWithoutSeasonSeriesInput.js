"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateManySeasonSeriesInputEnvelope_1 = require("../inputs/PostCreateManySeasonSeriesInputEnvelope");
const PostCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateOrConnectWithoutSeasonSeriesInput");
const PostCreateWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateWithoutSeasonSeriesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutSeasonSeriesInput = class PostCreateNestedManyWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateWithoutSeasonSeriesInput_1.PostCreateWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutSeasonSeriesInput_1.PostCreateOrConnectWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateManySeasonSeriesInputEnvelope_1.PostCreateManySeasonSeriesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateManySeasonSeriesInputEnvelope_1.PostCreateManySeasonSeriesInputEnvelope)
], PostCreateNestedManyWithoutSeasonSeriesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostCreateNestedManyWithoutSeasonSeriesInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutSeasonSeriesInput);
exports.PostCreateNestedManyWithoutSeasonSeriesInput = PostCreateNestedManyWithoutSeasonSeriesInput;
