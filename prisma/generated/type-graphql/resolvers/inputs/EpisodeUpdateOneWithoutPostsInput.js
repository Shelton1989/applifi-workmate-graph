"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateOrConnectWithoutPostsInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutPostsInput");
const EpisodeCreateWithoutPostsInput_1 = require("../inputs/EpisodeCreateWithoutPostsInput");
const EpisodeUpdateWithoutPostsInput_1 = require("../inputs/EpisodeUpdateWithoutPostsInput");
const EpisodeUpsertWithoutPostsInput_1 = require("../inputs/EpisodeUpsertWithoutPostsInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeUpdateOneWithoutPostsInput = class EpisodeUpdateOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutPostsInput_1.EpisodeCreateWithoutPostsInput)
], EpisodeUpdateOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateOrConnectWithoutPostsInput_1.EpisodeCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateOrConnectWithoutPostsInput_1.EpisodeCreateOrConnectWithoutPostsInput)
], EpisodeUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpsertWithoutPostsInput_1.EpisodeUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpsertWithoutPostsInput_1.EpisodeUpsertWithoutPostsInput)
], EpisodeUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EpisodeUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EpisodeUpdateOneWithoutPostsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeUpdateOneWithoutPostsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutPostsInput_1.EpisodeUpdateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutPostsInput_1.EpisodeUpdateWithoutPostsInput)
], EpisodeUpdateOneWithoutPostsInput.prototype, "update", void 0);
EpisodeUpdateOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateOneWithoutPostsInput", {
        isAbstract: true
    })
], EpisodeUpdateOneWithoutPostsInput);
exports.EpisodeUpdateOneWithoutPostsInput = EpisodeUpdateOneWithoutPostsInput;
