"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutPostsInput_1 = require("../inputs/EpisodeCreateWithoutPostsInput");
const EpisodeUpdateWithoutPostsInput_1 = require("../inputs/EpisodeUpdateWithoutPostsInput");
let EpisodeUpsertWithoutPostsInput = class EpisodeUpsertWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutPostsInput_1.EpisodeUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutPostsInput_1.EpisodeUpdateWithoutPostsInput)
], EpisodeUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput)
], EpisodeUpsertWithoutPostsInput.prototype, "create", void 0);
EpisodeUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpsertWithoutPostsInput", {
        isAbstract: true
    })
], EpisodeUpsertWithoutPostsInput);
exports.EpisodeUpsertWithoutPostsInput = EpisodeUpsertWithoutPostsInput;
