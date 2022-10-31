"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateOrConnectWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutPostsInput_1 = require("../inputs/EpisodeCreateWithoutPostsInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateOrConnectWithoutPostsInput = class EpisodeCreateOrConnectWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput)
], EpisodeCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
EpisodeCreateOrConnectWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateOrConnectWithoutPostsInput", {
        isAbstract: true
    })
], EpisodeCreateOrConnectWithoutPostsInput);
exports.EpisodeCreateOrConnectWithoutPostsInput = EpisodeCreateOrConnectWithoutPostsInput;
