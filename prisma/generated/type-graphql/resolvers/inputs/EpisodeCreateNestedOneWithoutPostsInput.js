"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateOrConnectWithoutPostsInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutPostsInput");
const EpisodeCreateWithoutPostsInput_1 = require("../inputs/EpisodeCreateWithoutPostsInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateNestedOneWithoutPostsInput = class EpisodeCreateNestedOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput)
], EpisodeCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateOrConnectWithoutPostsInput_1.EpisodeCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateOrConnectWithoutPostsInput_1.EpisodeCreateOrConnectWithoutPostsInput)
], EpisodeCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
EpisodeCreateNestedOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], EpisodeCreateNestedOneWithoutPostsInput);
exports.EpisodeCreateNestedOneWithoutPostsInput = EpisodeCreateNestedOneWithoutPostsInput;
